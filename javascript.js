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
            alert('you draw')
            isDraw = true
        } else if (humanChoice === 'rock' && computerChoice === 'scissors') {
            alert('you win, rock beats scissors')
            humanScore++
        } else if (humanChoice === 'paper' && computerChoice === 'rock') {
            alert('you win, paper beats rock')
            humanScore++
        } else if (humanChoice === 'scissors' && computerChoice === 'paper') {
            alert('you win, scissors beats paper')
            humanScore++
        } else {
            alert(`you lose, ${computerChoice} beats ${humanChoice}`)
            computerScore++
        }
    }

    alert('Welcome to rock paper scissors. Best out of 5 wins. Good luck!')

    for (let i = 1; i <= 5; i++) {
        playRound(getHumanChoice(), getComputerChoice())
        if (isDraw) {
            i--
            isDraw = false
        }
        alert(`Score: you-${humanScore} : computer-${computerScore}`)
    }

    if (humanScore > computerScore) {
        alert(`Congratulations, you win ${humanScore}:${computerScore}`)
    } else {
        alert(`Unlucky, you lose ${humanScore}:${computerScore}`)
    }
}

playGame()