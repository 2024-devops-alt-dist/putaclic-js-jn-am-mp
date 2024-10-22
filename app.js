const gameContainer = document.getElementById('gameContainer');
const startButton = document.getElementById('startButton');
const countdownDisplay = document.getElementById('countdown');
let countdown;
let timeLeft = 20;
countdownDisplay.textContent = `Time Left: ${timeLeft}s`;
const targetCount = 5;
let gameActive = false;

function createTarget() {
    const target = document.createElement('div');
    target.classList.add('target');
    randomizePosition(target);
    gameContainer.appendChild(target);

    target.addEventListener('click', () => {
        if (!gameActive) return; // Prevent clicking when game is inactive
        target.style.display = 'none';
        setTimeout(() => {
        randomizePosition(target);
        target.style.display = 'block';
        }, 500); // Reappear after 0.5s
    });
}

function randomizePosition(target) {
    const x = Math.random() * (window.innerWidth - 50); // Adjust for target size
    const y = Math.random() * (window.innerHeight - 50);
    target.style.left = `${x}px`;
    target.style.top = `${y}px`;
}

function startGame() {
    gameActive = true;
    gameContainer.classList.remove('hide'); // Show the game container
    startButton.style.display = 'none'; // Hide start button

    for (let i = 0; i < targetCount; i++) {
        createTarget();
    }

    // let timeLeft = 30; // Start countdown from 30 seconds
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
    gameContainer.classList.add('hide'); // Hide game container
    startButton.style.display = 'block'; // Show start button again
}

// Event listener to start the game
startButton.addEventListener('click', startGame);




