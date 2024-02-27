const btnRock = document.querySelector('#rock');
btnRock.addEventListener('click', () => {playGame('rock')});
const btnPaper = document.querySelector('#paper');
btnPaper.addEventListener('click', () => {playGame('paper')});
const btnScissor = document.querySelector('#scissor');
btnScissor.addEventListener('click', () => {playGame('scissor')});
const roundResult = document.createElement('p');
roundResult.setAttribute('style', 'white-space: pre;');
const roundResultContainer = document.querySelector('#result-round');
const scores = document.createElement('p');
scores.setAttribute('style', 'white-space: pre;');
const scoresContainer = document.querySelector('#score');
scores.textContent = `0    -    0\r\n`;
scores.textContent += `You   CPU`;
scoresContainer.appendChild(scores);
const gameResult = document.createElement('p');
const gameResultContainer = document.querySelector('#result-game');
const reset = document.createElement('button');
reset.textContent = '🔄Restart';
reset.addEventListener('click', restart);


let playerScore = 0;
let computerScore = 0;
const choices = ['rock', 'paper', 'scissor'];

function checkScore(){
    if (playerScore == 5){
        gameResult.textContent = `Congratulation you Won!`
        gameResultContainer.appendChild(gameResult);
        roundResultContainer.removeChild(roundResult);
        gameResultContainer.appendChild(reset);
    }
    else if (computerScore == 5){
        gameResult.textContent = `CPU won, better luck next time`
        gameResultContainer.appendChild(gameResult);
        roundResultContainer.removeChild(roundResult);
        gameResultContainer.appendChild(reset);
    }
    else {
        
    }
}


function geteEmoji(choice){
    if (choice === 'rock'){
        return '🪨';
    }
    else if (choice === 'paper'){
        return '📜';
    }
    else if(choice === 'scissor'){
        return '✂️';
    }
}

function restart () {
    playerScore = 0;
    computerScore = 0;
    gameResultContainer.removeChild(gameResult);
    scores.textContent = `${playerScore}    -    ${computerScore}\r\n`;
    scores.textContent += `You   CPU`;
    gameResultContainer.removeChild(reset);


}

function getComputerChoice() {
    const computerPick = Math.floor(Math.random()*3);
    return choices.at(computerPick);
}

function getPlayerChoice(btnSelected) {
    let playerChoice = btnSelected;
    return playerChoice;
}


function playRound(computerSelection, playerSelection) {
    let playerEmoji = geteEmoji(playerSelection);
    let computerEmoji = geteEmoji(computerSelection);
    if (computerSelection === playerSelection) {
        roundResult.textContent = `${playerEmoji} vs ${computerEmoji} \r\n`;
        roundResult.textContent += `It's tie!`;
        roundResultContainer.appendChild(roundResult);
        scores.textContent = `${playerScore}    -    ${computerScore}\r\n`;
        scores.textContent += `You   CPU`;
    }
    else if (
        (computerSelection == 'rock' && playerSelection == 'paper') ||
        (computerSelection == 'paper' && playerSelection == 'scissor') ||
        (computerSelection == 'scissor' && playerSelection == 'rock')
        ) {
            roundResult.textContent = `${playerEmoji} vs ${computerEmoji} \r\n`;
            roundResult.textContent += `You Won`;
            playerScore += 1;
            scores.textContent = `${playerScore}    -    ${computerScore}\r\n`;
            scores.textContent += `You   CPU`;
        }
    else if (
        (computerSelection == 'rock' && playerSelection == 'scissor') ||
        (computerSelection == 'paper' && playerSelection == 'rock') ||
        (computerSelection == 'scissor' && playerSelection == 'paper')
    ){
        roundResult.textContent = `${playerEmoji} vs ${computerEmoji} \r\n`;
        roundResult.textContent += `You Lost!`;
        const roundResultContainer = document.querySelector('#result-round');
        roundResultContainer.appendChild(roundResult);
        computerScore += 1;
        scores.textContent = `${playerScore}    -    ${computerScore}\r\n`;
        scores.textContent += `You   CPU`;
    }
}

function playGame(btnSelected) {
        if(playerScore < 5 && computerScore < 5){
            playRound(getComputerChoice(), getPlayerChoice(btnSelected));
            checkScore();
        }
        else {
            checkScore();
        }
}
