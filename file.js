function getComputerChoice() {
  let randomValue = Math.ceil(Math.random() * 30);
  if (randomValue <= 30 && randomValue > 20) {
    return "rock";
  } else if (randomValue <= 20 && randomValue > 10) {
    return "paper";
  } else {
    return "scissors";
  }
}

function getHumanChoice() {
  let humanChoice = prompt("Enter your choice:");
  return humanChoice;
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
  let humanChoiceNormalized = humanChoice.toLowerCase();
  if (humanChoiceNormalized === computerChoice){
    console.log("It's a tie!");
  } else if (humanChoiceNormalized === "rock" && computerChoice === "scissors") {
    console.log("You win! Rock beats Scissors!");
    humanScore += 10;
  } else if (humanChoiceNormalized === "scissors" && computerChoice === "rock") {
    console.log("You lose! Rock beats Scissors!");
    computerScore += 10;
  } else if (humanChoiceNormalized === "paper" && computerChoice === "rock") {
    console.log("You win! Paper beats Rock!");
    humanScore += 10;
  } else if (humanChoiceNormalized === "rock" && computerChoice === "paper") {
    console.log("You lose! Paper beats Rock!");
    computerScore += 10;
  } else if (humanChoiceNormalized === "paper" && computerChoice === "scissors") {
    console.log("You lose! Scissors beats Paper!");
    computerScore += 10;
  } else if (humanChoiceNormalized === "scissors" && computerChoice === "paper"){
    console.log("You win! Scissors beats Paper");
    humanScore += 10;
  }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
