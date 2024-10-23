const gameContainer = document.getElementById('gameContainer');
const startButton = document.getElementById('startButton');
const countdownDisplay = document.getElementById('countdown');
const scoreDisplay = document.getElementById('score');
const progressBar = document.getElementById('progressBar');

let countdown;
let lifespan;
const totalTime = 10;
countdownDisplay.textContent = `Time Left: ${totalTime}s`;

const targetCount = 5;
let gameActive = false;
let score = 0;

const targetTypes = [
    { points: 1, color: 'red' },
    { points: 5, color: 'green' },
    { points: -2, color: 'black' }
];
function startGame() {
    gameActive = true;
    score = 0;
    updateScore();
    gameContainer.classList.remove('hide');
    startButton.style.display = 'none';
    for (let i = 0; i < targetCount; i++) {
      createTarget();
    }
    //add new target every one second
    addTargets = setInterval(() => {
      let targetsNb = Math.floor(Math.random()*4)
      for (let i = 0; i < targetsNb; i++){
        createTarget();
      }
    },Math.random()*1500); 
        

    let timeLeft = totalTime; // Start countdown from total time
    updateProgressBar(timeLeft);

    countdown = setInterval(() => {
        timeLeft--;
        countdownDisplay.textContent = `Time Left: ${timeLeft}s`;

        updateProgressBar(timeLeft);

        if (timeLeft <= 0) {
            stopGame();
        }
    }, 1000); // Update countdown every second
}

function createTarget() {
    const target = document.createElement('div');
    const targetType = targetTypes[Math.floor(Math.random() * targetTypes.length)];
    target.classList.add('target');
    target.style.backgroundColor = targetType.color;
    randomizePosition(target);
    gameContainer.appendChild(target);
    //create a target's lifespan to remove it after a random time
    let lifeleft = 2000;
    lifespan = setInterval(() => {
      lifeleft = lifeleft - 0.5;
      if (lifeleft <= 0) {
        target.remove();
    }
    },500) ;
    
    target.addEventListener('click', () => {
            if (!gameActive) return;
            //I removed the apparition of another target when it was successfully clicked
            target.style.display = 'none';
            score = Math.max(0, score + targetType.points);
            updateScore();
    });

}

function randomizePosition(target) {
    const x = Math.random() * (window.innerWidth - 50); 
    const y = Math.random() * (window.innerHeight - 50);
    target.style.left = `${x}px`;
    target.style.top = `${y}px`;
}

function stopGame() {
    gameActive = false;
    clearInterval(countdown);
    clearInterval(addTargets);
    clearInterval(lifespan);
    countdownDisplay.textContent = "Time's up!";
    gameContainer.classList.add('hide');
    startButton.style.display = 'block';
}

function updateScore() {
    scoreDisplay.textContent = `Score: ${score}`;
}

function updateProgressBar(timeLeft) {
    const progress = (timeLeft / totalTime) * 100;
    progressBar.style.width = `${progress}%`;
}

// Event listener to start the game
startButton.addEventListener('click', startGame);

