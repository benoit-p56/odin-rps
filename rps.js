function getComputerChoice() {
    let x = Math.floor(Math.random() * 3);

    if (x === 0) {
        return `rock`;
    }
    else if (x === 1) {
        return `paper`;
    }
    else {
        return `scissors`;
    }
}

function getHumanChoice() {
    let choice = prompt("Enter a choice").toLowerCase();
    
    if (choice === "rock" || choice === "paper" || choice === "scissors") {
        console.log(choice);
        return choice;
    }
    else {
        console.log("Please enter a valid choice");
        return getHumanChoice();
    }
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        console.log(`${humanChoice} vs ${computerChoice}`);


        // Rock-Paper-Scissors has 7 possible outcomes: 1 Draw Condition, 3 Win Conditions and 3 Lose Conditions

        //This catches the draw outcome
        if (humanChoice === computerChoice) {
            console.log("It's a draw");
        }
        
        //This catches all 3 win outcomes
        else if ( 
            (humanChoice === "rock" && computerChoice === "scissors") ||
            (humanChoice === "paper" && computerChoice === "rock") ||
            (humanChoice === "scissors" && computerChoice === "paper")
            ) {
                console.log(`You win: ${humanChoice} beats ${computerChoice}`);
                ++humanScore;
        }
        
        //If the code reaches this point it means the user has lost
        else {
            console.log(`You lose: ${computerChoice} beats ${humanChoice}`);
            ++computerScore;
        }
    
        return `${humanScore} vs ${computerScore}`;
    }

    for (let i = 0; i < 5; i++) {
        playRound(getHumanChoice(), getComputerChoice())
    }

    if (humanScore > computerScore) {
        return `You won with ${humanScore}/5 points!`;
    }
    else {
        return (humanScore === computerScore) ? `You drew with ${humanScore}/5 points.` : `You lost with ${humanScore}/5 points.`;
    }
}

console.log(playGame());