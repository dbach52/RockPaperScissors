function rockPaperScissors() {

  let randomNumber = Math.floor(Math.random() * (3 - 1 + 1)) + 1;

  function humanPlay() {
    return document.getElementById("yourInput").value;
  }

  function computerPlay() {
    return (randomNumber == 1) ? "Rock"
    : (randomNumber == 2) ? "Paper"
    : "Scissors";
  };

  function gameResult() {
    if (humanPlay() == computerPlay()) {
      return "Tie!"
    } else if (humanPlay() == "Rock" && computerPlay() == "Scissors") {
      return "You win!"
    } else if (humanPlay() == "Paper" && computerPlay() == "Rock") {
      return "You win!"
    } else if (humanPlay() == "Scissors" && computerPlay() == "Paper") {
      return "You win!"
    } else {
      return "You lose!"
    }
    // if (humanPlay() == "Rock" && computerPlay() == "Scissors")
  };

  document.getElementById("computerChoice").textContent = "The computer chose: " + computerPlay();

  document.getElementById("yourChoice").textContent = "You chose: " + humanPlay();

  document.getElementById("result").textContent = gameResult();

}
