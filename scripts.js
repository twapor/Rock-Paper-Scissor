let playerScore = 0;
let computerScore = 0;
const choices = ['rock', 'paper', 'scissor'];
let playerChoice;


function getComputerChoice() {
    const computerPick = Math.floor(Math.random()*3);
    return choices.at(computerPick);
}

function getPlayerChoice() {
    const playerPick = prompt('Please choose: rock, paper or scissor');
    playerChoice = playerPick.toLowerCase(); 
    return playerChoice;
}


function playRound(computerSelection, playerSelection) {
    if (computerSelection === playerSelection) {
    console.log('You selected: ' + playerSelection + ' - Computer selected: ' + computerSelection + `\nIt's a tie!`);
    }
    else if (
        (computerSelection == 'rock' && playerSelection == 'paper') ||
        (computerSelection == 'paper' && playerSelection == 'scissor') ||
        (computerSelection == 'scissor' && playerSelection == 'rock')
        ) {
            console.log('You selected: ' + playerSelection + ' - Computer selected: ' + computerSelection + `\nYou Win!`);
            playerScore += 1;
        }
    else if (
        (computerSelection == 'rock' && playerSelection == 'scissor') ||
        (computerSelection == 'paper' && playerSelection == 'rock') ||
        (computerSelection == 'scissor' && playerSelection == 'paper')
    ){
        console.log('You selected: ' + playerSelection + ' - Computer selected: ' + computerSelection + `\nYou Lose!`);
        computerScore += 1;
    }
}

function playGame() {
    do {
        getPlayerChoice();
        if (playerChoice === 'rock' || playerChoice === 'paper' || playerChoice === 'scissor') 
        {
            playRound(getComputerChoice(), playerChoice);
            console.log('Score: \n' + 'You: ' + playerScore + ' - Computer: ' + computerScore);
        }
        else {
            console.log('Invalid input! Try again!');
        }
    }
    while(computerScore < 5 && playerScore < 5);
    (playerScore == 5) ? alert('Congratulation! You Won!') : alert('Computer Won! Try Again');
    
}

playGame();