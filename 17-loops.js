// LOOPS

// Seems like computers were made for loops only.
// Everything starting from whatsapp chats to youtube video stackig is because of loops.

// Repeating things means a loop.

// for while do-while forin forof foreach
// for while and foreach majority scenarios - for is the father

// 1 1 1 1 1 1 1 1
// 1 2 3 4 5 6 7 8
// Both have repetitions.

// Scenario 1 -> kaha se jaana hai, kaha tak jaana hai, kaise jaana hai
// for is used

// Scenario 2 -> kaha se jaana hai, kaha rukna hai (but kab hoga pata nahi), kaise jaana hai
// while is used

// 1. for loop

for (start; end; change){
    // code
}

// print 1 - 100
for (let i = 1; i < 101; i++){
    console.log(i); // not "i"
} // i, j, k, count, etc. is industry standards


// 2. while loop

start;
while(end){ // no start here
    // code
    change;
}

// stop when i = 32

let i = 1;
while (i<32){
    console.log(i);
    i++;
}

// 3. do-while -> runs 1 time atleast, no matter the condition.
t
// Example 1
let j = 1;
do{
    console.log(j);
    j++;
}
while(j < 20)

// Example 2
let k = 12;
do{
    console.log(k);
    k++;
}
while(k < 2) // prints 12 even if the condition is not satisfied.


// break and continue:

// break -> used to stop any loop.

for(let i = 1; i <= 200; i++){
    console.log(i);
    if (i === 69){
        break;
    }
} // breaks at 69 :)

// continue -> 2used to skip a step on a loop.

for(let i = 1; i < 50; i++){
    if (i === 42){
        continue;
    }
    console.log(i);
} // prints everything except 42, till 49.






