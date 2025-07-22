

import inquirer from "inquirer"
import chalk from "chalk"

const answers = await inquirer.prompt([
    {
        name : "age",
        type : "number",
        message : "enter your age"
    }
])

console.log(chalk.bule(answers));

