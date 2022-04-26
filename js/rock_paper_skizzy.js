const playerSelection = prompt('Rock, Paper, or Skizzy?')
let computerSelection;
let winner;

var arr = ['rock', 'paper', 'skizzy'];

function computerPlay() {
  computerSelection = arr[Math.floor(Math.random() * arr.length)];
}

function round(playerSelection, computerSelection) {
  if (playerSelection == 'rock' && computerSelection == 'skizzy'){
    alert('You win!');
  }
  else if (playerSelection < computerSelection) {
    alert('You lose!');
  }
  else if (playerSelection > computerSelection)
    alert('It\'s a tie!!!');
}

computerPlay();
round();
console.log(computerSelection);
