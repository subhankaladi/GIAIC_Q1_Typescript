// import inquirer from "inquirer"

// let answers = await inquirer.prompt([
//     {
//         type: "number",
//         name: "num1",
//         message: "enter your first number"
//     },
//     {
//         type: "number",
//         name: "num2",
//         message: "enter your second number"
//     },
//     {
//         type: "list",
//         name: "operator",
//         message: "select oparator",
//         choices:["+","-","*","/"]

//     }
// ])

// let{num1, num2, operator} = answers
// if (num1 && num2 && operator) {
//     let result: number = 0
//     if (operator === "+") {
//         result = num1+num2
//     }

//     if (operator === "-") {
//         result = num1-num2
//     }

//     if (operator === "*") {
//         result = num1*num2
//     }

//     if (operator === "/") {
//         result = num1/num2
//     }
//     console.log("your result is", result);
    
// }
// console.log(answers);

// import inquirer from "inquirer";

// const answers: {
//     sentence:string
// } = await inquirer.prompt([
//     {
//         name: "sentence",
//         type: "input",
//         message:"enter your sentence"
//     }
// ])
// let words = answers.sentence.trim().split(" ")

// console.log(words);

// console.log(words.length);


// import inquirer from "inquirer";

// let answers = await inquirer.prompt([{
//     name: "age",
//     type: "number",
//     message: "Enter your Age:"}
// ]);

// console.log("Insha Allah, in " + (60 - answers.age) + " years you will be 60 years old.");


// import inquirer from "inquirer";
// import chalk from "chalk";

// let answers = await inquirer.prompt([{
//     name: "age",
//     type: "number",
//     message: "Enter your Age:"}
// ]);

// console.log(chalk.blue("Insha Allah, in " + (60 - answers.age) + " years you will be 60 years old."));
