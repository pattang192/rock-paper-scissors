/*Create a variable to store computer's choice of a random number from 1 to 10
Create a function to get computer choice of rock paper scissors using math random function
Display prompt requesting user's choice
Display message stating the user's choice of rock paper or scissors, else return error message.
Create a variable to keep track of the players score
*/

let randomNumber = Math.floor(Math.random() * 10) + 1;
console.log(randomNumber);
function getComputerChoice(randomNumber) {
    if (randomNumber < 5) {
        return "rock";
    }
    else if (randomNumber <8 ) {
        return "paper";
    }
    else {
        return "scissors";
    }
}
console.log(getComputerChoice(randomNumber));


