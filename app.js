const gameContainer = document.getElementById('gameContainer');
const startButton = document.getElementById('startButton');
const countdownDisplay = document.getElementById('countdown');
const scoreDisplay = document.getElementById('score');
const progressBar = document.getElementById('progressBar');

const easyModeButton = document.getElementById("easyMode");
const normalModeButton = document.getElementById("normalMode");
const hardModeButton = document.getElementById("hardMode");

let countdown;


const targetLifecycle = 3000;

let totalTime = 10;

countdownDisplay.textContent = `Time Left: ${totalTime}s`;

let targetCount = 5;
let gameActive = false;
let score = 0;

const targetTypes = [
    { points: 1, imgUrl: "url('./img/sombrero.jpg')"},
    { points: 5, imgUrl: "url('./img/pinata.jpg')" },
    { points:-2,imgUrl: "url('./img/cactus.jpg')" }
];

// Selection de difficulté
easyModeButton.addEventListener("click", function() {
    selectDifficulty("easy");
});

normalModeButton.addEventListener("click", function() {
    selectDifficulty("normal");
});

hardModeButton.addEventListener("click", function() {
    selectDifficulty("hard");
});

/**
 * Défini la difficulté du jeu, change les variables en fonction de la difficulté et lance le jeu
 */
function selectDifficulty(difficulty) {
    switch (difficulty) {
        case 'easy':
        targetCount = 1;
        totalTime = 10;
        startGame();
        break;

        case 'normal':
        targetCount = 5;
        totalTime = 7;
        startGame();
        break;

        case 'hard':
        targetCount = 7;
        totalTime = 5;
        startGame();
        break;

        default: 
        alert("Pas de difficulté selectionnée");
    }
}

function startGame() {
    gameActive = true;
    score = 0;
    updateScore();
    gameContainer.classList.remove('hide');

    easyModeButton.style.display = 'none';
    normalModeButton.style.display = 'none';
    hardModeButton.style.display = 'none';


    for (let i = 0; i < targetCount; i++) {
      createTarget();
    }

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
    target.style.backgroundImage = targetType.imgUrl;
    randomizePosition(target);
    gameContainer.appendChild(target);

    let targetTimer;

    // If the target is not clicked after 5 seconds, it disappears
    targetTimer = setTimeout(() => {
        if (gameActive) {
        target.remove();
        createTarget();
        }
    }, targetLifecycle);


    
    target.addEventListener('click', () => {
            if (!gameActive) return;
        
            target.remove();
            score = Math.max(0, score + targetType.points);

            clearTimeout(targetTimer); // Cancel the lifecycle timer when clicked
            setTimeout(() => {
                randomizePosition(target);
                target.style.display = 'block';
                resetTargetLifecycle(target); // Reset the lifecycle
              }, 500); // Reappear after 0.5s

            updateScore();
            createTarget();
    });
        // Move the target at regular intervals with smooth animation
    setInterval(() => {
        randomizeMovement(target); // Move the target within a 50px radius
    }, 1000);
}

function resetTargetLifecycle(target) {
    clearTimeout(targetTimer); // Clear previous timer
    targetTimer = setTimeout(() => {
        if (gameActive) {
            target.style.display = 'none';
        }
    }, targetLifecycle);
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
    countdownDisplay.textContent = "Time's up!";
    gameContainer.classList.add('hide');
    easyModeButton.style.display = 'block';
    normalModeButton.style.display = 'block';
    hardModeButton.style.display = 'block';
}

function updateScore() {
    scoreDisplay.textContent = `Score: ${score}`;
}

function updateProgressBar(timeLeft) {
    const progress = (timeLeft / totalTime) * 100;
    progressBar.style.width = `${progress}%`;
}

function randomizeMovement(target) {
    // Get the current position of the target
    const currentX = parseFloat(target.style.left) || 0;
    const currentY = parseFloat(target.style.top) || 0;

    // Calculate the new position within a 50px radius of the current position
    const deltaX = (Math.random() - 0.5) * 2 * 50;
    const deltaY = (Math.random() - 0.5) * 2 * 50;

    const newX = Math.min(Math.max(currentX + deltaX, 0), window.innerWidth - 50); // Prevent overflow
    const newY = Math.min(Math.max(currentY + deltaY, 0), window.innerHeight - 50); // Prevent overflow

    target.style.left = `${newX}px`;
    target.style.top = `${newY}px`;
}
