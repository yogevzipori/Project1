// Player
let player1turn = true;

// Marking on the board X and O
const gameBody = document.querySelector(".game-body");
gameBody.addEventListener("click", function (e) {
  if (
    player1turn === true &&
    e.target.innerText != "O" &&
    e.target.innerText != "X"
  ) {
    e.target.innerText = "X";
    player1turn = false;
  } else if (
    player1turn === false &&
    e.target.innerText != "O" &&
    e.target.innerText != "X"
  ) {
    e.target.innerText = "O";
    player1turn = true;
  }

  // Every click a function run to check winning combos
  checkWinningCondition();
});

// Winning possibilities

const winCombos = [
  [0, 1, 2, 3],
  [4, 5, 6, 7],
  [8, 9, 10, 11],
  [12, 13, 14, 15],
  [12, 9, 6, 3],
  [0, 5, 10, 15],
  [3, 6, 9, 12],
  [3, 7, 11, 15],
  [2, 6, 10, 14],
  [1, 5, 9, 13],
  [0, 4, 8, 12],
];

// function to check Winning Condition

function checkWinningCondition() {
  for (let i = 0; i < winCombos.length; i++) {
    console.log(winCombos[i]);
  }
}

// Resetting Game Board
document.querySelector(".gameReset").addEventListener("click", function () {
  location.reload();
});
