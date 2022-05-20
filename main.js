console.log("Hello World")

// Score at 0 initially, going for five rounds

let playerScore = 0;
let computerScore = 0;

// Each round determines a winner

let winner = '';

// When it's a tie

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        winner = 'none'
    }

    // When the computer wins through matchups

    if ((playerSelection === 'rock' && computerSelection === 'paper') || (playerSelection === 'scissors' && computerSelection === 'rock') || (playerSelection === 'paper' && computerSelection === 'scissors')) {
        computerScore++
        winner = 'computer'
    }

     // When the player wins through matchups

     if ((playerSelection === 'rock' && computerSelection === 'scissors') || (playerSelection === 'paper' && computerSelection === 'rock') || (playerSelection === 'scissors' && computerSelection === 'paper')) {
        playerScore++
        winner = 'player'
    }

    // Deciding computer's response

    function computerPlay() {
        let computerNumber = random(3);
        let computerInput = '';
    }

    switch (ComputerNumber) {
        case 1:
            computerInput = 'rock';
            break;
        case 2:
            computerInput = 'paper'
            break;
        case 3:
            computerInput = 'scissors'
            break;
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
