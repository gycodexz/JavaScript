// TYPE COERCION (== V/S ===)

// A concept in which one data type automatically gets converted into another.

// The sign '+' does ADDITION in MATHS, but 2 things in programming -> ADDITION and CONCATENATION.
// JS always chooses CONCATENATION over ADDITION if the input contains even 1 string as the operand.


// For example,

"6" + 1; // Not possible to add a string and a number, but JS can do that because it has Type Coercion.
// gives 61, not 7
// 6 is a string, 1 is a number.
// 1 was converted into a string while performing CONCATENATION.

// On the other hand,
"6" - 1
// gives 5
// Because the '-' sign has a single task in programming, SUBTRACTION, so JS chooses that only.

