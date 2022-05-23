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

// Function to check if game is over

function gameOver() {
    return playerScore === 5 || computerScore === 5
  }

// Event listeners for buttons

buttons.forEach((button) => {
    button.addEventListener("click", function () { // What the user picks
        const playerSelection = this.textContent;
        alert("You picked " + playerSelection);

        const computerOptions = ["Rock", "Scissors", "Paper"];
        const computerSelection = computerOptions[Math.floor(Math.random() * 3)];
        console.log(computerSelection);
        alert("The computer played: " + computerSelection);
        playRound(playerSelection, computerSelection);
        updateScore();
    });

    // When it's a tie

    function playRound(playerSelection, computerSelection) {
        if (playerSelection === computerSelection) {
            winner = 'nobody';
            alert("Standstill... nobody wins.");
            console.log(winner);
        }

        // When the computer wins through matchups

        if ((playerSelection === "Rock" && computerSelection === "Paper") || (playerSelection === "Scissors" && computerSelection === "Rock") || (playerSelection === "Paper" && computerSelection === "Scissors")) {
            winner = 'computer';
            alert(computerSelection + "?!?! You've been outplayed!");
            computerScore++
        }

        // When the player wins through matchups

        if ((playerSelection === "Rock" && computerSelection === "Scissors") || (playerSelection === "Paper" && computerSelection === "Rock") || (playerSelection === "Scissors" && computerSelection === "Paper")) {
            winner = 'player';
            alert(playerSelection + "?!?! You're the WINNER!!");
            playerScore++
        }
    }
});
