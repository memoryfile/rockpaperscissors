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
    document.getElementById("computerScore").innerHTML = "Opponent's score: " + computerScore;
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
        alert("You choose " + playerSelection);

        // Array for the computer's choices

        const computerOptions = ["Rock", "Scissors", "Paper"];
        const computerSelection = computerOptions[Math.floor(Math.random() * 3)];
        console.log(computerSelection);
        alert("Your opponent played: " + computerSelection);

        // Configuration for playing a round. playerSelection and computerSelection are included with playRound to ensure they are calculated

        playRound(playerSelection, computerSelection);
        updateScore();
        if (gameOver()) {
            alert("The fifth round has passed, game over! You got " + playerScore + " points, while your opponent got " + computerScore + " points.")
            return let(playerScore === 0 && computerScore === 0)
        } else {
            return;
        }
    });

    // Determining a tie. playerSelection and computerSelection are included with playRound to ensure they are calculated

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
