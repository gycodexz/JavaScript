// HOISTING IMPACT PER TYPE (in var, let and const)

// Hoisting: When we create a variable in JS, it breaks into 2 parts - DECLARATION an INITIALIZATION. DECLARATION goes upward on the first line, and INITIALIZATION goes downward.

// For example,

var a = 612;

// Breaks into:

var a = undefined; // and 
a = 12;

// This proves why var does not have TDZ.


// Because the code:

console.log(a)

var a = 612;

// Works as:

var a = undefined;

console.log(a)

a = 12;

// in the backend.

// But hoisting is very controversial. Some think it exists in let and const too, some don't.

// I (the Author) personally believe that let and const have hoisting, because the error says "can't be accessed before initialization", and not declaration. That should mean it has been declared already, but initialization makes the difference.

// var -> hoist -> undefined
// let -> hoist -> no value - X
// const -> hoist -> no value - X