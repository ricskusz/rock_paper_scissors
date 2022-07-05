// necessary variables 
let playerScore = 0;
let computerScore = 0;

let playerScoreContainer = document.querySelector('.player');
let compterScoreContainer = document.querySelector('.bot');
let roundWinnerContainer = document.querySelector('.roundwinner');
let finalResultContainer = document.querySelector('.finalresult');


// computer pick random 
function computerPlay(){
    const possibleChoices = ["rock" , "paper" , "scissors"];
    return possibleChoices[Math.floor(Math.random()*possibleChoices.length)];
}


// decide who is the round winner
function playRound(playerSelection, computerSelection){

    let winner;
    let returnMessage;
    let gameResult;

    if(playerSelection.toLowerCase() == computerSelection){
        returnMessage = `Draw ${playerSelection}-${computerSelection}`;
        winner = "nowinner";
    }else{
        if(playerSelection.toLowerCase() == "rock"){
            if(computerSelection == "scissors"){
                returnMessage = `You win! ${playerSelection} beats ${computerSelection}`;
                winner = "player"
            }else{
                returnMessage = `You loose! ${computerSelection} beats ${playerSelection}`
                winner  = "computer"
            }
        }else if(playerSelection.toLowerCase() == "paper"){
            if(computerSelection == "rock"){
                returnMessage = `You win! ${playerSelection} beats ${computerSelection}`;
                winner = "player";
            }else{
                returnMessage = `You loose! ${computerSelection} beats ${playerSelection}`;
                winner = "computer";
            }
        }else if(playerSelection.toLowerCase() == "scissors"){
            if(computerSelection == "paper"){
                returnMessage = `You win! ${playerSelection} beats ${computerSelection}`;
                winner = "player"
            }else{
                returnMessage = `You loose! ${computerSelection} beats ${playerSelection}`;
                winner = "computer";
            }
        }
    }

    gameResult = {
        'winner': winner,
        'message': returnMessage
    };

    return gameResult;
}

// decide who is the entire game winner
function checkWinner(playerScore, computerScore){

    let returnMessage;

    if(computerScore == playerScore){
      returnMessage = `${playerScore}-${computerScore} Draw`;
    }else if(playerScore > computerScore){
        returnMessage = `Win! player: ${playerScore} - computer: ${computerScore}`;
    }else{
        returnMessage = `Loose! player: ${playerScore} - computer: ${computerScore}`;
    }

    return returnMessage;
}

//starts and handle game rounds
function game(currentRound){

    finalResultContainer.textContent = "Rock Paper Scissors";

    if(currentRound.winner == "player"){
        playerScore++;
    }else if(currentRound.winner == "computer"){
            computerScore++;
    }

    if(playerScore == 5 || computerScore == 5){
        finalResultContainer.textContent = checkWinner(playerScore, computerScore);
        playerScore = 0
        computerScore = 0;
    }

    playerScoreContainer.textContent = `Player: ${playerScore}`;
    compterScoreContainer.textContent = `Bot: ${computerScore}`;
    roundWinnerContainer.textContent = currentRound.message;
}

//  set game buttons as game starters
const buttons = document.querySelectorAll(".gamebutton");

buttons.forEach(button => {
    let selection = button.dataset.name;
    button.addEventListener('click', () => {
        game(playRound(selection, computerPlay()));
    });
});