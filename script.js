let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const randomNum = Math.floor(Math.random() * 3);
  if (randomNum === 0) return "rock";
  if (randomNum === 1) return "paper";
  return "scissors";
}

function getHumanChoice() {
  const choice = prompt("Enter your selection (rock, paper, or scissors):");
  if (!choice) return null;
  return choice.trim().toLowerCase();
}

function playRound(humanChoice, computerChoice) {
  if (!["rock", "paper", "scissors"].includes(humanChoice)) {
    console.log("Invalid choice. Please enter rock, paper, or scissors.");
    return;
  }

  if (humanChoice === computerChoice) {
    console.log("It's a tie!");
    return;
  }

  if (humanChoice === "rock" && computerChoice === "scissors") {
    console.log("You win! Rock beats scissors.");
    humanScore++;
  } else if (humanChoice === "rock" && computerChoice === "paper") {
    console.log("You lose! Paper beats rock.");
    computerScore++;
  } else if (humanChoice === "paper" && computerChoice === "rock") {
    console.log("You win! Paper beats rock.");
    humanScore++;
  } else if (humanChoice === "paper" && computerChoice === "scissors") {
    console.log("You lose! Scissors beats paper.");
    computerScore++;
  } else if (humanChoice === "scissors" && computerChoice === "paper") {
    console.log("You win! Scissors beats paper.");
    humanScore++;
  } else if (humanChoice === "scissors" && computerChoice === "rock") {
    console.log("You lose! Rock beats scissors.");
    computerScore++;
  }
}

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
