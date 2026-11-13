// let a = 10;
//     {
//         let a = 20;
//         console. log("Inside:", a);
//     }
// console. log("Outside:", a);

// let grade = score >= 90 ? "A" : score >= 75 ? "B" : score >= 60 ? "C" : "Fail";

// function getVal(val){
//     if (val < 25) return "A";
//     else if (val < 50) return "B";
//     else if (val < 75) return "C";
//     else if (val < 100) return "D";
//     else return "Invalid Score!"
// }

// console.log(getVal(56));

// function ropasc(person1, person2){
//     if (person1 === person2) return "Match Draw!"
//     if (person1 === "rock" && person2 === "scissors") return "Person1 wins!"
//     if (person1 === "scissors" && person2 === "paper") return "Person1 wins!"
//     if (person1 === "paper" && person2 === "rock") return "Person1 wins!"
//     else return "Person2 wins!"
// }

// console.log(ropasc("rock", "scissors"))

// for (let i = 1; i <= 10; i++){
//     // console.log(5*i);
//     console.log("5 * " + i + " = " + (5*i));
// }

// let sum = 0;
// for(let i = 1; i <= 100; i++){
//     sum = sum + i;
// }

// console.log(sum);

// for(let i = 1; i <= 50; i++){
//     if(i % 3 === 0){
//         console.log(i);
//     }
// }

// let value = prompt("Enter a number: ")

// for(let i = 1; i <= value; i++){
//     if (i % 2 === 0){
//         console.log(`The number ${i} is even.`);
//     }
//     else{
//         console.log(`The number ${i} is odd.`);
//     }
// }

// Print all no btn 1 to 100 div by both 3 and 5

// let count = 0;
// for(let i = 1; i <= 100; i++){
//     if(i % 3 === 0 && i % 5 === 0){
//         console.log(i);
//         count = count + 1;
//     }
// }

// console.log(`The no. of digits divisible by both 3 and 5 between 1 to 100 are ${count}.`);

// for(let i = 1; i <= 100; i++){
//     if (i % 7 === 0){
//         break;
//     }
//     console.log(i);
// }

// for(let i = 1; i <= 100; i++){
//     if(i % 3 === 0){
//         continue;
//     }
//     console.log(i);
// }

// WRONG CODE :

// let count = 0;
// for(let i = 1; i <= 100; i++){
//     if (i % 2 !== 0){
//         if(count = 5){
//             break;
//         }
//         console.log(i);
//         count++;
//     }
// }

// let count = 1;
// while(count <= 5){
//     for(let i = 1; i <= 100; i++){
//         if (i % 2 !== 0){
//             console.log(i);
//         }
//     }
//     count++;
// }

// let count = 0;
// for(let i = 1; i <= 100; i++){
//     if(i % 2 !== 0){
//         count++;
//         console.log(i);
//     }
//     if (count = 5) break;
// }

// function dance(animal){ // giving variable name "animal" to the user input.
//     console.log(`${animal} is dancing.`) // using "animal" as a varibale for dynamic outputs.
// }

// // calling
// dance("Deer"); // gives "Deer is dancing."
// dance("Horse"); // gives "Horse is dancing."
// dance("Peacock"); // gives "Peacock is dancing."
// dance("Dancer"); // gives "Dancer is dancing."

// function add(...huehue){
//     console.log(huehue);
// }

// add(1, 2, 3, 4, 5, 6, 7, 8, 9, 0);

// let fnc = (a, b, ...huehue)=>{
//     console.log(a, b, ...huehue);
// }

// fnc(2, 3, 4, 6, 7, 7, 8, 4, 8);

// function fnc(a, b, ...huehue){
//     console.log(a, b, huehue);
// }

// fnc(2, 3, 4, 6, 7, 7, 8, 4, 8);

// function adb(y){
//     return 12 + y;
// }

// let gx = adb(50); 
// console.log(gx);

// function run(value){
//     value(534);
// }

// run(function(random_val){ // this function can't be given a name.
//     console.log(`Huehue ${random_val}`);
// });

// function run(value){
//     value();
//     console.log(value);
// }

// run(function(){ // this function can't be given a name.
//     console.log("Huehue");
// });


// let a = 6;

// function increase(){
//     a++;
//     return a++;
// }

// let value = increase();

// console.log(value);