console.log("Hello World")

// Start game

// Unsure, insert code here

// Score at 0 initially, going for five rounds

let playerScore = 0;
let computerScore = 0;

// Each round determines a winner

let winner = '';

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

    // function computerResponse() {
    //     const playerSelection = "rock";
    //     const computerSelection = computerPlay();
    //     return playRound(playerSelection, computerSelection);
    //     console.log(playRound(playerSelection, computerSelection));
    // }

    // function playerSelection() {
    //     const input = prompt("Do you play rock, paper, or scissors?");
    //     alert('My pick is ${input}');
    // }

    // console.log(playerSelection)
