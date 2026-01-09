
// import inquirer from "inquirer"

// const answer = await inquirer.prompt([
//     {
//         name : "num1",
//         type : "number",
//         message : "enter your first number"
//     },
//     {
//         name : "num2",
//         type : 'number',
//         message : 'Enter your second number'
//     },
//     {
//         name : 'operator ',
//         type : 'list',
//         choices : ["+" , "-" , "*" , "/"],
//         message : 'enter your operator'
//     }
// ])
// const {num1 , num2 , operator} = answer
// if (num1 && num2 && operator){
//     let result = 0
//     if (operator === "+"){
//         result =
//          num1+num2
//     }
//     if ( operator === "-"){
//         result= num1 - num2
//     }
//     if (operator === "*"){
//         result = num1 * num2
//     }
//     if (operator === "/"){
//         result = num1 / num2
//     }
//     console.log("your result is", result);
    
// }
// console.log(answer);


// type person = {
//     name : string,
//     age : number
// }
// type student = person & {
//     role : string
// }
// const stdnt : student = {
//     name : "subhan",
//     age : 20,
//     role : "software engineer"
// }
// console.log(stdnt);


// type Fruit = "apple" | "banana" | "orange"
// function getFruitName (fruit : Fruit) : string{
//     return "FRUIT" + " " + fruit
// }
// console.log(getFruitName("apple"));
// console.log(getFruitName("mango"));


// interface  User {
//     name : string,
//     age? : number
// }
// function printUser(user: User){
//     console.log("Name" + " " + user.name);
//     if (user.age !== undefined){
//         console.log("Age" + " " + user.age);
//         } }

// printUser({name: "shahid"})
// printUser({name:"subhan" , age : 20})


type A = {
    name : string
}
type B = A & {
    age : number
}
const person : B = {
    name : "subhan",
    age : 20
}
console.log(person.name); 
console.log(person.age);

