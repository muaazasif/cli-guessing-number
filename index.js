import inquirer from "inquirer";
const random = Math.floor(Math.random() * 10 + 1);
// console.log(random);
const answer = await inquirer.prompt([
    {
        message: "Please Guess a Number between 1 to 10: ",
        type: "number",
        name: "userGuessNumber",
    },
]);
if (answer.userGuessNumber === random) {
    console.log("Congratulation You Guess Right Number!!!");
}
else {
    console.log("You Guess Wrong Number!!!");
}
console.log(answer);
