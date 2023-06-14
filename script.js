"use strict"
const arr = ['ROCK', 'PAPER', 'SCISSORS'];
const score = [0, 0];
// const player1 = score[0];
// const player2 = score[1];
const btnPlay = document.querySelectorAll('.btnPlay');
const btnRock = document.querySelector('#rock');
const btnPaper = document.querySelector('#paper');
const btnScissors = document.querySelector('#scissors');
const paperText = document.querySelector('#paperText');
const scissorsText = document.querySelector('#scissorsText');
const message = document.querySelector('#message');
const playerScoreText = document.querySelector('#scoreValuePlayer');
const computerScoreText = document.querySelector('#scoreValueComputer');
const playerMainScore = document.querySelector("#playerMainScore");
const computerMainScore = document.querySelector("#computerMainScore");




// a time-out function that helps the css of the paper text in the header to animate.
document.addEventListener('DOMContentLoaded', function () { 
setTimeout(function () {
    scissorsText.style.transform = 'scale(1)';
    scissorsText.style.opacity = 1;
    scissorsText.style.visibility = 'visible';

}, 4000)

})

// a time-out function that helps the css of the scissors text in the header to animate.
document.addEventListener('DOMContentLoaded', function () { 
setTimeout(function () {
    paperText.style.transform = 'scale(1)';
    paperText.style.opacity = 1;
    // paperText.style.visibility = 'hidden';
    paperText.style.visibility = 'visible';

}, 4000)

})

// function to generate  random number/
const generateRandomNumber =function(){
  // Generate a random decimal between 0 and 2
  const randomDecimal = Math.random()*3;
  // Scale the random decimal to the desired range (1 to 3)
  const randomNumber = Math.floor(randomDecimal) ;
  return randomNumber;
}


//function to randomly return Rock, Paper or Scissors
function getComputerChoice() {
    const randomNumber = generateRandomNumber();
    const computerChoice = arr[randomNumber];
    return computerChoice;
}



let computerScore = 0;
let playerScore = 0;
let computerSelect;
let playerSelection;

btnRock.addEventListener('click', function() {
    playerSelection = 'ROCK';
    computerSelect = getComputerChoice();
    if (playerSelection == computerSelect) { message.textContent='IT IS A DRAW'};
    if (computerSelect == 'PAPER') { computerScore++; message.textContent = 'YOU LOSE'; computerScoreText.textContent = computerScore; };
    if (computerSelect == 'SCISSORS') { playerScore++; message.textContent = 'YOU WIN'; playerScoreText.textContent = playerScore; };
    if (playerScore === 5) {
        score[0]++;
        playerScore = computerScore = 0;
        computerScoreText.textContent = '0';
        playerScoreText.textContent = '0';
        playerMainScore.textContent = score[0];


    }
    if (computerScore === 5) {
        score[1]++;
        playerScore = computerScore = 0;
        computerScoreText.textContent = '0';
        playerScoreText.textContent = '0';
        computerMainScore.textContent = score[1];

    }

    // console.log(playerScore, computerScore, score);



})
//
btnPaper.addEventListener('click', function() {
    playerSelection = 'PAPER';
    computerSelect = getComputerChoice();
    if (playerSelection == computerSelect) { message.textContent = 'IT IS A DRAW'; };
    if (computerSelect == 'SCISSORS') { computerScore++; message.textContent = 'YOU LOSE'; computerScoreText.textContent = computerScore; };
    if (computerSelect == 'ROCK') { playerScore++; message.textContent = 'YOU WIN'; playerScoreText.textContent = playerScore; };
    if (playerScore === 5) {
        score[0]++;
        playerScore = computerScore = 0;
        computerScoreText.textContent = '0';
        playerScoreText.textContent = '0';
        playerMainScore.textContent = score[0];


    }
    if (computerScore === 5) {
        score[1]++;
        playerScore = computerScore = 0;
        computerScoreText.textContent = '0';
        playerScoreText.textContent = '0';
        computerMainScore.textContent = score[1];

    }

    // console.log(playerSelection);
    // console.log(computerSelect);


})

btnScissors.addEventListener('click', function() {
     playerSelection = 'SCISSORS';
    computerSelect = getComputerChoice();
    if (playerSelection == computerSelect) { message.textContent = 'IT IS A DRAW'; };
    if (computerSelect == 'ROCK') { computerScore++; message.textContent = 'YOU LOSE'; computerScoreText.textContent = computerScore; };
    if (computerSelect == 'PAPER') { playerScore++; message.textContent = 'YOU WIN'; playerScoreText.textContent = playerScore; };
    if (playerScore === 5) {
        score[0]++;
        playerScore = computerScore = 0;
        computerScoreText.textContent = '0';
        playerScoreText.textContent = '0';
        playerMainScore.textContent = score[0];


    }
    if (computerScore === 5) {
        score[1]++;
        playerScore = computerScore = 0;
        computerScoreText.textContent = '0';
        playerScoreText.textContent = '0';
        computerMainScore.textContent = score[1];

    } 


})


const playRound = function (playerSelection, computerSelection) {
    let playerChoice = playerSelection;
    playerSelection = playerChoice.toUpperCase();    
    computerSelection = getComputerChoice();
    
    if (playerSelection == 'PAPER' && computerSelection == 'ROCK') {
        return playerScore++;
        return playerScore
    }       
    if (playerSelection == 'SCISSORS' && computerSelection == 'PAPER') {
       return playerScore++;
        return playerScore
    }
    if (playerSelection == 'PAPER' && computerSelection == 'SCISSORS') {
       return computerScore++;
        return computerScore
    } 
    if (playerSelection == 'SCISSORS' && computerSelection == 'ROCK') {
       return computerScore++;
        return computerScore
    }   
   
        return computerScore
    
}


// playRound('paper')
// console.log(computerScore, playerScore);


