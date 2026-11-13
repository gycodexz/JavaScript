// SCOPES - GLOBAL, BLOCK and FUNCTIONAL


// 1. Global scope: A global scope VDK can be used in the whole code.
// 2. Block scope: A block scope VDK can be used only inside the nearest pair of curly braces - {}.
// 3. Functional scope: A functional scope VDK can be used inside the whole function, ignoring any if-else statement blocks inside the function.

// var does not respect blocks, let does.

// var is a functional scope VDK.
// let and const are a block scope VDKs.


function(){
    if(true){
        var w = 612;
    }
}
// var can be used inside the whole function.


function(){
    if(true){
        let w = 612;
        const x = 612;
    }
}
// let and const can only be used inside the if-else block, not the whole function.