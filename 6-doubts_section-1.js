// DOUBTS IN SECTION 1


// DOUBT 1:


let a = 10; // block scope // global
    {
        let a = 20; // block scope; no `let` — this is just an assignment, not a new variable.
        console. log("Inside:", a);
    }
console. log("Outside:", a);
// Writing let a again in the block is not redeclaration, that is why it does not give errors. Redeclaration errors only happen when you declare the same variable name twice in the same scope. Here, the two a values live in different scopes, so JS treats them as two completely separate variables that seem to just share their names.

// In this, there can be three conditions:

// 1. let 1.0 is there. but let 2.0 is not there,
// 2. let 1.0 is not there. but let 2.0 is there, and
// 3. Both are not there.
// 4.
    let a = 10; // DECLARATION: creates the variable `a` in the outer scope, sets it to 10
        {
            a = 20; // ASSIGNMENT ONLY: no `let`, so this is NOT creating a new variable
            console. log("Inside:", a);
        }
    console. log("Outside:", a);
    // This returns 20 in both a values, because a = 20 is the exact same variable being modified, not a new one being created.


// CASE 1: In this case, both a will have value 10. Because let is not defined inside the block, so JS finds the outer scope for the value of a. Outer values can be freely used inside blocks.

// CASE 2: In this case, the Inside value will be printed but the outside value gives a not defined error.

// CASE 3: Both will give not defined error.


// **********


// DOUBT 2:

// You cannot reassign a value in const, but you can for sure update the property values or something.

const person = { name: "GAP" };
person.name = "Senciser"; // allowed
person = {}; // not allowed

// If you want to not change the object property values, you can use the property - "object.freeze". #googleit