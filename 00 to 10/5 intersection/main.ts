

 type a = {
    name : string,
    age : number
 }

 type b = {
    experience : boolean
 }

 let c : a & b  =  {
    name : "subhan",
    age : 20,
    experience : true
 }

 console.log(c.age);
 

 