// Use rest parameter to accept any number of scores and return the total.

function scores(...scores){
    let total = 0;
    scores.forEach(function(value){
        total = total + value;
    })
    return total;
}

console.log(scores(2, 45, 67, 34, 65));


// Solve using early return pattern

function checkAge(age){
    if (age < 18) return "Too young";
    return "Allowed"; // else not required here in early return pattern.
}


// Q.

function f(){
    return;
}

console.log(f()); // gives undefined


// Convert this impure function to a pure function
let total = 0;
function addToTotal(num){
    total += num;
}

// Pure:
let totalx = 0;

function addToTotalx(num){
    let newTotal = total;
    newTotal += num;
}

// Closures

function outer(){
    let count = 0;
    return function(){
        count++;
        console.log(count);
    }
}

let counter = outer();
counter();
counter();
