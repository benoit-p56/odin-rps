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


