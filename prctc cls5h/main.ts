// import inquirer from "inquirer";

// let answer = await inquirer.prompt([{
//     name: "userName",
//     type: "string",
//     message: "whats your name ?"
    
// }])
// console.log("wellcome " + answer.userName)

// let array1 : number[] = [5,6,7];
// let array2 :Array<number> = [1,2,3];

let a = 5;      
a++;    
console.log(a) 

let myAge : string | number;
myAge = 16;
console.log(myAge);
// console.log(myAge.ToLowerCase());

function teacherName (firstName: string , lastName: string):string {

if     (lastName) return firstName + " " + lastName;
else  return firstName;     
}
let result1 = teacherName("subhan" , "kaladi");  
console.log(result1)

let name1 : string = "subhan"
let name2 : string = "kaladi"
console.log('hi ${name1} ${name2}');

let GlobalVar=100;  

for (let c = 0; c < 3; c++){    //code block
    console.log(GlobalVar);
  }
