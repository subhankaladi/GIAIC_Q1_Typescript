///////////////////////////// TYPE ///////////////////


type sk = {
    name: string,
    age: number,
    exp: boolean
}

type SK = {
    nickname: string,
    day: string,
    health: boolean
}

let bonding: sk & SK = {
    name:"subhan",
    age: 20,
    exp: true,
    nickname: "SK",
    day: "sunday",
    health: true
}
console.log(bonding);


/////////////////////////// INTERFACE  ////////////////////


interface ak  {
    name: string,
    age: number,
    exp: boolean
}

interface AK  {
    nickname: string,
    day: string,
    health: boolean
}

let bondings: ak | AK = {
    name:"ASAD",
    age: 28,
    exp: true,
    nickname: "AK",
    day: "sunday",
    health: true
}
console.log(bondings);


//////////////////// Difference   =  and |  /////////////////