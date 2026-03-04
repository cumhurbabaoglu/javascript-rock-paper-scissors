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

  const gameButtons = document.querySelectorAll(".buttons button");
  const result = document.querySelector("#result");
  const displayHumanScore = document.querySelector("#human-score");
  const displayComputerScore = document.querySelector("#computer-score")
  const resetButton = document.querySelector(".reset button");
  const allButtons = document.querySelectorAll("button");
  const roundInfo = document.querySelector("#round-info");
  
  function playRound(humanChoice) {
    let computerChoice = getComputerChoice();
    if (humanChoice === computerChoice) {
        result.textContent = "It's a tie!";
        displayHumanScore.textContent = `Your score = ${humanScore}`;
        displayComputerScore.textContent = `Computer's score = ${computerScore}`;
    } else if ((humanChoice === "rock" && computerChoice === "scissors") || (humanChoice === "paper" && computerChoice === "rock") || (humanChoice === "scissors" && computerChoice === "paper")) {
        result.textContent = `You win! ${humanChoice.toUpperCase()} beats ${computerChoice.toUpperCase()}!`;
        humanScore += 10;
        displayHumanScore.textContent = `Your Score = ${humanScore}`;
        displayComputerScore.textContent = `Computer's Score = ${computerScore}`;
    } else {
        result.textContent = `You lose! ${computerChoice.toUpperCase()} beats ${humanChoice.toUpperCase()}!`;
        computerScore += 10;
        displayHumanScore.textContent = `Your Score = ${humanScore}`;
        displayComputerScore.textContent = `Computer's Score = ${computerScore}`;
    }

    if (humanScore === 50) {
      result.textContent = `Congratulations! You beat the computer by ${humanScore} to ${computerScore}!`;
      gameButtons.forEach(button => {
        button.disabled = true;
      })
    } else if (computerScore === 50) {
      result.textContent = `Better luck next time! You were beaten by the computer by ${computerScore} to ${humanScore}!`;
      gameButtons.forEach(button => {
        button.disabled = true;
      })
    }
}

let counter = 0;


gameButtons.forEach(button => {
  button.addEventListener("click", function() {
    playRound(button.id);
    counter++;
    roundInfo.textContent = `ROUND: ${counter}`;
  })
})

resetButton.addEventListener("click", function() {
      gameButtons.forEach(button => {
        button.disabled = false;
      })
      humanScore = 0;
      computerScore = 0;
      counter = 0;
      result.textContent = "";
      displayHumanScore.textContent = "";
      displayComputerScore.textContent = "";
      roundInfo.textContent = "";
})


allButtons.forEach(button => {
    button.addEventListener("pointerdown", () => {
        button.classList.add("pressed");
    })
    button.addEventListener("pointerup", () => {
        setTimeout(() => {
            button.classList.remove("pressed")
        }, 110);
    })
    button.addEventListener("pointerleave", () => {
        setTimeout(() => {
            button.classList.remove("pressed")
        }, 110);
    })
})

