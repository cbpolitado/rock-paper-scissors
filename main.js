// Initialize scores
let computerScore = 0,
  humanScore = 0;

// Define valid choices
const choices = ["rock", "paper", "scissors"];

// Generate a computer choice
function getComputerChoice() {
  return choices[Math.floor(Math.random() * choices.length)];
}

// Get the player choice
function getHumanChoice() {
  while (true) {
    // Ask for user-input
    let choice = prompt("Choose between rock, paper, and scissors:");

    // Break out of the loop if user cancels
    if (choice == null) {
      return null;
    }

    // Normalize input
    choice = choice.toLowerCase().trim();

    // Continue prompting if input is invalid
    if (!choices.includes(choice)) {
      alert(
        `"${choice}" is not a valid choice.\nPlease type either rock, paper, or scissors.`
      );
      continue;
    }

    return choice;
  }
}

// Play one round of rock paper scissors
function playRound(humanChoice, computerChoice) {
  // Define winner-loser pair
  const pairs = {
    rock: "scissors",
    paper: "rock",
    scissors: "paper",
  };

  // Check for a tie
  if (humanChoice === computerChoice) {
    console.log("It's a tie!");
    return;
  }

  /*
   * Using human choice as key, check if its value
   * is equivalent to computer choice. If it is, human
   * wins
   */
  if (pairs[humanChoice] === computerChoice) {
    humanScore += 1;
    console.log("Human wins!");
  } else {
    computerScore += 1;
    console.log("Computer wins!");
  }
  return;
}

function playGame() {
  // Declare number of rounds and assign 5 to it
  const ROUND_COUNT = 5;

  // TODO: Stop the game and declare winner if user cancels

  // Play a round ROUND_COUNT times
  for (let i = 0; i < ROUND_COUNT; i++) {
    playRound(getHumanChoice(), getComputerChoice());
  }

  // Declare the winner
  if (humanScore === computerScore) {
    console.log(`Game tied!\nHuman: ${humanScore}\nComputer: ${computerScore}`);
  } else if (humanScore > computerScore) {
    console.log(
      `Human wins game!\nHuman: ${humanScore}\nComputer: ${computerScore}`
    );
  } else {
    console.log(
      `Computer wins game!\nHuman: ${humanScore}\nComputer: ${computerScore}`
    );
  }
}

// Start game
playGame();
