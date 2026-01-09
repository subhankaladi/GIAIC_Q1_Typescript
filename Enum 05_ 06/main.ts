
// enum Color1 {Red = 1, Green, Blue};
// var colorName: string = Color1[2];
// console.log(colorName);


// enum Color {Red, Green, Blue};//starts with 0
// var c: Color = Color.Green;
// console.log(c);


// enum Color2 {Red = 1, Green = 2, Blue = 4};//can assign values to all
// var colorIndex = Color2["Blue"];
// console.log(colorIndex);


// const enum Color3 {Red, Green, Blue};//starts with 0
// var ca: Color = Color.Green;
// console.log(ca);


const enum Color4 {Red = 1, Green, Blue};
var colorNamee= Color4["Blue"]; //Not allowed with const enums
console.log(colorNamee);


const enum Color6 {Red = 1, Green = 2, Blue = 4};//can assign values to all
var colorIndex2 = Color6["Blue"];
console.log(colorIndex2);






