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
    const input = prompt("Do you play rock, paper, or scissors?");
    alert('My pick is ${input}');
}