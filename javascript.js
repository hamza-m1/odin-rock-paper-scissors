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

// function getHumanChoice() {
//     let humanChoice = prompt('Choose rock, paper or scissors').toLowerCase()
//     if (humanChoice === 'rock' || humanChoice === 'paper' || humanChoice === 'scissors') {
//         return humanChoice
//     } else {
//         alert('Invalid answer')
//         let humanChoice = getHumanChoice()
//         return humanChoice
//     }
// }

function playRound(humanChoice, computerChoice) {
    roundChoices.textContent = `You chose: ${humanChoice}, Computer chooses: ${computerChoice}`

    if (humanChoice === computerChoice) {
        roundDecision.textContent = 'you draw'
        isDraw = true
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

    if (humanScore >= 5) {
        winningMessage.textContent = 'Congratulations, you win!'
    } else if (computerScore >= 5) {
        winningMessage.textContent = 'Unlucky, you lose'
    }
}

let humanScore = 0
let computerScore = 0
let isDraw = false



function playGame() {
    console.log('Welcome to rock paper scissors. Best out of 5 wins. Good luck!')

    // for (let i = 1; i <= 5; i++) {
    //     console.log(`Round: ${i}`)
    //     playRound(getHumanChoice(), getComputerChoice())
    //     if (isDraw) {
    //         i--
    //         isDraw = false
    //     }
    //     if (humanScore === 3 || computerScore === 3) {
    //         i = 5
    //     }
    //     console.log(`Score: you ${humanScore} : computer ${computerScore}`)
    //     console.log('_')
    // }

    if (humanScore > computerScore) {
        console.log(`Congratulations, you win ${humanScore}:${computerScore}`)
    } else {
        console.log(`Unlucky, you lose ${humanScore}:${computerScore}`)
    }
    console.log('Reload the page to play again!')
}

// playGame()

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
})
paper.addEventListener('click', () => {
    playRound('paper', getComputerChoice())
})
scissors.addEventListener('click', () => {
    playRound('scissors', getComputerChoice())
})
