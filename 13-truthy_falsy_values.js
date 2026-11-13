// TRUTHY and FALSY VALUES


// When JS was made, the creators knew that you can write anything in place of boolean values, like:

// true = boolean having value 1
// false = boolean having value 0

// In place of
if(true){} // OR 
if(false){}

// You can write:
if(612){}
if(-1){}

// Or anything else.
// So they gave every input a true or a false value (aka Truthy and Falsy values).

// false Values -> 0 false "" null undefined NaN document.all - (inside that bracket of if-else)
// Everything else -> true Value.


// To check if a value is true or false in console add a '!!' before it and hit enter.

// For example,

!!0 // gives false

!!NaN // gives false

!!12 // gives true

!!null // gives false

!!undefined // gives false

!!document.all // gives false