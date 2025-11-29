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
