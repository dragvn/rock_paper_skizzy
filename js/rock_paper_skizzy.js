const playerSelection = prompt('Rock, Paper, or Skizzy?')
let computerSelection;

var arr = ['rock', 'paper', 'skizzy'];

function computerPlay() {
  computerSelection = arr[Math.floor(Math.random() * arr.length)];
}

computerPlay();
console.log(computerSelection);
