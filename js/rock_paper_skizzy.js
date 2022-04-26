//array
var arr = ['rock', 'paper', 'skizzy'];
//VARIABLES
const playerSelection = prompt('Rock, Paper, or Skizzy?')
const computerSelection = computerPlay();
const win = `You win! ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)} beats ${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)}`
const lose = `You lose! ${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)} beats ${playerSelection.charAt(0).toUpperCase() +playerSelection.slice(1)}`

//get comps choice from array arr at random
function computerPlay() {
  return arr[Math.floor(Math.random() * arr.length)];
}

function round(playerSelection, computerSelection) {
  if (playerSelection == 'rock' && computerSelection == 'skizzy'){
    alert(win);
  }
  else if (playerSelection == 'paper' && computerSelection == 'rock') {
    alert(win);
  }
  else if (playerSelection == 'skizzy' && computerSelection == 'paper') {
    alert(win);
  }
  else if (playerSelection == computerSelection) {
    alert('Tie');
  }
  else {
    alert(lose)
  }
}

console.log(computerSelection);
computerPlay();
round(playerSelection, computerSelection);
