// FUNCTIONS - One of the most modular topics.

// USE Cases:
// Functions are used so that the code runs when we press the button to let it run, and not directly.
// Used to reduce redundancy of codes.

console.log("Huehue");
console.log("Huehue");
console.log("Huehue");
console.log("Huehue");
console.log("Huehue");
console.log("Huehue");
// We do not want this to directly run.

// We made a function, named huehue, and wrote our code inside it:
function huehue() {
    console.log("Huehue");
    console.log("Huehue");
    console.log("Huehue");
    console.log("Huehue");
    console.log("Huehue");
    console.log("Huehue");
}
// Numbers, special characters (except underscores) and keywords are not allowed in names of functions.

// It runs when we call it, like this:
huehue();
huehue();

// Less lines of code, same code reusable, again and again.


// Syntax:
function func_name(){
    // code to be executed
}

func_name(); // calling a function


// There are more ways to create a function in JS.

// 1. Storing it in a variable:

let func = function() { // no need of function name here, because name(variable) = name(function).
    // code to be executed
} 
// the function was stored in the variable func.
// Allowed in JS only.
func(); // called

// function declaration - to declare a function
function func(){
    // code
}

// function statement - the created function, function name and function code altogether with all the brackets and things is called the a function statement.

// function expression - the variable saving method
let func = function(){
    // code
}

// Arrow (or Fat Arrow) function - 
// Saved in a variable always.
let func = ()=>{
    // code
}

func(); // calling

// got its name from the visual appearance of its syntax delimiter "=>", which resembles a "fat" arrow.
            // (A delimiter is a specific character, symbol, or group of symbols used to show where a piece of data, text, or code begins and ends.)


// If you want to take some input and do something with it and print the value accordingly, i.e. print dynamic values as the output of a function, you can do that by taking input in the paranthesis "()".

// Functions with parameters and arguments:

function dance(animal){ // giving variable name "animal" to the user input.
    console.log(`${animal} is dancing.`) // using "animal" as a varibale for dynamic outputs.
}

// calling
dance("Deer"); // gives "Deer is dancing."
dance("Horse"); // gives "Horse is dancing."
dance("Peacock"); // gives "Peacock is dancing."
dance("Dancer"); // gives "Dancer is dancing."

// Write inputs i the correct data type, for example here, string (in double quotes).

// Addition function:
function add(numa, numb){
    console.log(numa + numb);
}

add(5, 6);
// num a & numb are parameters; 5 & 6 are arguments.


// undefined and NaN as output in a function -

function display2nos(n1, n2){
    console.log(n1, n2);
}

display2nos();

// This will give "undefined undefined" as output because no arguments have been passed while calling the function.

function display2nos2(n1, n2){
    console.log(n1, n2);
}

display2nos2(1); // will display '1 undefined' as the output.


function add(n1, n2){
    console.log(n1 + n2);
}
// This will give "NaN" as the output since the operation cannot be performed.
// undefined + undefined = not possible => NaN


// Default, Rest and Spread parameters -

// 1. Default - We can give default values in advance to a function, so that in case if no arguments are provided, those values can be used and the system would not crash.
function add(v1 = 1, v2 = 0){
    console.log(v1 + v2);
}

add(); // will give 1 + 0 = 0
// if you provide a values as arguments, that will be given more priority than the predefined value.


// 2. Rest - If there are many inputs in a function, we need to form those many parameters. To avoid this confusion, we use the rest or spread parameter "...{anything}" inside the input.
// It stores the inputs as an array.
function add(...val){
    console.log(...val);
}
add(1, 2, 3, 4, 5, 6, 7, 8, 9, 0);

// you can write anything in place of val, like:
function add(...huehue){
    console.log(...huehue);
}
add(1, 2, 3, 4, 5, 6, 7, 8, 9, 0);

// We can also keep some variables, and then write "...val" to store the remaining inputs.
function add(v1, v2, ...val){
    console.log(v1, v2, ...val);
}

// If you write '...' of rest parameter in console.log, it will store the values as normal, but if you directly write the variable name, it will store the values in the variable as array.

function add(n1, n2, ...huehue){
    console.log(n1, n2, huehue); // will store as an array.
}

add(2, 3, 4, 5, 6, 76, 57);

// 3. Spread - 
// If we use '...' in function parameters, it is called rest, and if it is used in arrays and objects, it is called SPREAD.











