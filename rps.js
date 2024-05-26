let humanScore = 0;
let computerScore = 0;

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
        getHumanChoice();
    }
}

function playRound(humanChoice, computerChoice) {
    console.log(`${humanChoice} vs ${computerChoice}`);

    if (humanChoice === computerChoice) {
        console.log("It's a draw");
    }

    else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
        ) {
            console.log(`You win: ${humanChoice} beats ${computerChoice}`);
            ++humanScore;
    }

    else {
        console.log(`You lose: ${computerChoice} beats ${humanChoice}`);
        ++computerScore;
    }

    return `${humanScore} vs ${computerScore}`;
}

const user = getHumanChoice();
const comp = getComputerChoice();

console.log(playRound(user, comp));