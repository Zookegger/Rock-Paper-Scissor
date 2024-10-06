// Create buttons for player choices
const rockButton = document.createElement("button");
rockButton.innerText = "Rock";
rockButton.style.cssText = "font-size: 32px; padding: 16px; margin: 0 16px;"

const paperButton = document.createElement("button");
paperButton.innerText = "Paper";
paperButton.style.cssText = "font-size: 32px; padding: 16px; margin: 0 16px;"

const scissorButton = document.createElement("button");
scissorButton.innerText = "Scissor";
scissorButton.style.cssText = "font-size: 32px; padding: 16px; margin: 0 16px;"

// Initialize scores
let playerScore = 0;
let computerScore = 0;

// Create scoreboard
const scoreBoard = document.createElement("div");
scoreBoard.style.cssText = "border: 3px solid black";

const playerScoreBoard = document.createElement("div");
playerScoreBoard.innerText = "Player: 0";
const computerScoreBoard = document.createElement("div");
computerScoreBoard.innerText = "Computer: 0";

scoreBoard.appendChild(playerScoreBoard);
scoreBoard.appendChild(computerScoreBoard);

// Disable buttons
function disableButtons() {
    rockButton.disabled = true;
    paperButton.disabled = true;
    scissorButton.disabled = true;
}

// Funtion to get random computer choice
function getComputerChoice() {
    const answer = ['rock', 'paper', 'scissor'];
    return answer[Math.floor(Math.random() * 3)];
}

// Implement game logic, returns 1 if players wins, returns 0 if draw and return -1 if players loses
function gameLogic(p1, p2) {
    if (p1 === 'rock' && p2 === 'scissor' ||
        p1 === 'paper' && p2 === 'rock' ||
        p1 === 'scissor' && p2 === 'paper')
        return 1;
    else if (p1 === p2)
        return 0;
    else
    return -1;
}

let rounds = 0;

function updateScore() {
    playerScoreBoard.innerText = `Player: ${playerScore}`;
    computerScoreBoard.innerText = `Computer: ${computerScore}`;
}

function playRound(playerChoice) {
    const computerChoice = getComputerChoice();
    let result = gameLogic(playerChoice, computerChoice);

    rounds++;

    if (rounds === 5)
        disableButtons();

    console.log(playerChoice);
    console.log(computerChoice);

    if (result === 1){
        playerScore++;
        console.log("Player wins!");
    } else if (result === -1) {
        computerScore++;
        console.log("Computer wins!");
    } else {
        console.log("It's a tie!");
    } 

    updateScore();
    if (rounds === 5) {
        const gameResults = document.createElement("div");
        if (playerScore > computerScore)
            gameResults.innerText = "You Won";
        else if (playerScore < computerScore)
            gameResults.innerText = "You lose";
        else 
            gameResults.innerText = "Tied";
        body.appendChild(gameResults);
    }
}

// Event listeners for player's button input
rockButton.addEventListener('click', () => {
    if (rounds < 5)
        playRound("rock");
});
paperButton.addEventListener('click', () => {
    if (rounds < 5)
        playRound("paper");
});

scissorButton.addEventListener('click', () => {
    if (rounds < 5)
        playRound("scissor");
});

// Add button and scoreboard to html body
const body = document.querySelector("body");
body.appendChild(rockButton);
body.appendChild(paperButton);
body.appendChild(scissorButton);
body.appendChild(scoreBoard);
