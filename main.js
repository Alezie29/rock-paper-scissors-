function getComputerChoice() {
    const choices = ['Rock', 'Paper', 'Scissors']; 
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

console.log(getComputerChoice());

function playRound(playerSelection, computerSelection) {
playerSelection = playerSelection.toLowerCase();
computerSelection = computerSelection.toLowerCase();

const outcomes = {
    rock: "scissors",
    paper: "rock",
    scissors: "paper"
};

if (playerSelection === computerSelection) {
    return "Tie!";
} else if (outcomes[playerSelection] === computerSelection) {
    return `Congratulations ${playerSelection} beats ${computerSelection}, you win! `;
} else {
    return `You lose! ${computerSelection} beats ${playerSelection}`;
}
}

const playerSelection = "rock";
const computerSelection = getComputerChoice(); 
console.log(playRound(playerSelection, computerSelection));

function game() {
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt("Choose either Rock, Paper or Scissors");
        const computerSelection = getComputerChoice(); 
        const result = playRound(playerSelection, computerSelection);
        console.log(result);
    

        if (result.includes("win")) {
        playerScore++; 
        } else if (result.includes("lose")) {
        computerScore++;
        }
    }

        if (playerScore > computerScore) {
        console.log("Congratualions, you win the game!");
        } else if (computerScore > playerScore) {
        console.log("Unlucky, the computer won this time");
        } else {
        console.log("It's a tie!");
        }
}
 
game(); 