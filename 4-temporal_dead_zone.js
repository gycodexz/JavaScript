// TEMPORAL DEAD ZONE

// TDZ is the whole area in which JS knows that the value of the variable exists, but it still cannot use (provide you) that value.

// TDZ exists in let and const, but not in var. In var, the variable is hoisted.
// let and const will give an error that the variable can't be accessed before initialization - Reference Error, but var will simply return undefined.


console.log(a);


let a = 612; // Error
var a = 612; // Undefined

// Here, the space of lines 1 to 11 is the TDZ for let a = 612;.