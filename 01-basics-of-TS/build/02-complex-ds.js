"use strict";
// destructuring Arrays
const numbers = [1, 2, 3, 4, 5];
let [first, second, ...nums] = [...numbers];
console.log({ first, second, nums });
;
var Users;
(function (Users) {
    Users[Users["User1"] = 0] = "User1";
    Users[Users["User2"] = 1] = "User2";
    Users[Users["User3"] = 2] = "User3";
    Users[Users["User4"] = 3] = "User4";
    Users[Users["User5"] = 4] = "User5";
})(Users || (Users = {}));
;
//bi-directional relationship
console.log(1 /* Direction.South */, // expect the enum structure 
7 /* Direction.West */, // expect the enum structure 
// Direction[2], // Will throw an error that can only be accessed via string literal
Users, // expect the enum structure 
Users.User1, // expect 0
Users[2] // expect User3
);
// enum struct 
// {
//     '0': 'North',
//     '1': 'South',
//     '2': 'East',
//     '3': 'West',
//     North: 0,
//     South: 1,
//     East: 2,
//     West: 3
// }
