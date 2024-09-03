/*Create a variable to store computer's choice of a random number from 1 to 10
Create a function to get computer choice of rock paper scissors using math random function
Display prompt requesting user's choice
Display message stating the user's choice of rock paper or scissors, else return error message.
Create functions to keep track of players scores
*/




function getComputerChoice() {
    let num = Math.random();

    if (num <= 1/3) {
        return "rock";
    }
    else if (num <= 2/3 ) {
        return "paper";
    }
    else {
        return "scissors";
    }
}

function getHumanChoice() {
    let humanChoice =(prompt("Type your choice of rock, paper or scissors here:")).toLowerCase();
        
    if (humanChoice === "rock" || humanChoice === "paper" || humanChoice === "scissors") {
        return humanChoice;
    }
        else {
        return "Please enter a valid option."
    }
}

let humanScore = 0;
let computerScore = 0;


function playRound(humanChoice, computerChoice) {
        if (humanChoice === "scissors" && computerChoice === "rock"){
            ++computerScore;
            return "You lose! Rock beats Scissors.";
            }
            else if (humanChoice === "rock" && computerChoice === "paper") {
                ++computerScore;
            return "You lose! Paper beats Rock.";
            }
            else if (humanChoice === "paper" && computerChoice === "scissors") {
                ++computerScore;
                return "You lose! Scissors beats Paper."; 
            }        
            else if (humanChoice === "paper" && computerChoice === "rock") {
                ++humanScore;
                return "You win! Paper beats Rock.";
            }       
            else if (humanChoice === "scissors" && computerChoice === "paper") {
                ++humanScore;
                return "You win! Scissors beats Paper.";
            }
            else if (humanChoice === "rock" && computerChoice === "scissors") {
                ++humanScore;
                return "You win! Rock beats Scissors.";
            }
            else if (humanChoice === computerChoice) {
                return "It's a tie."
            }
            else {
                console.log("Invalid input. Try again.")
                return (playRound(getHumanChoice(),getComputerChoice()));
            }                
    }

function playGame() {
    for(i=1; i<=5; i++) {
            console.log(`\nRound ${i}`);

            let humanSelection = getHumanChoice();
            let computerSelection = getComputerChoice();
            console.log(`You: ${humanSelection}\nComputer: ${computerSelection}`);
            console.log(playRound(humanSelection, computerSelection));
            console.log(`Your score: ${humanScore}\nComputer score: ${computerScore}`);
        }
       
        if (humanScore > computerScore) {
            console.log("Congrats! You win!");
        }
        else if (humanScore < computerScore) {
            console.log("Sorry, you lost.")
        }
        else if (humanScore === computerScore) {
            console.log("It's a draw!")
        }

    }
playGame();