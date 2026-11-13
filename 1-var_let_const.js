// VARIABLES, DECLARATION and INITIALIZATION


// Variable Declaration Keywords (VDKs): var, let and const

// Used to create containers in JS, and store data in those containers till the end of the program.
// var is a part of ES5.
// let and const are parts of ES6.


// a is a variable

a = 612; // Bug, a bad way to create variables in JS, not appreciated, never use this

var a;
var a = 612;

let a;
let a = 612;

const a; // Not allowed, will return error
const a = 612;

// You can use any of these.


var a; // DECLARATION
var a = 612; // DECLARATION AND INITIALIZATION (Giving the first value to a variable)
// Same can be done with *let*


// var has some problems:

// 1. Window me add hota hai
// 2. Function scoped hota hai
        // (You will understand these both later)
// 3. Aap same name se firse declare kr sakte ho and error nahi aayega
var a = 612;
var a = 13; // JS won't give errors

let a = 612;
let a = 613; // JS will give errors, good thing, always use let


// If you want to fix some value and never change it, we use const.
const a = "Lab"; // You can never change a to anything else.







