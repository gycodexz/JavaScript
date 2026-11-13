// CONTROL FLOW STATEMENTS


// 1. if, else and else-if (if else loop)

// -> These decide which part of your code will actually run, depending on the conditions put inside the parenthesis.
// -> You can write anything that converts to true or false inside the parenthesis.

// You can add the condition here (add condn or something that gives true or false)
            "↓"
if(true){
    // write the execution code here
} 
else{
    // write the execution code here
}

// now, else-if is used to put some more conditions to the code


if(loggedin){
    // write the execution code here
}
else if(loggedin && isAdmin){ // another condition
    // write the execution code here
}
else{
    // write the execution code here
}

// you can make n number of else-if blocks.


// switch case
let x = 2;
switch(x){
    case 1:
        console.log("A");
        break;
    case 2:
        console.log("B");
        break;
    case 3:
        console.log("C");
        break;
    case 4:
        console.log("D")
        break;
}

// It runs the code of the value which is written inside the switch() bracket. In the above example, it is 2, so case 2 code will run.
// cases don't come with braces, they have colons (:) to form blocks.
// The 'break;' is important so that further cases don't run after one case is satisfied. In the above example, if we do not apply 'break;' and case 2 is satisfied, so case 3 and case 4 will also run themselves, and we do not want that.


// early return pattern

function getVal(val){
    if (val < 25) return "A";
    else if (val < 50) return "B";
    else if (val < 75) return "C";
    else if (val < 100) return "D";
    else return "Invalid Value !"
    // If you have return at the end of each block, you can remove 'else if' and directly write 'if'. Because return directly stops the block itself.
}

console.log(getVal(90)); // gives D

// Example 1: Grade function

function getGrade(score){
    if (score <= 100 && score >= 90) return "A+";
    else if (score <= 89 && score >= 80) return "A";
    else if (score <= 79 && score >= 70) return "B";
    else if (score <= 69 && score >= 60) return "C";
    else if (score <= 59 && score >= 33) return "D";
    else if (score <= 32 && score >= 0) return "E";
    else return "Invalid Marks !";
}

console.log(getGrade(-90)); // gives Invalid Marks !

// Example 2: Rock Paper Scissors logic

function ropasc(person1, person2){
    if (person1 == person2) return "Match Draw!"
    if (person1 == rock && person2 == scissors) return "Person1 wins!"
    if (person1 == scissors && person2 == paper) return "Person1 wins!"
    if (person1 == paper && person2 == rock) return "Person1 wins!"
    else return "Person2 wins!"
}