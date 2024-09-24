let playerScore = 0;
let computerScore = 0;


const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");

const playerChoiceSpan = document.querySelector('.playerChoice');
const playerScoreSpan = document.querySelector('.playerScore');

const computerScoreSpan = document.querySelector('.computerScore');
const  computerChoiceSpan = document.querySelector('.computerChoice');

const winnerPrompt = document.querySelector('.winnerPrompt');


rockButton.addEventListener('click', () => {
  let playerChoice = "Rock!";
  playRound(playerChoice);
});

paperButton.addEventListener('click', () => {
  let playerChoice = "Paper!";
  playRound(playerChoice);
});

scissorsButton.addEventListener('click', () => {
  let playerChoice = "Scissors!";
  playRound(playerChoice);
});



function updatePlayerChoice(playerChoice) {
  playerChoiceSpan.textContent = playerChoice;
}

function updateComputerChoice(computerChoice) {
  computerChoiceSpan.textContent = computerChoice;
}

function updateScore(winner) {
  if(winner === "Player") {
    playerScore++;
    playerScoreSpan.textContent = playerScore;
  } else if (winner === "Computer") {
    computerScore++;
    computerScoreSpan.textContent = computerScore;
  }
}

function getComputerChoice() {
  if (Math.floor(Math.random() * 3) === 0) {
    return "Rock!";
  } else if (Math.floor(Math.random() * 3) === 1) {
    return "Paper!";
  } else {
    return "Scissors!";
  }
}

function compareChoices(playerChoice, computerChoice) {
  // Win Conditions
  if (
    (playerChoice === "Rock!" && computerChoice === "Scissors!") ||
    (playerChoice === "Paper!" && computerChoice === "Rock!") ||
    (playerChoice === "Scissors!" && computerChoice === "Paper!")
  ) {
    return "Player";
  } else if (playerChoice === computerChoice) {
    return "Tie";
  } else {
    return "Computer";
  }
}

function playRound(playerChoice) {
  updatePlayerChoice(playerChoice);
  let computerChoice = getComputerChoice();
  updateComputerChoice(computerChoice);
  let winner = compareChoices(playerChoice, computerChoice);
  updateScore(winner);
  switch (winner) {
    case "Player":
      winnerPrompt.textContent = "Player Wins!";
      break;
    case "Computer":
      winnerPrompt.textContent = "Computer Wins!";
      break;
    case "Tie":
      winnerPrompt.textContent = "Stalemate!";
      break;
  }
}