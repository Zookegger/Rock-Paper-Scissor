function getComputerChoice() {
    let answer = Math.floor(Math.random() * 2);
    if (answer === 0)
        return 'rock';
    else if (answer === 1)
        return 'paper';
    else
        return 'scissor';
}

function getHumanChoice() {
    return answer = prompt("Rock paper scissor").toLowerCase();
}

function gameLogic(p1, p2) {
    console.log(p1, p2);
    if (p1 === 'rock' && p2 === 'rock')
        alert("Draw");
    else if (p1 === 'paper' && p2 === 'paper')
        alert("Draw");
    else if (p1 === 'scissor' && p2 === 'scissor')
        alert("Draw");
    else if (p1 === 'rock' && p2 === 'scissor')
        alert("You win");
    else if (p1 === 'paper' && p2 === 'rock')
        alert("You Win");
    else if (p1 === 'scissor' && p2 === 'paper')
        alert("You Win");
    else
        alert("You Lose");
}

for (i = 0; i < 5; i++)
    gameLogic(getHumanChoice(), getComputerChoice());
