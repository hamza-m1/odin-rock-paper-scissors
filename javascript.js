function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3)
    if (randomNumber === 0) {
        return 'rock'
    } else if (randomNumber === 1) {
        return 'paper'
    } else {
        return 'scissors'
    }
}

function playRound(humanChoice, computerChoice) {
    roundChoices.textContent = `You chose: ${humanChoice}, Computer chooses: ${computerChoice}`

    if (humanScore >= 5 || computerScore >= 5) return;

    if (humanChoice === computerChoice) {
        roundDecision.textContent = 'you draw'
    } else if (humanChoice === 'rock' && computerChoice === 'scissors' ||
        humanChoice === 'paper' && computerChoice === 'rock' ||
        humanChoice === 'scissors' && computerChoice === 'paper') {
        roundDecision.textContent = `You win, ${humanChoice} beats ${computerChoice}`
        humanScore++
    } else {
        roundDecision.textContent = `You lose, ${computerChoice} beats ${humanChoice}`
        computerScore++
    }
    score.textContent = `You: ${humanScore} : computer: ${computerScore}`
}

function checkScore() {
    if (humanScore >= 5) {
        roundChoices.textContent = ''
        roundDecision.textContent = ''
        winningMessage.textContent = 'Congratulations, you win!'
    } else if (computerScore >= 5) {
        roundChoices.textContent = ''
        roundDecision.textContent = ''
        winningMessage.textContent = 'Unlucky, you lose'
    }
}

let humanScore = 0
let computerScore = 0

const rock = document.querySelector('#rock')
const paper = document.querySelector('#paper')
const scissors = document.querySelector('#scissors')

const display = document.querySelector('#display')
const roundChoices = document.querySelector('#roundChoices')
const roundDecision = document.querySelector('#roundDecision')

const score = document.querySelector('#score')
const winningMessage = document.querySelector('#winningMessage')

rock.addEventListener('click', () => {
    playRound('rock', getComputerChoice())
    checkScore()
})
paper.addEventListener('click', () => {
    playRound('paper', getComputerChoice())
    checkScore()
})
scissors.addEventListener('click', () => {
    playRound('scissors', getComputerChoice())
    checkScore()
})

const playAgainButton = document.querySelector('#playAgainButton')
playAgainButton.addEventListener('click', () => {
    humanScore = 0
    computerScore = 0
    winningMessage.textContent = ''
    score.textContent = `You: ${humanScore} : computer: ${computerScore}`
})