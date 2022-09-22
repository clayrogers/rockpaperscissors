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
// output a message saying what player chose and what computer chose
// output a message that says if player wins, loses, or ties
function playRound(playerSelection, computerSelection) {
    playerLower = playerSelection.toLowerCase();
    computerLower = computerSelection.toLowerCase();
    if (playerLower === 'rock' && computerLower === 'scissors' || playerLower === 'paper' && computerLower === 'rock' || playerLower === 'scissors' && computerLower === 'paper') {
        return `You Win! ${playerSelection} beats ${computerSelection}!`;
    } else if (playerLower == computerLower) {
        return `It's a Tie! You both chose ${computerSelection}!`;
    } else {
        return `You Lose! ${playerSelection} loses to ${computerSelection}!`;
    }
}

// player inputs rock, paper, or scissors
// play 5 times total (best of 5)
// keep track of wins, losses, ties for player and computer
// round wins are compared between player and computer for winner
function game() {
    let playerWins = 0
    let playerLosses = 0
    let playerTies = 0
    for (let rounds = 0; rounds < 5; rounds++) {
        const playerSelection = prompt('Choose Rock, Paper, or Scissors.');
        const computerSelection = getComputerChoice();
        let results = playRound(playerSelection, computerSelection);
        if (results === `You Win! ${playerSelection} beats ${computerSelection}!`) {
            playerWins += 1;
        } else if (results = `You Lose! ${playerSelection} loses to ${computerSelection}!`) {
            playerLosses += 1;
        } else {
            playerTies += 1;
        }
        console.log(results);
    };
    if (playerWins > playerLosses) {
        return `You beat the computer in a best of 5! You won ${playerWins} times, lost ${playerLosses} times, and tied ${playerTies} times!`;
    } else if (playerWins < playerLosses) {
        return `You lost to the computer in a best of 5! You won ${playerWins} times, lost ${playerLosses} times, and tied ${playerTies} times!`;
    } else {
        return `You tied the computer in a best of 5! You won ${playerWins} times, lost ${playerLosses} times, and tied ${playerTies} times!`;
    }
}

console.log(game())