"use strict"
const arr = ['ROCK', 'PAPER', 'SCISSORS'];
const score = [0, 0];
const btnPlay = document.querySelectorAll('.btnPlay');
const btnRock = document.querySelector('#rock');
const btnPaper = document.querySelector('#paper');
const btnScissors = document.querySelector('#scissors');

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



const playRound = function (playerSelection, computerSelection) {
    const playerChoice = prompt('Enter Paper, Rock or Scissors');
    playerSelection = playerChoice.toUpperCase();    
    computerSelection = getComputerChoice();
    if (playerSelection == computerSelection) console.log("ITS A TIE");
    if (playerSelection == 'ROCK' && computerSelection == 'SCISSORS') {
        console.log('You Win!','Player:', playerSelection, 'Computer:',computerSelection)
        score[0]++;
        console.log(score);
    }
     if (playerSelection == 'PAPER' && computerSelection == 'ROCK') {
        console.log('You Win!','Player:', playerSelection, 'Computer:',computerSelection)
         score[0]++;
         console.log(score);
         
    } if (playerSelection == 'SCISSORS' && computerSelection == 'PAPER') {
        console.log('You Win!')
        score[0]++;
        console.log(score);

    }
    if (playerSelection == 'PAPER' && computerSelection == 'SCISSORS') {
         console.log('You Lose!','Player:', playerSelection, 'Computer:',computerSelection, score)
        score[1]++;
        console.log(score);

    }
     if (playerSelection == 'SCISSORS' && computerSelection == 'ROCK') {
         console.log('You Lose!','Player:', playerSelection, 'Computer:',computerSelection, score)
         score[1]++;
         console.log(score);

     }
      if (playerSelection == 'ROCK' && computerSelection == 'PAPER') {
          console.log('You Lose!','Player:', playerSelection, 'Computer:',computerSelection, score)
          score[1]++;
          console.log(score);

      }
}





// function game(){
//    playRound();
        
// }
// game();
// console.log('Your score', score);