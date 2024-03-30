"use strict";
// Basic type -- string , variable can't be assigned a different datatype
// else compiler will throw a TypeError
const welcomeStr = "Hello, Typescript!";
console.log(welcomeStr);
// Problem - Creating a function to greet Hello
// function greetHello(name:string) -- output - Hello, {name}!
function greetHello(name) {
    try {
        return console.log(`Hello, ${name}!`);
    }
    catch (error) {
        return console.log(error);
    }
}
greetHello('World');
// VSC editor itself is howing the error for  --- greetHello(8913);
