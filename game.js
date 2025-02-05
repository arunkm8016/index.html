const boardSize = 10;
const snakes = {16: 6, 47: 26, 49: 11, 56: 53, 62: 19, 64: 60, 87: 24, 93: 73, 95: 75, 98: 78};
const ladders = {1: 38, 4: 14, 9: 31, 21: 42, 28: 84, 36: 44, 51: 67, 71: 91, 80: 100};

let playerPosition = 1;

function createBoard() {
    const board = document.getElementById('game-board');
    let boardContent = '';
    for (let i = 100; i &gt; 0; i--) {
        boardContent += `<div id="cell-${i}" class="${snakes[i] ? 'snake' : ladders[i] ? 'ladder' : ''}">${i}</div>`;
    }
    board.innerHTML = boardContent;
}

function rollDice() {
    const diceRoll = Math.floor(Math.random() * 6) + 1;
    movePlayer(diceRoll);
}

function movePlayer(diceRoll) {
    playerPosition += diceRoll;
    if (playerPosition &gt; 100) playerPosition = 100;
    if (snakes[playerPosition]) playerPosition = snakes[playerPosition];
    if (ladders[playerPosition]) playerPosition = ladders[playerPosition];
    updateBoard();
    if (playerPosition === 100) {
        document.getElementById('message').innerText = 'You have won!';
    }
}

function updateBoard() {
    document.querySelectorAll('#game-board div').forEach(cell =&gt; cell.classList.remove('player'));
    document.getElementById(`cell-${playerPosition}`).classList.add('player');
    document.getElementById('message').innerText = `You are at position ${playerPosition}.`;
}

createBoard();
updateBoard();