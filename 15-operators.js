// OPERATORS


// There are many types of operators in JS:


// 1. Arithemetic -> (+ - * / % **)

// + 
// Does ADDITION (for numbers) and CONCATENATION (for strings).
1 + 2; // gives 3
"G" + "AP" // gives GAP

// - 
// Performs SUBTRACTION.
6 - 4; // gives 2
"6" - 4 // also gives 2

// * 
// Performs MULTIPLICATION.
12*2; // gives 24

// / 
// Performs DIVISION.
12/2; // gives 6

// % 
// Gives the REMAINDER OF DIVISION, called MODULUS in programming and PERCENTAGE in Maths
12 % 5; // gives 2

// ** 
// Called EXPONENTIATION OPERATOR, gives the exponent or power
2**4; // gives 16 (2*2*2*2)

// ********** //

// 2. Comparison -> (== === != !== < > <= >=)

// == (not strict/loose comparison)
// Checks only the value on both sides, not the data type
12 == "12"; // gives true
    // DOUBT: 
    // let name = "GAP"
    // If we compare name = "name", it will be false.

// === (strict comparison)
// Checks the value and the data type on both sides
12 === "12"; // gives false

// != (not strict/loose comparison)
// Checks only the value on both sides, not the data type
12 != "12"; // gives false

// !== (strict comparison)
// Checks the value and the data type on both sides
12 !== "12"; // gives true

// >
// Checks Greater than.
12 > 13; // gives false

// <
// Checks Lesser than.
12 < 13; // gives true

// >=
// Checks Greater than or equal to.
12 >= 13; // gives false

// <=
// Checks Lesser than or equal to.
12 <= 13; // gives true

// ********** //

// 3. Assignment  -> (= += -= *= /= %=)

// = 
// -> In JS, = means to assign a value to a variable (value daalna).
// -> In Maths, it means that something is equal to something.

// There is this main assignment operator -> =
// It has many more variations.

let a = 12;
a += 3; // add 3 to initial a, update and save in a
a -= 11; // minus 3 from a, update and save in a
a *= 2; // multiply 3 to a, update and save in a
a /= 2; // divide a by 3, update and save in a
a %= 3; // divide a by 3, update and save the remainder of this division in a

// ********** //

// 4. Logical -> (&& AND AND, || OR OR, ! NOT, !! NOT NOT)

// && (only both sides true gives true)
true && true // true
false && true // false
true && false // false
false && false // false

// Use case:
12 > 13 && 13 > 12; // gives false (false && true)


// || (one side true also gives true)
true && true // true
false && true // true
true && false // true
false && false // false

// Use case:
12 > 13 && 13 > 12; // gives true (false && true)

// ! (reverses the value)
!true; //gives false
!false; // gives true

// !! (reverses the value of reverse)
!true; //gives false, then
!!false; // again gives true

!false; // gives true, then
!!true; // again gives false

// ********** //


// 5. Unary -> (+ - ! typeof ++ --)

// Works with single values

// + converts a string that can be converted into numeber in a number.
+"5" // gives 5 (number data type)
+"GAP" // gives NaN

// - negates a positive value.
-5 // gives -5

// ! (NOT) gives the inverted type of a value.
!12 // gives false

// typeof gives the type of the entered value.
typeof 12; // gives 'number'


// ++ (INCREMENT OPERATOR)

// PREFIX INCREMENT (++a) -> First increases then prints.
let a = 12;
++a // gives 13, incresases the value before printing.

// POSTFIX INCREMENT (a++) -> First prints then increases.
let a = 12;
a++ // gives 12, increases the value of a to 13 after printing.

let a = 2;
a++ + a // gives 2 + 3 = 5

// A tricky question

let n = 5;
let result = n++ + ++n;
console.log(result); // gives 5 + 7 = 12


// -- (DECREMENT OPERATOR)

// PREFIX DECREMENT (--a) -> First decreases then prints.
let a = 12;
--a // gives 11, decresases the value before printing.

// POSTFIX DECREMENT (a--) -> First prints then decreases.
let a = 12;
a-- // gives 12, decreases the value of a to 11 after printing.

// ********** //

// 6. Ternary -> (?:)

// Works with triple values
// Will be used widely further in both frontend and backend works

// Syntax:

condition ? true : false
// write the condition ? code if condition is true : code if condition is false

// For example

12 > 13 ? console.log("true") : console.log("false") // gives false

// Nested ternary operators

let score = 25;

let grade = score >= 90 ? "A" : score >= 75 ? "B" : score >= 60 ? "C" : "Fail";
console.log(grade);

// grade is never part of the condition. It only exists on the outside, waiting to catch the final answer.

// It executes like:
// LEFT SIDE:  let grade
// RIGHT SIDE: score >= 90 ? "A" : score >= 75 ? "B" : score >= 60 ? "C" : "Fail"

// grade will catch the value once the score is matched.
// Ternary operator is working inside the assignment operator basically.

// ********** //

// IMPORTANT ***
// typeof and instanceof

// typeof
// tells us the data type of the value.
typeof 12; // gives number
typeof "GAP"; // gives string
typeof {}; // gives object
typeof function(){} // gives function

// quirks in typeof - remember
typeof null; // gives object
typeof []; // gives object
typeof NaN; // gives number


// instanceof
// means taken out (born out) of something

let a = [];
typeof a; // gives object - you cannot check using typeof here (quirk)

// if we write:
a instanceof Array; // gives true and proves a is an array - typeof can't do that.

// A in Array is capital because we are talking about classes.

let b = {};

b instanceof Object; // gives true
b instanceof Array; // gives false

// variable instanceof Datatype

let a = 12;
a instanceof Number; // gives false, even if it is true
// Because 'instanceof' works only on reference data types, not primitives. 
