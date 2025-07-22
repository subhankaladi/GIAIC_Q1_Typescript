"use strict";
var sports;
(function (sports) {
    sports[sports["football"] = 0] = "football";
    sports[sports["cricket"] = 1] = "cricket";
    sports[sports["hockey"] = 2] = "hockey";
})(sports || (sports = {}));
let sport = sports[2];
console.log(sport);
var sports2;
(function (sports2) {
    sports2[sports2["football"] = 0] = "football";
    sports2[sports2["cricket"] = 1] = "cricket";
    sports2[sports2["hockey"] = 2] = "hockey";
})(sports2 || (sports2 = {}));
let sport2 = sports2.cricket;
console.log(sport2);
var sports3;
(function (sports3) {
    sports3[sports3["football"] = 3] = "football";
    sports3[sports3["cricket"] = 10] = "cricket";
    sports3[sports3["hockey"] = 11] = "hockey";
})(sports3 || (sports3 = {}));
let sport3 = sports3[11];
console.log(sport3);
