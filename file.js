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

function getHumanChoice() {
  let answer = prompt("Rock, paper or scissors?:");
  return answer;
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;
  function playRound(humanChoice, computerChoice) {
  let humanChoiceNormalized = humanChoice.toLowerCase();
  if (humanChoiceNormalized === computerChoice){
    console.log("It's a tie!");
    console.log(`Your score = ${humanScore}`);
    console.log(`Computer's score = ${computerScore}`);
  } else if (humanChoiceNormalized === "rock" && computerChoice === "scissors") {
    console.log("You win! Rock beats Scissors!");
    humanScore += 10;
    console.log(`Your score = ${humanScore}`);
    console.log(`Computer's score = ${computerScore}`);                                                            
  } else if (humanChoiceNormalized === "scissors" && computerChoice === "rock") {
    console.log("You lose! Rock beats Scissors!");
    computerScore += 10;
    console.log(`Your score = ${humanScore}`);
    console.log(`Computer's score = ${computerScore}`);
  } else if (humanChoiceNormalized === "paper" && computerChoice === "rock") {
    console.log("You win! Paper beats Rock!");
    humanScore += 10;
    console.log(`Your score = ${humanScore}`);
    console.log(`Computer's score = ${computerScore}`);
  } else if (humanChoiceNormalized === "rock" && computerChoice === "paper") {
    console.log("You lose! Paper beats Rock!");
    computerScore += 10;
    console.log(`Your score = ${humanScore}`);
    console.log(`Computer's score = ${computerScore}`);
  } else if (humanChoiceNormalized === "paper" && computerChoice === "scissors") {
    console.log("You lose! Scissors beats Paper!");
    computerScore += 10;
    console.log(`Your score = ${humanScore}`);
    console.log(`Computer's score = ${computerScore}`);
  } else if (humanChoiceNormalized === "scissors" && computerChoice === "paper"){
    console.log("You win! Scissors beats Paper");
    humanScore += 10;
    console.log(`Your score = ${humanScore}`);
    console.log(`Computer's score = ${computerScore}`);
  }
}

  for (let i = 1; i <= 5; i++) {
    console.log(`ROUND: ${i}`);
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    if (i === 5) {
      console.log("**** END OF GAME ****");
      if (humanScore > computerScore) {
        console.log(`You beat the computer ${humanScore} to ${computerScore}!`);
      } else if (humanScore < computerScore) {
        console.log(`You were beaten by the computer ${computerScore} to ${humanScore}!`);
      } else {
        console.log("It's a tie. No side beat the other.")
      }
    } else {
      console.log(`**** END OF ROUND ${i} ****`);
    }
  }
}

playGame();