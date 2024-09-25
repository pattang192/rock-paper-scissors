/*Create a function that determines computer choice of rock paper scissors using math random function
Display prompt requesting user's choice
Display message stating the user's choice of rock paper or scissors, else return error message.
Create functions to keep track of players scores
For loop that plays five rounds and declares winner of each round and ultimate winner.
*/
let humanScore = 0;
let computerScore = 0;
const buttons = document.querySelectorAll("button");

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

function playGame() {
    let humanSelection = event.target.id;
    let computerSelection = getComputerChoice();

            const paras = document.querySelectorAll("div p");
            selections.textContent = `You: ${humanSelection}\nComputer: ${computerSelection}`;
            roundResult.textContent = `${playRound(humanSelection, computerSelection)}`;
            score.textContent = `Your score: ${humanScore}\nComputer score: ${computerScore}`;

            if (computerScore === 5 || humanScore === 5) {
                gameOver();
                computerScore = 0;
                humanScore = 0;
                }
}    

function gameOver() {
    if (humanScore > 4 && computerScore > 4) {
        gameResult.textContent = "It's a draw!";
    }
    else if (computerScore > 4) {
        gameResult.textContent = "Sorry, you lost the game.";
    }
    else if (humanScore > 4) {
    gameResult.textContent = "Congrats! You won the game!";
    }
}

function playRound(humanChoice, computerChoice) {
        buttons.forEach((button) => {
        button.addEventListener('click', () => {
            let humanChoice = event.target.id;
            return humanChoice;
            });
        }); 
        
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
                ++humanScore;
                ++computerScore;
                return "It's a tie."
            }       
}    

    buttons.forEach((button) => {
        button.addEventListener('click', playGame)
    });
