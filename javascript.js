// ALGORITHM for rock, paper, scissors

// computer randomly chooses rock, paper, or scissors
function getComputerChoice() {
    let computerOptions = ['Rock', 'Paper', 'Scissors'];
    let randomChoice = Math.floor(Math.random() * 3);
    return computerOptions[randomChoice];
}

// choices are compared between player and computer
// rock beats scissors
// paper beats rock
// scissors beats paper
function playRound(playerSelection, computerSelection) {
    playerLower = playerSelection.toLowerCase();
    computerLower = computerSelection.toLowerCase();
    if (playerLower === 'rock' && computerLower === 'scissors' || playerLower === 'paper' && computerLower === 'rock' || playerLower === 'scissors' && computerLower === 'paper') {
        return `You Win! ${playerSelection} beats ${computerSelection}!`;
    } else if (playerLower == computerLower) {
        return `It's a Tie! You both chose ${computerSelection}`;
    } else {
        return `You Lose! ${playerSelection} loses to ${computerSelection}`;
    }
}

// player inputs rock, paper, or scissors
// output a message saying what player chose and what computer chose
// output a message that says if player wins, loses, or ties
// play 5 times total (best of 5)
// keep track of wins, losses, ties for player and computer
// wins are compared between player and computer