document.addEventListener('DOMContentLoaded', () => {
  const board = document.getElementById('board');
  for (let i = 0; i < 9; i++) {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    cell.dataset.index = i;
    cell.addEventListener('click', () => handleMove(i));
    board.appendChild(cell);
  }

  document.getElementById('startGame').addEventListener('click', startGame);
});

function startGame() {
  console.log("Starting new game...");
}

function handleMove(index) {
  console.log("Cell clicked:", index);
}
