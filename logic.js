let players = ['x', 'o'];
let activePlayer = 0;

let board;
let counterClicks = 0;

function startGame() {
  board = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ];
  renderBoard(board);
  counterClicks = 0;
}

function checkWin(board, player, row, col) {
  if (board[row][0] === player && board[row][1] === player && board[row][2] === player) {
    showWinner(activePlayer);
  } 
  else if (board[0][col] === player && board[1][col] === player && board[2][col] === player) {
    showWinner(activePlayer);
  }
  else if (board[0][0] === player && board[1][1] === player && board[2][2] === player) {
    showWinner(activePlayer);
  }
  else if (board[0][2] === player && board[1][1] === player && board[2][0] === player) {
    showWinner(activePlayer);
  }
}

function click(row, col) {
  activePlayer = (counterClicks % 2 === 0) ? 0 : 1;
  counterClicks++;
  board[row][col] = players[activePlayer];
  renderBoard(board);
  checkWin(board, players[activePlayer], row, col);
}