

import inquirer from "inquirer"

const answers = await inquirer.prompt([
    {
        name : "age",
        type : "number",
        message : "enter your age"
    }
])

console.log(answers);
