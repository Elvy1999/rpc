function playGame() {
  for (let i = 0; i < 5; i++) {
    const humanChoice = getHumanChoice();
    if (humanChoice === null) {
      console.log("Game cancelled.");
      return;
    }
    const computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
  }
  console.log("The human score is: " + humanScore);
  console.log("The computer score is: " + computerScore);
}

// playGame();

const humanScore = document.getElementById("humanScore");
const computerScore = document.getElementById("computerScore");
const result = document.getElementById("result");
const gameButtons = document.querySelectorAll(".buttons button");

let humanChoice = "";
let computerChoice = "";

gameButtons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    getHumanChoice(e);
    getComputerChoice();
    playRound(humanChoice, computerChoice);
  });
});

function getHumanChoice(e) {
  // updates the player selection for the game
  humanChoice = e.target.textContent;
  humanChoice = humanChoice.toLowerCase();
  console.log(humanChoice);
}

function getComputerChoice() {
  // updates the computer selection for the game
  const randomNum = Math.floor(Math.random() * 3);
  if (randomNum === 0) computerChoice = "rock";
  else if (randomNum === 1) computerChoice = "paper";
  else if (randomNum === 2) computerChoice = "scissors";
  console.log(computerChoice);
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    console.log("It's a tie!");
  } else if (humanChoice === "rock" && computerChoice === "scissors") {
    console.log("You win! Rock beats scissors.");
  } else if (humanChoice === "rock" && computerChoice === "paper") {
    console.log("You lose! Paper beats rock.");
  } else if (humanChoice === "paper" && computerChoice === "rock") {
    console.log("You win! Paper beats rock.");
  } else if (humanChoice === "paper" && computerChoice === "scissors") {
    console.log("You lose! Scissors beats paper.");
  } else if (humanChoice === "scissors" && computerChoice === "paper") {
    console.log("You win! Scissors beats paper.");
  } else if (humanChoice === "scissors" && computerChoice === "rock") {
    console.log("You lose! Rock beats scissors.");
  }
}
