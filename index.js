#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
const randomNumber = Math.floor(Math.random() * 10 + 1);
// console.log(random);
console.log(chalk.bold.rgb(255, 153, 0)("\n🎲 Welcome to the Guessing Game! 🎉\n"));
console.log(chalk.yellowBright("🌟 Let's see if you can guess the magic number! 🌈\n"));
const answer = await inquirer.prompt([
    {
        message: chalk.magentaBright("Please Guess a Number between 1 to 10: "),
        type: "number",
        name: "userGuessNumber",
    },
]);
if (answer.userGuessNumber === randomNumber) {
    console.log(chalk.greenBright("\n🎉 Congratulations! You guessed the right number! 🌟\n"));
}
else {
    console.log(chalk.redBright("\n😢 Oops! Better luck next time!\n"));
    console.log(chalk.blueBright(`💡 Hint: The correct number was ${randomNumber}.`));
}
// console.log(answer);
