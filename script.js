// computer play function
function computerPlay(){
    const possibleChoices = ["rock" , "paper" , "scissors"];
    return possibleChoices[Math.floor(Math.random()*possibleChoices.length)];
}

// play round function

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
                returnMessage = `You win! ${computerSelection} beats ${playerSelection}`;
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

function checkWinner(playerScore, computerScore){

    let returnMessage;
    if(computerScore == playerScore){
      returnMessage = `${playerScore}-${computerScore} Draw`;
    }else if(playerScore > computerScore){
        returnMessage = `Win! player-${playerScore} - computer- ${computerScore}`;
    }else{
        returnMessage = `Loose! player-${playerScore} - computer- ${computerScore}`;
    }

    return returnMessage;
}

//game
function game(){

    let computerScore = 0;
    let playerScore = 0;
    let playerSelection;
    let currentRound;
    let currentRoundMessage;
    let currentRoundWinner;

    for(let i = 0; i < 5; i++){
        playerSelection = prompt("Rock, Paper or Scissors?");

        currentRound = playRound(playerSelection, computerPlay());
        currentRoundWinner =  currentRound.winner;
        currentRoundMessage = currentRound.message;

        if(currentRoundWinner == "player"){
            playerScore++;
        }else if(currentRoundWinner == "computer"){
            computerScore++;
        }else{
            playerScore = playerScore;
            computerScore = computerScore;
        }
        console.log(currentRoundMessage);
    }

    console.log(checkWinner(playerScore, computerScore));

}

console.log(game());