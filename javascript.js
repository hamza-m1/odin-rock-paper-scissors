/*
getComputerChoice:
create a variable to store the computers choice
generate a random number between 0 and 99, and store in a randomNumber variable
if that number is smaller then or equal to 33, make the computers choice rock
if that number is greater then 33 and smaller then or equal to 66, make computers choice paper
if that number is greater then 66 and smaller then or equal to 99, make computers choice scissors
return the computers choice
*/

/*
getHumanChoice:
-create a variable to store human choice
-prompt the user to type rock, paper or scissors

checkAnswer:
-create a function checkAnswer that checks if a valid answer is given, if not it prompts the user to give the answer again
-if a valid answer is given, it returns the answer

-check if answer is valid using checkAnswer function, if so, return answer
*/


function getComputerChoice() {
    let computerChoice;
    let randomNumber = Math.floor(Math.random() * 3)
    if (randomNumber === 0) {
        computerChoice = 'rock'
    } else if (randomNumber === 1) {
        computerChoice = 'paper'
    } else {
        computerChoice = 'scissors'
    }
    return computerChoice;
}

function getHumanChoice() {
    let humanChoice = prompt('Choose rock, paper or scissors').toLowerCase()
    if (humanChoice === 'rock' || humanChoice === 'paper' || humanChoice === 'scissors') {
        return humanChoice
    } else {
        alert('Invalid answer')
        let humanChoice = getHumanChoice().toLowerCase()
        return humanChoice
    }
}



// console.log(humanSelection)
// console.log(computerSelection)

// console.log(`human score: ${humanScore}`)
// console.log(`computer score: ${computerScore}`)

function playGame() {
    let humanScore = 0
    let computerScore = 0
    let isDraw = false

    function playRound(humanChoice, computerChoice) {
        if (humanChoice === computerChoice) {
            alert('you draw')
            isDraw = true
        } else if (humanChoice === 'rock' && computerChoice === 'scissors') {
            alert(`you win, ${humanChoice} beats ${computerChoice}`)
            humanScore++
        } else if (humanChoice === 'paper' && computerChoice === 'rock') {
            alert(`you win, ${humanChoice} beats ${computerChoice}`)
            humanScore++
        } else if (humanChoice === 'scissors' && computerChoice === 'paper') {
            alert(`you win, ${humanChoice} beats ${computerChoice}`)
            humanScore++
        } else {
            alert(`you lose, ${computerChoice} beats ${humanChoice}`)
            computerScore++
        }
    }

    for (let i = 1; i <= 5; i++) {
        let humanSelection = getHumanChoice()
        let computerSelection = getComputerChoice()
        playRound(humanSelection, computerSelection)
        if (isDraw === true) {
            i--
            isDraw = false
        }
        alert(`Score: you-${humanScore} : computer-${computerScore}`)
    }
    if (humanScore > computerScore) {
        alert(`Congratulations, you win ${humanScore}:${computerScore}`)
    } else {
        alert(`you lose ${humanScore}:${computerScore}`)
    }
}

playGame()