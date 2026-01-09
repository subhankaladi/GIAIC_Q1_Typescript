import inquirer from "inquirer";
let randomNumber = Math.floor(Math.random() * 6 + 1);
let answer = await inquirer.prompt([
    {
        name: "guess",
        type: "number",
        message: "guess your number"
    }
]);
if (answer.guess === randomNumber) {
    console.log("correct your tukka");
}
else {
    console.log(" phir se tukka lagao");
}
