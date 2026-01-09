


type Ball = {
    diameter : number
}
type Bat = {
    diameter : number
}

let bat : Bat ={
    diameter : 12
}
let ball : Ball = {
    diameter : 12
}

bat = ball   // bat equal to ball??? 
             // yes bat equal to ball b/c there is one key and its same (diameter)
              
ball = bat   // SAME




type Teacher = {
    name : string,
    age : number,
    experience : string
}

type Student = {
    name: string,
    age : number
}

let teacher : Teacher ={
    name : "Miss.Erum",
    age: 25 ,
    experience : "three years"
}

let student : Student = {
    name : "SUBHAN",
    age : 20
}

student = teacher   // no error between student to teacher b/c
                    // student k pass thori keys hain wo upar jana 
                    // chahe ja sakta hai .....

                    
// teacher = student  // error between teacher to student b/c
                   // teacher ke pass ziada keys hian wo niche 
                   // nahi aa sakti ......

                // callback
    function sayName() {
        console.log("SUBHAN");
        }

        // now add the callback funtion
    function sum(num1:number , num2:number , callback:any){
        console.log(num1 + num2);
        callback()
        
    }
    sum(10,20,sayName)