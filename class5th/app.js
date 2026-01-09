import inquirer from "inquirer";
let answers = await inquirer.prompt([{
        name: "userName",
        type: "string",
        message: "what is your name?",
    }]);
console.log("wellcome " + answers.user);
