//global variables
let userScore = 0;
let compScore = 0;

function round() {
  //array
  var arr = ['rock', 'paper', 'skizzy'];

  //local variables
  const computerSelection = computerPlay();
  const playerSelection = userPlay();
  const win = `You win! ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)} beats ${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)}`
  const lose = `You lose! ${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)} beats ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)}`

  //get comps choice from array arr at random
  function computerPlay() {
    return arr[Math.floor(Math.random() * arr.length)];
  }
  //get user choice from prompt
  function userPlay() {
    return prompt('Rock, Paper, or Skizzy?')
  }

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
    round();
  }
}
//execute game function (runs round function 5 times)
game();
