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
// output a message that says if player wins, loses, or ties
// play 5 times total (best of 5)
// keep track of wins, losses, ties for player and computer

function playRound(playerSelection) {
    if (rounds === 5) {
        rock.removeEventListener('click', clickRock());
        paper.removeEventListener('click', clickPaper());
        scissors.removeEventListener('click', clickScissors());
    };
    playerLower = playerSelection.toLowerCase();
    computerSelection = getComputerChoice();
    computerLower = computerSelection.toLowerCase();
    if (playerLower === 'rock' && computerLower === 'scissors' || playerLower === 'paper' && computerLower === 'rock' || playerLower === 'scissors' && computerLower === 'paper') {
        message.textContent = `You Win! ${playerSelection} beats ${computerSelection}!`;
        results = `You Win! ${playerSelection} beats ${computerSelection}!`;
    } else if (playerLower == computerLower) {
        message.textContent = `It's a Tie! You both chose ${computerSelection}!`;
        results = `It's a Tie! You both chose ${computerSelection}!`;
    } else {
        message.textContent = `You Lose! ${playerSelection} loses to ${computerSelection}!`;
        results = `You Lose! ${playerSelection} loses to ${computerSelection}!`;
    };
    if (results.startsWith('You Win') == true) {
        playerWins += 1;
    } else if (results.startsWith('You Lose') == true) {
        playerLosses += 1;
    } else {
        playerTies += 1;
    };
    rounds++;
    final.textContent = `Score: Wins ${playerWins}, Losses ${playerLosses}, Ties ${playerTies}`;
    console.log(rounds);
}

const message = document.querySelector('#results');
const final = document.querySelector('#final');

let rounds = 0
let playerWins = 0
let playerLosses = 0
let playerTies = 0

let rock = document.querySelector('#rock')
rock.addEventListener('click', function clickRock() {(playRound('Rock'))});
let paper = document.querySelector('#paper')
paper.addEventListener('click', function clickPaper() {(playRound('Paper'))});
let scissors = document.querySelector('#scissors')
scissors.addEventListener('click', function clickScissors() {(playRound('Scissors'))});