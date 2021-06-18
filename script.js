function rockPaperScissors() {

  let randomNumber = Math.floor(Math.random() * (3 - 1 + 1)) + 1;

  function humanPlay() {
    return document.getElementById("yourInput").value;
  };

  function computerPlay() {
    return (randomNumber == 1) ? "Rock"
    : (randomNumber == 2) ? "Paper"
    : "Scissors";
  };
  
  function gameResult() {
    let x = humanPlay().toLowerCase();
    let y = computerPlay().toLowerCase();
    if (x == y) {
      return "Tie!"
    } else if (x == "rock" && y == "scissors") {
      return "You win!"
    } else if (x == "paper" && y == "rock") {
      return "You win!"
    } else if (x == "scissors" && y == "paper") {
      return "You win!"
    } else {
      return "You lose!"
    }
  };
  
  document.getElementById("computerChoice").textContent = "The computer chose: " + computerPlay();

  document.getElementById("yourChoice").textContent = "You entered: " + humanPlay();

  document.getElementById("result").textContent = gameResult();

  document.getElementById("result").setAttribute("style", "font-size:72px; text-align:center");
}