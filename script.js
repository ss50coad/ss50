const player = document.getElementById('player');
const food = document.getElementById('food');
const gameArea = document.getElementById('gameArea');

let playerPosition = { x: 0, y: 0 };
let foodPosition = { x: 0, y: 0 };

// Function to move the player
function movePlayer(dx, dy) {
    playerPosition.x += dx;
    playerPosition.y += dy;

    // Keep player within bounds
    playerPosition.x = Math.max(0, Math.min(gameArea.clientWidth - player.clientWidth, playerPosition.x));
    playerPosition.y = Math.max(0, Math.min(gameArea.clientHeight - player.clientHeight, playerPosition.y));

    player.style.left = playerPosition.x + 'px';
    player.style.top = playerPosition.y + 'px';

    checkCollision();
}

// Function to check collision with food
function checkCollision() {
    if (
        playerPosition.x < foodPosition.x + food.clientWidth &&
        playerPosition.x + player.clientWidth > foodPosition.x &&
        playerPosition.y < foodPosition.y + food.clientHeight &&
        playerPosition.y + player.clientHeight > foodPosition.y
    ) {
        // Move food to a new random position
        foodPosition.x = Math.random() * (gameArea.clientWidth - food.clientWidth);
        foodPosition.y = Math.random() * (gameArea.clientHeight - food.clientHeight);
        food.style.left = foodPosition.x + 'px';
        food.style.top = foodPosition.y + 'px';
    }
}

// Function to generate food at a random position
function generateFood() {
    foodPosition.x = Math.random() * (gameArea.clientWidth - food.clientWidth);
    foodPosition.y = Math.random() * (gameArea.clientHeight - food.clientHeight);
    food.style.left = foodPosition.x + 'px';
    food.style.top = foodPosition.y + 'px';
}

// Event listeners for button clicks
document.getElementById('up').addEventListener('click', () => movePlayer(0, -10));
document.getElementById('down').addEventListener('click', () => movePlayer(0, 10));
document.getElementById('left').addEventListener('click', () => movePlayer(-10, 0));
document.getElementById('right').addEventListener('click', () => movePlayer(10, 0));

// Initialize the game