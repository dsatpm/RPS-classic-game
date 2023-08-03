let myScore = 0;
let compScore = 0;
let gameNumber = 0;

function playRockPaperScissors(myChoice) {
  const options = ['rock', 'paper', 'scissors'];
  const compChoice = options[Math.floor(Math.random() * 3)];

  let outcomePrompt;

  if (myChoice === compChoice) {
    outcomePrompt = 'Tie game!';
  } else if (
    (myChoice === 'rock' && compChoice === 'scissors') || 
    (myChoice === 'scissors' && compChoice === 'paper') || 
    (myChoice === 'paper' && compChoice === 'rock')
    ) {
    outcomePrompt = 'You win!';
    myScore++;
  } else {
    outcomePrompt = 'You lose!';
    compScore++;
  }

  gameNumber++;
  document.getElementById('gameNumber').innerText = gameNumber;
  document.getElementById('myScore').innerText = myScore;
  document.getElementById('compScore').innerText = compScore;

  const outcome = document.getElementById('outcome');
  outcome.innerText = `You selected ${myChoice}, and the AI chose ${compChoice}. ${outcomePrompt}`;
}
