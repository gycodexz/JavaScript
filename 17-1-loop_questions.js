// for loop and while loop practice questions


// Print 1 to 10

// 1. for
for(let i = 1; i < 11; i++){
    console.log(i);
}

// 2. while
let i = 1;
while(i <= 10){
    console.log(i);
    i++;
}


// Print 10 to 1

// 1. for
for(let i = 10; i >= 1; i--){
    console.log(i);
}

// 2. while
let i = 10;
while(i > 1){
    console.log(i);
    i--;
}


// Print even nos from 1 to 20

// 1. for
for(let i = 1; i <= 20; i++){
    if(i % 2 === 0){
        console.log(i);
    }
}

// 2. while
let i = 1;
while(i <= 20){
    if(i % 2 === 0){
        console.log(i);
    }
}


// Print odd nos from 1 to 15

// 1. for
for(let i = 1; i <= 15; i++){
    if(i % 2 !== 0){
        console.log(i);
    }
} // Better choice (i % 2 !== 0), works in case of negative numbers also
// OR
for(let i = 1; i <= 15; i++){
    if (i % 2 === 1){
        console.log(i);
    }
}

// 2. while
let j = 1;
while(j <= 15){
    if(j % 2 !== 0){
        console.log(j);
    }
    j++;
}
// OR
let j = 1;
while(j <= 15){
    if(j % 2 === 1){
        console.log(j);
    }
    j++;
}


// Print the multiplication table of 5

for (let i = 1; i <= 10; i++){
    // console.log(5*i);
    // console.log(`5 * ${i} = ${5*i}`)
    console.log("5 * " + i + " = " + (5*i));
    // It is best practice to wrap math operations like (5 * i) in parentheses so JavaScript calculates the multiplication before adding it to the string.

}


// Sum of numbers from 1 to 100

let sum = 0;
for(let i = 1; i <= 100; i++){
    // If you write let sum = 0; inside, it turns to 0 again and again each time the loop runs.
    sum = sum + i;
}

console.log(sum);

// No from 1 to 50 divisible by 3

for(let i = 1; i <= 50; i++){
    if(i % 3 === 0){
        console.log(i);
    }
}


// PROMPT - Take an input from user and print if all the numbers from 1 to that number are odd or even.

let value = prompt("Enter a number: ");

for(i = 1; i <= value; i++){
    if(i % 2 === 0){
        console.log(`The number ${i} is even.`)
    }
    else{
        console.log(`The number ${i} is odd.`)
    }
}

// Count how many numbers are divisible by both 3 and 5 between 1 to 100

let count = 0;
for(let i = 1; i <= 100; i++){
    if(i % 3 === 0 && i % 5 === 0){
        // console.log(i);
        count = count + 1;
    }
}

console.log(count);

// break and continue questions :

// 1. Stop at first multiple of 7 from 1 to 100

for(let i = 1; i <= 100; i++){
    if (i % 7 === 0){
        break;
    }
    console.log(i);
}

// 2. Skip multiples of 3 from 1 to 100

for(let i = 1; i <= 100; i++){
    if(i % 3 === 0){
        continue;
    }
    console.log(i);
}

// 3. Loop from 1 to 100 that prints 5 odd numbers and then stops the loop

let count = 0;
for(let i = 1; i <= 100; i++){
    if (i % 2 !== 0){
        count++;
        console.log(i);
    }
    if (count === 5) break;
}








