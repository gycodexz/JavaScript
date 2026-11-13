// DIFFERENT TYPES AND USES OF FUNCTIONS IN JAVASCRIPT

// 1. FIRST CLASS FUNCTIONS - (Conceptual)

// JS has this facility of first class functions.
// Functions can be treated and used as values.

function run(value){
    value("abc123");
    console.log(value);
}

run(function(random_val){ // this function is not given a name.
    console.log(`Huehue ${random_val}`);
});

// 2. HIGHER ORDER FUNCTIONS

// A function that RETURNS a function, or ACCEPTS a function in its parameter.

// ACCEPTS a Function:

function run1(value){

}

run1(function(){
    console.log("Huwhuw");
});

// RETURNS a Function:

function run2(){
    return function(){
        console.log(5);
    }
}

run2()(); // second bracket to run the inside function.


// PURE VS IMPURE FUNCTIONS

// If a function does not change any outer value, it is a pure function, and the function which changes outer values (side effects) is called impure function.

// Pure:
function print(){
    console.log("Huehue");
}

// Impure:

let a = 6;

function increase(){
    return a++;
}

let value = increase();
console.log(value); // Increases value of a from 6 to 7 after printing.


// CLOSURES and LEXICAL SCOPING

// CLOSURES - Most asked in interviews
// A function, that returns another function, and the function that was returned uses a variable of its parent function.

function hue(){
    let a = 612;
    return function(){
        console.log(a);
    }
} 
// This is called a closure.


// LEXICAL SCOPING - Scope of physical position of variables.

function abcd(){
    let a = 1; // a can't be used outside abcd (only line 79 to line 88).
    function defg(){
        let b = 2; // b can't be used outside defg.
        function ghij(){
            let c = 3; // c can't be used outside ghij.

        }    
    }
}


// IIFEs - immediately Invoked Function Expressions

// Used to make private variables, only can be used inside a function. We have to apply getters and setters to access them.
(function(){
    console.log("Huehue");
})(); // called/ran immediately - IIFE



// Hoisting differences between function declaration and expression

// Hoisting - You can use a variable before calling it.


// Function statements (function declaration)
jklm(); // Will run before its creation, hoistig possible in function declaration.

function jklm(){
    console.log("Huehue");
}


// Function expression
jlkm(); // Won't run before creation, hoisting not possible in function expression.

let jlkm = function(){
    console.log("Dayum");
}




