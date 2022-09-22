// ALGORITHM for rock, paper, scissors

// computer randomly chooses rock, paper, or scissors
function getComputerChoice() {
    let computerOptions = ['Rock', 'Paper', 'Scissors'];
    let randomChoice = Math.floor(Math.random() * 3);
    return computerOptions[randomChoice];
}

// player inputs rock, paper, or scissors
// choices are compared between player and computer
// rock beats scissors
// paper beats rock
// scissors beats paper
// output a message saying what player chose and what computer chose
// output a message that says if player wins, loses, or ties
// play 5 times total (best of 5)
// keep track of wins, losses, ties for player and computer
// wins are compared between player and computer