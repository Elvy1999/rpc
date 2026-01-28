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
const goal = document.querySelector(".goal");

let humanChoice = "";
let computerChoice = "";
let gameOver = false;

gameButtons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    if (gameOver) return;
    getHumanChoice(e);
    getComputerChoice();
    playRound(humanChoice, computerChoice);
    scoreChecker();
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
    result.innerHTML = "It's a tie!";
  } else if (humanChoice === "rock" && computerChoice === "scissors") {
    result.innerHTML = "You win! Rock beats scissors.";
    humanScore.innerHTML = Number(humanScore.innerHTML) + 1;
  } else if (humanChoice === "rock" && computerChoice === "paper") {
    computerScore.innerHTML = Number(computerScore.innerHTML) + 1;
    result.innerHTML = "You lose! Paper beats rock.";
  } else if (humanChoice === "paper" && computerChoice === "rock") {
    humanScore.innerHTML = Number(humanScore.innerHTML) + 1;
    result.innerHTML = "You win! Paper beats rock.";
  } else if (humanChoice === "paper" && computerChoice === "scissors") {
    computerScore.innerHTML = Number(computerScore.innerHTML) + 1;
    result.innerHTML = "You lose! Scissors beats paper.";
  } else if (humanChoice === "scissors" && computerChoice === "paper") {
    humanScore.innerHTML = Number(humanScore.innerHTML) + 1;
    result.innerHTML = "You win! Scissors beats paper.";
  } else if (humanChoice === "scissors" && computerChoice === "rock") {
    computerScore.innerHTML = Number(computerScore.innerHTML) + 1;
    result.innerHTML = "You lose! Rock beats scissors.";
  }
}

function scoreChecker() {
  if (Number(humanScore.innerHTML) === 5) {
    goal.innerHTML = "Humans take the win!";
    gameOver = true;
  } else if (Number(computerScore.innerHTML) === 5) {
    goal.innerHTML = "AI takes the win!";
    gameOver = true;
  }
}
