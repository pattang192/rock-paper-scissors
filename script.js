/*Create a variable to store computer's choice of a random number from 1 to 10
Create a function to get computer choice of rock paper scissors using math random function
Display prompt requesting user's choice
Display message stating the user's choice of rock paper or scissors, else return error message.
Create functions to keep track of players scores
*/

let computerChoice = Math.floor(Math.random() * 10) + 1;
function getComputerChoice(computerChoice) {
    if (computerChoice < 5) {
        return "rock";
    }
    else if (computerChoice <8 ) {
        return "paper";
    }
    else {
        return "scissors";
    }
}
console.log(getComputerChoice(computerChoice));

let humanChoice = prompt("Type your choice of rock, paper or scissors here:");
humanChoice = humanChoice.toLowerCase();
console.log(humanChoice);
function getHumanChoice(humanChoice) {
    if (humanChoice === "rock") {
        return "You chose ROCK!";
    }
    else if (humanChoice === "paper") {
        return "You chose PAPER!"
    }
    else if (humanChoice === "scissors") {
        return "You chose SCISSORS!"
    }
    else if (humanChoice === "") {
        return "Uh oh, you forgot to choose!"
    }
    else {
        return "That doesn't look like an option..."
    }
}
console.log(getHumanChoice(humanChoice));

const humanScore = 0;
const computerScore = 0;


function playRound(humanChoice, computerChoice) {
    if (humanChoice === "scissors" && computerChoice <5){
        return "You lose! Rock beats Scissors.";
        ++computerScore;
        }
        else if (humanChoice === "rock" && (computerChoice >4 && computerChoice <8)) {
        return "You lose! Paper beats Rock.";
        ++computerScore;
        }
        else if (humanChoice === "paper" && computerChoice >7) {
            return "You lose! Scissors beats Paper."; 
            ++computerScore;
        }
        
        else if (humanChoice === "paper" && computerChoice <5) {
            return "You win! Paper beats Rock.";
            ++humanScore;
        }
       
        else if (humanChoice === "scissors" && (computerChoice >4 && computerChoice <8)) {
            return "You win! Scissors beats Paper.";
            ++humanScore;
        }
        else if (humanChoice === "rock" && computerChoice >7) {
            return "You win! Rock beats Scissors.";
            ++humanScore;
        }
        else if (humanChoice = computerChoice) {
            return "Looks like we have a tie."
        }
            
}
console.log(playRound(humanChoice, computerChoice));

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);


