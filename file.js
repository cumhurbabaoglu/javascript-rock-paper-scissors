function getComputerChoice() {
  let randomValue = Math.ceil(Math.random() * 30);    // multiply by 30 to provide equal chance for the three options
  if (randomValue <= 30 && randomValue > 20) {
    return "rock";
  } else if (randomValue <= 20 && randomValue > 10) {
    return "paper";
  } else {
    return "scissors";
  }
}

  let humanScore = 0;
  let computerScore = 0;

  const buttons = document.querySelectorAll("button");
  const result = document.querySelector("#result");
  const displayHumanScore = document.querySelector("#human-score");
  const displayComputerScore = document.querySelector("#computer-score")
  
  function playRound(humanChoice) {
    let computerChoice = getComputerChoice();
    if (humanChoice === computerChoice) {
        console.log("It's a tie!");
        console.log(`Your score = ${humanScore}`);
        console.log(`Computer's score = ${computerScore}`);
    } else if ((humanChoice === "rock" && computerChoice === "scissors") || (humanChoice === "paper" && computerChoice === "rock") || (humanChoice === "scissors" && computerChoice === "paper")) {
        console.log(`You win! ${humanChoice} beats ${computerChoice}!`);
        humanScore += 10;
    } else {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}!`);
        computerScore += 10;
    }
}


buttons.forEach(button => {
  button.addEventListener("click", function(event) {
    playRound(button.id);
  })
})