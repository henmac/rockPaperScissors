function computerPlay() {
    let randomNum = Math.floor(Math.random() * 3);
    let word;
    if (randomNum == 0) {
        word = "rock";
    } else if (randomNum == 1) {
        word = "paper";
    } else if (randomNum == 2) {
        word = "scissors";
    }
    return word;
}

let yourScore = 0
let computerScore = 0

function game() {
    for (i = 1; i < 6; i++) {
    const playerSelection = window.prompt("Rock, paper or scissors?")
    const computerSelection = computerPlay();
    playRound(playerSelection, computerSelection)

    function playRound(playerSelection, computerSelection) {
        let player = playerSelection.toLowerCase();
        if (player == computerSelection) {
            alert('Tie game!' + "\n\n Player score: " + yourScore + "\n Computer score: " + computerScore );
        }
        else if (
            (player == "rock" && computerSelection == "scissors") ||
            (player == "paper" && computerSelection == "rock") ||
            (player == "scissors" && computerSelection == "paper")
            ) {
            yourScore += 1;    
            alert('You win! ' + player + ' beats ' + computerSelection + '!' + "\n\n Player score: " + yourScore + "\n Computer score: " + computerScore);
            
        }
        else if (
            (player == "scissors" && computerSelection == "rock") ||
            (player == "rock" && computerSelection == "paper") ||
            (player == "paper" && computerSelection == "scissors")
            ) {
            computerScore += 1;
            alert('You lose! ' + computerSelection + ' beats ' + player + '!' + "\n\n Player score: " + yourScore + "\n Computer score: " + computerScore);
            
        }
        }
    }
}



console.log(game())

