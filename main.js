console.log("Hello World");

const displayRound = document.getElementById("round");
const displayPlayerScore = document.getElementById("playerScore");
const displayComputerScore = document.getElementById("computerScore");
const buttons = document.querySelectorAll("button");

// Score at 0 initially, going for five rounds

let playerScore = 0;
let computerScore = 0;
let round = 1;

// Let each round determine a winner

let winner = '';

// Update scores and round

const updateScore = () => {
    document.getElementById("playerScore").innerHTML = "Your score: " + playerScore;
    document.getElementById("computerScore").innerHTML = "Computer's score: " + computerScore;
    document.getElementById("round").innerHTML = "Round: " + round;
  };

// Correspond rounds and scores to buttons

// const displayRound = document.getElementById("round");
// displayRound.innerHTML = "Round: " + round;

// const displayPlayerScore = document.getElementById("playerScore");
// displayPlayerScore.innerHTML = "Your score: " + playerScore;

// const displayComputerScore = document.getElementById("computerScore");
// displayComputerScore.innerHTML = "Computer score: " + computerScore;

// const buttons = document.querySelectorAll("button");

// Event listeners for buttons 

buttons.forEach((button) => {
  button.addEventListener("click", function () {
    // What the user picks
    const playerSelection = this.textContent;
    alert("You picked " + playerSelection);

    const computerOptions = ["rock", "scissors", "paper"];
    const computerSelection = computerOptions[Math.random(Math.random() * 3)];
    console.log(computerSelection);
    alert("The computer played: " + computerSelection);
    playRound(playerSelection, computerSelection);
    updateScore();
  });

// When it's a tie

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        winner = 'nobody';
        alert("The winner is " + winner);
        console.log("The winner is " + winner);
    }

    // When the computer wins through matchups

    if ((playerSelection === 'rock' && computerSelection === 'paper') || (playerSelection === 'scissors' && computerSelection === 'rock') || (playerSelection === 'paper' && computerSelection === 'scissors')) {
        computerScore++
        winner = 'computer';
        alert("The winner is " + winner);
        console.log("The winner is " + winner);
        computerScore++
    }

    // When the player wins through matchups

    if ((playerSelection === 'rock' && computerSelection === 'scissors') || (playerSelection === 'paper' && computerSelection === 'rock') || (playerSelection === 'scissors' && computerSelection === 'paper')) {
        playerScore++
        winner = 'player';
        alert("The winner is " + winner);
        console.log("The winner is " + winner);
        playerScore++
    }
}
});  
