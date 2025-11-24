// 1. deposit money into the slot machine
// 2. Determine how many lines to bet on
// 3. collect a bet from the user
// 4. spin the slot machine
// 5. check if the user won
// 6. give the user their winnings
// 7. play again

const prompt = require("prompt-sync")();

const deposit = () => {

    while (true) {
        const depositAmount = prompt("Enter a deposit amount: ");
        // by dafault prompt returns a string - need to convert to a number type
        const numberDepositAmount = parseFloat(depositAmount);

        if (isNaN(numberDepositAmount) || numberDepositAmount <= 0) {
            console.log( "Invalid amount");
        } else {
            return numberDepositAmount;
        }
    }
};

const getNumberOfLines = () => {
    while (true) {
        const lines = prompt("Enter the number of lines (1 - 3): ");
        // by dafault prompt returns a string - need to convert to a number type
        const numberOfLines = parseFloat(lines);

        if (isNaN(numberOfLines) || numberOfLines <= 0 || numberOfLines > 3) {
            console.log( "Invalid number of lines, pick between 1 and 3");
        } else {
            return numberOfLines;
        }
    }
};

const getBet = (balance, lines) => {
    while (true) {
        const bet = prompt("Enter the bet amount per line: ");
        // by dafault prompt returns a string - need to convert to a number type
        const betAmount = parseFloat(bet);

        if (isNaN(betAmount) || betAmount <= 0 || betAmount > balance / lines) {
            console.log( "Invalid bet amount, try again");
        } else {
            return betAmount;
        }
    }
}

let balance = deposit();
const numberOfLines = getNumberOfLines();
const bet = getBet(balance, numberOfLines);