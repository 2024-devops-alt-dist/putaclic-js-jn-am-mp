const gameContainer = document.getElementById('gameContainer');
const startButton = document.getElementById('startButton');
const countdownDisplay = document.getElementById('countdown');
const scoreDisplay = document.getElementById('score');
let countdown;
let timeLeft = 20;
countdownDisplay.textContent = `Time Left: ${timeLeft}s`;
const targetCount = 5;
let gameActive = false;
let score = 0;

function createTarget() {
    const target = document.createElement('div');
    target.classList.add('target');
    randomizePosition(target);
    gameContainer.appendChild(target);

    target.addEventListener('click', () => {
            if (!gameActive) return;
            target.style.display = 'none';
            score++;
            updateScore();
            setTimeout(() => {
                randomizePosition(target);
                target.style.display = 'block';
            }, 500);
    });
}

function randomizePosition(target) {
    const x = Math.random() * (window.innerWidth - 50); 
    const y = Math.random() * (window.innerHeight - 50);
    target.style.left = `${x}px`;
    target.style.top = `${y}px`;
}

function startGame() {
    gameActive = true;
    score = 0;
    updateScore();
    gameContainer.classList.remove('hide');
    startButton.style.display = 'none';

    for (let i = 0; i < targetCount; i++) {
        createTarget();
    }

    let timeLeft = 30; // Start countdown from 30 seconds
    countdownDisplay.textContent = `Time Left: ${timeLeft}s`;

    countdown = setInterval(() => {
        timeLeft--;
        countdownDisplay.textContent = `Time Left: ${timeLeft}s`;

        if (timeLeft <= 0) {
            stopGame();
        }
    }, 1000); // Update countdown every second
}

function stopGame() {
    gameActive = false;
    clearInterval(countdown);
    countdownDisplay.textContent = "Time's up!";
    gameContainer.classList.add('hide');
    startButton.style.display = 'block';
}

function updateScore() {
    scoreDisplay.textContent = `Score: ${score}`;
}

// Event listener to start the game
startButton.addEventListener('click', startGame);

