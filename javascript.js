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

function getHumanChoice() {
    let humanChoice = prompt('Choose rock, paper or scissors').toLowerCase()
    if (humanChoice === 'rock' || humanChoice === 'paper' || humanChoice === 'scissors') {
        return humanChoice
    } else {
        alert('Invalid answer')
        let humanChoice = getHumanChoice()
        return humanChoice
    }
}

function playGame() {
    let humanScore = 0
    let computerScore = 0
    let isDraw = false

    function playRound(humanChoice, computerChoice) {
        if (humanChoice === computerChoice) {
            console.log('You draw')
            isDraw = true
        } else if (humanChoice === 'rock' && computerChoice === 'scissors') {
            console.log('You win, rock beats scissors')
            humanScore++
        } else if (humanChoice === 'paper' && computerChoice === 'rock') {
            console.log('You win, paper beats rock')
            humanScore++
        } else if (humanChoice === 'scissors' && computerChoice === 'paper') {
            console.log('You win, scissors beats paper')
            humanScore++
        } else {
            console.log(`You lose, ${computerChoice} beats ${humanChoice}`)
            computerScore++
        }
    }

    console.log('Welcome to rock paper scissors. Best out of 5 wins. Good luck!')

    for (let i = 1; i <= 5; i++) {
        console.log(`Round: ${i}`)
        playRound(getHumanChoice(), getComputerChoice())
        if (isDraw) {
            i--
            isDraw = false
        }
        if (humanScore === 3 || computerScore === 3) {
            i = 5
        }
        console.log(`Score: you ${humanScore} : computer ${computerScore}`)
        console.log('_')
    }

    if (humanScore > computerScore) {
        console.log(`Congratulations, you win ${humanScore}:${computerScore}`)
    } else {
        console.log(`Unlucky, you lose ${humanScore}:${computerScore}`)
    }
    console.log('Reload the page to play again!')
}

playGame()