// destructuring Arrays
const numbers: number[] = [1, 2, 3, 4, 5];
let [first, second, ...nums] = [...numbers];

console.log({first, second, nums});

//using Enums
const enum Direction {
    North,
    South,
    East=6,
    West
};

enum Users {
    "User1",
    "User2",
    "User3",
    "User4",
    "User5",
};

//bi-directional relationship
console.log(
    Direction.South, // expect the enum structure 
    Direction.West, // expect the enum structure 
    // Direction[2], // Will throw an error that can only be accessed via string literal
    Users, // expect the enum structure 
    Users.User1, // expect 0
    Users[2]  // expect User3
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