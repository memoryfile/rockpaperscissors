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
    computerPlay();
    alert("The computer played: " + computerSelection);
    playRound();
    gameOver();
  });

    // Deciding computer's response

    function computerPlay() {
        let computerNumber = Math.floor(Math.random(3));
        let computerSelection = '';

        switch (computerNumber) {
            case 1: computerSelection = 'rock';
                break;
            case 2: computerSelection = 'paper';
                break;
            case 3: computerSelection = 'scissors';
                break;
        }

        return computerSelection;
    }

// When it's a tie

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        winner = 'nobody';
        alert("The winner is" + winner);
        console.log("The winner is" + winner);
    }

    // When the computer wins through matchups

    if ((playerSelection === 'rock' && computerSelection === 'paper') || (playerSelection === 'scissors' && computerSelection === 'rock') || (playerSelection === 'paper' && computerSelection === 'scissors')) {
        computerScore++
        winner = 'computer';
        alert("The winner is" + winner);
        console.log("The winner is" + winner);
        computerScore++
    }

    // When the player wins through matchups

    if ((playerSelection === 'rock' && computerSelection === 'scissors') || (playerSelection === 'paper' && computerSelection === 'rock') || (playerSelection === 'scissors' && computerSelection === 'paper')) {
        playerScore++
        winner = 'player';
        alert("The winner is" + winner);
        console.log("The winner is" + winner);
        playerScore++
    }

    // Determine when someone reaches a score of 5.
    // How can I get it to check the score after every round?

    function gameOver() {
        if (playerScore === 5) {
            return alert("Game over! You won!!");
        } else if (computerScore === 5) {
            return alert("Game over! You lost...");
        } else {
            alert("Continue to the next match!");
        }
    }
}
});  
