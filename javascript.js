console.log('Hello World!')

/*
getComputerChoice:
create a variable to store the computers choice
generate a random number between 0 and 99, and store in a randomNumber variable
if that number is smaller then or equal to 33, make the computers choice rock
if that number is greater then 33 and smaller then or equal to 66, make computers choice paper
if that number is greater then 66 and smaller then or equal to 99, make computers choice scissors
return the computers choice
*/

function getComputerChoice() {
    let computerChoice;
    let getRandomNumber = Math.floor(Math.random() * 100)
    // console.log(getRandomNumber)
    if (getRandomNumber <= 33) {
        computerChoice = 'rock'
    } else if (getRandomNumber > 33 && getRandomNumber <= 66) {
        computerChoice = 'paper'
    } else {
        computerChoice = 'scissors'
    }
    // console.log(computerChoice)
    return computerChoice;
}

getComputerChoice()
