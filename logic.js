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

function checkWin(board, player) {
  for (let i = 0; i < 3; i++) {
    if (board[i][0] === player && board[i][1] === player && board[i][2] === player) {
      showWinner(activePlayer);
    } 
    else if (board[0][i] === player && board[1][i] === player && board[2][i] === player) {
      showWinner(activePlayer);
    }
    else if (board[0][0] === player && board[1][1] === player && board[2][2] === player) {
      showWinner(activePlayer);
    }
    else if (board[0][2] === player && board[1][1] === player && board[2][0] === player) {
      showWinner(activePlayer);
    }
  }
}

function click(row, col) {
  activePlayer = (counterClicks % 2 === 0) ? 0 : 1;
  counterClicks++;
  board[row][col] = players[activePlayer];
  renderBoard(board);
  checkWin(board, players[activePlayer]);
}