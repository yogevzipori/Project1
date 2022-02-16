let player1turn = true


const player1 = document.querySelector('.game-body')
player1.addEventListener('click', function(e){
    if( player1turn === true){
        e.target.innerText = 'X';
    player1turn = false
    
    }
else{
    e.target.innerText = 'O';
player1turn = true
}

})






let board = ['', '', '', '', '', '', '', '', '', '', '', '', '', '', ''];

  

const winCombos = [
[0, 1, 2, 3],
[4, 5, 6, 7],
[8, 9, 10, 11],
[12, 13, 14, 15],
[12, 9, 6, 3],
[0, 5, 10, 15],
[3, 6, 9, 12]

]


const TIE = 'TIE';

const boxElement = document.getElementsByClassName('.box');

const BodyElement = document.getElementsByClassName('.gameBody');

const winningMessage = document.getElementById('winningMessageText')

const restartButton = document.getElementsByClassName('.gameRestart')
