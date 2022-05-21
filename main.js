console.log("Hello World")

// Score at 0 initially, going for five rounds

let playerScore = 0;
let computerScore = 0;

// Each round determines a winner

let winner = '';

// Start game through a prompt

let userPick = prompt("Do you pick rock, paper, or scissors?");

if (userPick.toLowerCase() == "rock" || userPick.toLowerCase() == "scissors" || userPick.toLowerCase() == "rock") {
  function playRound();
}

    // Deciding computer's response

    function computerPlay() {
        let computerNumber = random(3);
        let computerSelection = '';

        switch (computerNumber) {
            case 1: computerSelection = 'rock';
                break;
            case 2: computerSelection = 'paper'
                break;
            case 3: computerSelection = 'scissors'
                break;
        }

        return computerSelection;
    }

// When it's a tie

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        winner = 'nobody'
        console.log("The winner is" + winner)
    }

    // When the computer wins through matchups

    if ((playerSelection === 'rock' && computerSelection === 'paper') || (playerSelection === 'scissors' && computerSelection === 'rock') || (playerSelection === 'paper' && computerSelection === 'scissors')) {
        computerScore++
        winner = 'computer'
        console.log("The winner is" + winner)
    }

    // When the player wins through matchups

    if ((playerSelection === 'rock' && computerSelection === 'scissors') || (playerSelection === 'paper' && computerSelection === 'rock') || (playerSelection === 'scissors' && computerSelection === 'paper')) {
        playerScore++
        winner = 'player'
        console.log("The winner is" + winner)
    }

    // Determine when someone reaches a score of 5.
    // How can I get it to check the score after every round?

    function gameOver() {
        return playerScore === 5 || computerScore === 5
    }
}