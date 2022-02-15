

// const player1 = document.querySelector('.game-body')

// player1.addEventListener('click', function(e){
//     e.target.style.backgroundColor = 'blue';
// })

const player1 = "X";
const X = document.querySelector('.game-body')
X.addEventListener('click', function(e){
    e.target.innerText = 'X';
})


const playerAi = "O";

const winCombos = [
[0, 1, 2, 3],
[4, 5, 6, 7],
[8, 9, 10, 11],
[12, 13, 14, 15],
[12, 9, 6, 3],
[0, 5, 10, 15],
[3, 6, 9, 12]
]

const boxElement = document.querySelectorAll('.box');
console.log(boxElement)

const gameBodyElement = document.getElementsByClassName('[.gameBody]');
console.log(gameBodyElement)

const winningMessageElement = document.getElementById('winningMessageText')
console.log (winningMessageElement)

const restartButton = document.getElementsByClassName('.gameRestart')
console.log (restartButton)

let isPlayerOTurn = false


// const boxes = document.querySelectorAll('.box');

// startGame();
// function startGame() {
//     // document.querySelector('.gameRestart').style.display = "none"
// }










