console.log('début du programme')
//Nombre d'objets à apparaître.
let nbTargets = 10;
//Temps de jeu imparti.
let countDown = 300;
//Temps d’apparition des objets.
let timeWindow = 3;
//Points
let points = 0;


const gameContainer = document.getElementById('gameContainer');
const targetCount = 2;

function createTarget() {
  const target = document.createElement('div');
  target.classList.add('target');
  randomizePosition(target);
  gameContainer.appendChild(target);

  target.addEventListener('click', () => {
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

for (let i = 0; i < targetCount; i++) {
  createTarget();
}




