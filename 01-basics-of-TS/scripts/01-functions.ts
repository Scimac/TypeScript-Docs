//Assigning types to parameters and return values of functions

// Problem - sum of two integers
// addNUm( a : number, b : number) : number --- output console.log(a+b)

function addNUm(a:number, b:number):number {
    // Functions with type declaration other than 'undefined', 'void', nor 'any' must return a value.

    // return console.log(a+b);   ---> This returns void
    return a+b;
}

console.log(addNUm(23,50));

// Problem - Check if Legal
// function isLegal(age: number) --- output true/false

//Here the output is "inferred" by typescript to boolean - function isLegal(age: number): boolean

function isLegal(age: number) {
    return age >= 18;
}

console.log(isLegal(22));

// Problem - asynchronicity - take funbction as a input and return output after five seconds
// check what is the type set by TS 

function asynchronicity(fn: () => void) {
    setTimeout(fn, 5000);
}

// asynchronicity(isLegal(22)) -- won't work beacause the return type for the isLegal function is inferred as boolean by TS
asynchronicity((function() {
    console.log("hi there");
}));