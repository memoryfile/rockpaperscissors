function playRound(playerSelection, computerSelection) {
    return computerResponse();
}

function computerResponse() {
    const playerSelection = "rock";
    const computerSelection = computerPlay();
    return playRound(playerSelection, computerSelection);
    console.log(playRound(playerSelection, computerSelection));
}

function playerSelection() {
    prompt("Pick rock, paper, or scissors", 'rock', 'paper', 'scissors')
    return prompt;
}