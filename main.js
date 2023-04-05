function getComputerChoice() {
    const choices = ['Rock', 'Paper', 'Scissors']; 
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

const resultsDiv = document.querySelector('#results');
const scoreDiv = document.createElement('div');
    let playerScore = 0;
    let computerScore = 0;

const roundResult = document.createElement('p');
  resultsDiv.appendChild(roundResult);
  resultsDiv.appendChild(scoreDiv);

function playRound(playerSelection, computerSelection) {
playerSelection = playerSelection.toLowerCase();
    if (playerSelection !== 'rock' && playerSelection !== 'paper' && playerSelection !== 'scissors') {alert("Please type either Rock, Paper or Scissors ")};
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

function game() {
    const rockButton = document.querySelector('#rock');
    rockButton.addEventListener('click', () => {
        const computerSelection = getComputerChoice();
        roundResult.textContent = playRound('rock', computerSelection);
        updateScores();
    });

    const paperButton = document.querySelector('#paper');
    paperButton.addEventListener('click', () => {
        const computerSelection = getComputerChoice();
        roundResult.textContent = playRound('paper', computerSelection);
        updateScores();
    });

    const scissorsButton = document.querySelector('#scissors');
    scissorsButton.addEventListener('click', () => {
        const computerSelection = getComputerChoice();
        roundResult.textContent = playRound('scissors', computerSelection);
        updateScores();
    });
    function updateScores() {
        if (roundResult.textContent.includes("win")) {
            playerScore++;
        } else if (roundResult.textContent.includes("lose")) {
            computerScore++;
        }
    
        scoreDiv.textContent = `Player: ${playerScore} Computer: ${computerScore}`;
        
        if (playerScore === 5) {
            resultsDiv.textContent = 'Congratulations! You won the game!';
          } else if (computerScore === 5) {
            resultsDiv.textContent = 'Sorry, you lost the game!';
          }
      }
    }

game(); 