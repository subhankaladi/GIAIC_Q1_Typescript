import inquirer from "inquirer"


let pinAns = 1234
let balanceAns = 50000

const answer = await inquirer.prompt([
    {
        name: "pincode",
        type: "number",
        message: "enter your pincode"
    }
])

if (answer.pincode === pinAns) {
    console.log("correct pincode");
    
 

    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            type: "list",
            choices: ["Balance check", "withdraw"],
            message: "choose the option"
        }
    ])

    if (operationAns.operation === "withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                type: "number",
                message: "enter your amount"
            }
        ])
        balanceAns -= amountAns.amount
        console.log("your current balance is " + balanceAns);

    } else if (operationAns.operation === "Balance check") {
        console.log("your current balance " + balanceAns);
        
    }
    
} else {
    console.log("incorrect pin code");
    
    }
