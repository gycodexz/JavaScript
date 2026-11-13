// DATA TYPES

// Data type means the Type of data.

// Data can be anything -> 12 GAP true [] {} () null undefined NaN Symbol bigInt


// Two main data types in JS:

// (a) Primitives -> Aisi saari values jinko copy karne par terko ek real copy mil jayegi / You get a real copy when you copy them.
// string, number, boolean, null, undefined, symbol, bigint and NaN

// For example,

let a = 612;
let b = a;

b = b + 2; // Turns b into 614, but a remains unchanged.

// Here, we copied a into b, but a and b are different, operations work differently on both, operations performed on one don't change anything on the other.


// (b) Refrences: -> Inko copy karne par real copy nahi milegi, but terko parent ka reference milega / You won't get a real copy, but the reference of the parent, when you copy them.
// arrays, objects, functions

// For example,

let a = [1, 2, 3]; // An array
let b = a;

// Turns b into the value of a itself. Any changes made in b will reflect in a also.
// We can copy using spread operator. Will learn afterwards.