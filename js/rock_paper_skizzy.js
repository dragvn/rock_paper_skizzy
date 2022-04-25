const playerSelection = prompt('Rock, Paper, or Skizzy?')
const computerSelection = computerPlay();

function computerPlay(max) {
  return Math.floor(Math.random() * max);
}








console.log(computerPlay(3));
