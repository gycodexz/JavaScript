// REASSIGNMENT and REDECLARATION

var a = 612; // Declared and Initialized 
a = 613; // Ressigned/Updated, ALLOWED IN var

var a = 614; // Redeclared, ALLOWED IN var (Bug in ES5)


let a = 612; // Initialized and Declared
a = 613; // Ressigned, ALLOWED IN let

let a = 614; // Redeclared, NOT ALLOWED IN let, will give error