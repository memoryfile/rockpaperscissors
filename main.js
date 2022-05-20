console.log("Hello World")

// Score at 0 initially, going for five rounds

let playerScore = 0;
let computerScore = 0;

// Each round determines a winner

let winner = '';

// Start game by clicking the button, not working

const button = document.createElement('button')
button.addEventListener('click', () => {
    return game();
})

// Accept user input in console, not working

function game() {
    prompt("Do you pick rock, paper, or scissors", '')
    return playRound;
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

    // Deciding computer's response

    function computerPlay() {
        let computerNumber = random(3);
        let computerInput = '';

        switch (ComputerNumber) {
            case 1: computerInput = 'rock';
                break;
            case 2: computerInput = 'paper'
                break;
            case 3: computerInput = 'scissors'
                break;
        }

        return computerInput;
    }

    // Determine when someone reaches a score of 5.
    // How can I get it to check the score after every round?

    function gameOver() {
        return playerScore === 5 || computerScore === 5
    }
}