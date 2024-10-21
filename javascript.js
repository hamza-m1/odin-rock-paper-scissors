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



/*
getHumanChoice:
-create a variable to store human choice
-prompt the user to type rock, paper or scissors

checkAnswer:
-create a function checkAnswer that checks if a valid answer is given, if not it prompts the user to give the answer again
-if a valid answer is given, it returns the answer

-check if answer is valid using checkAnswer function, if so, return answer
*/

// function askUser () {
//     let choice = prompt('Choose rock, paper or scissors')
//     return choice
// }

function getHumanChoice() {
    let humanChoice = prompt('Choose rock, paper or scissors').toLowerCase()
    // console.log(`in f: ${humanChoice}`)
    if (humanChoice === 'rock' || humanChoice === 'paper' || humanChoice === 'scissors') {
        return humanChoice
    } else {
        alert('Invalid answer')
        let humanChoice = getHumanChoice().toLowerCase()
        return humanChoice
    }
}

console.log(getHumanChoice())