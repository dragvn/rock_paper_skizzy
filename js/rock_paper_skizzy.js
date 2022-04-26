//array
var arr = ['rock', 'paper', 'skizzy'];
//VARIABLES
const playerSelection = prompt('Rock, Paper, or Skizzy?')
const computerSelection = computerPlay();

//get comps choice from array arr at random
function computerPlay() {
  return arr[Math.floor(Math.random() * arr.length)];
}

function round(playerSelection, computerSelection) {
  let userScore = 0;
  let compScore = 0;
  const win = `You win! ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)} beats ${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)}`
  const lose = `You lose! ${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)} beats ${playerSelection.charAt(0).toUpperCase() +playerSelection.slice(1)}`

  if (playerSelection == 'rock' && computerSelection == 'skizzy'){
    alert(win);
    userScore++;
  }
  else if (playerSelection == 'paper' && computerSelection == 'rock') {
    alert(win);
    userScore++;
  }
  else if (playerSelection == 'skizzy' && computerSelection == 'paper') {
    alert(win);
    userScore++;
  }
  else if (playerSelection == computerSelection) {
    alert('Tie');
  }
  else {
    alert(lose);
    compScore++;
  }
  alert(`Score: User ${userScore} Computer ${compScore}`)
}

function game() {
  for (let i = 0; i < 5; i++){
    const playerSelection = prompt('Rock, Paper, or Skizzy?')
    const computerSelection = computerPlay();
    round(playerSelection, computerSelection);



  }
}

console.log(computerSelection);
computerPlay();
/*round(playerSelection, computerSelection);*/
game();
