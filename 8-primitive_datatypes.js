// PRIMITIVE DATA TYPES

// '' = Single Quotes
// "" = Double Quotes
// `` = Backticks

// string, number, boolean, null, undefined, symbol, bigint and NaN


// 1. String -> Data wrapped up in single or double quotes, or backticks.
let name = "GAP"

// 2. Number -> 612 or 612.3 - Both are numbers
let num1 = 612
let num2 = 612.3

// 3. Boolean -> true and false
let a = true;
let b = false;

// 4. null -> null is the data type given by you (jaan boojh kar/forcefully) when you do not know the value now, but will know someday, and will add it there.
let score = null;

// 5. undefined -> you declared a value but did not assign a value, so the value assigned by default is undefined.
let c; 
// and let c = undefined; 
// Both are same.

// 6. Symbol -> Creates a unique immutable value

// Consider future mein hum koi libraries use karenge. Kabhi kabhi unn libraries mein bht baar kuch fields hoti hain jinse similar hum bhi bana dete hain aur galti se humari banai hui fields us library ki original fields ko change kar deti hain. We do not want this to happen, and that is why we use the symbol data type.

// For example,

let u1 = Symbol("uid");
let u2 = Symbol("uid");

// if you check u1 === u2, it will return false. They are of the same value, but still unique.

let obj = {
    uid: 1,
    name: "GAP",
    age: 25,
    email: "test@test.com",
};

let uid1 = Symbol("uid");
obj[uid1] = "001";

// The uid inside Symbol("") is just a reference name for debugging so that the developer does not get confused between various symbols, or else there is no need for that thing there,

// Difference between obj. and obj[]

// obj. (dot) has no concept of "variables" at all. JS treats the word after the dot as a hardcoded string (full stop). It never looks around your code for a variable with that name. So obj.uid literally means "look up the property whose key is the exact string "uid".

// obj [] tells JS "don't take this literally, evaluate it as an expression and then use the result as the key." Since uid1 here is a variable (let uid1 = Symbol("uid")), JS resolves it to the actual Symbol value it holds, and that Symbol (not the text "uid1") is used as the lookup key.


// 7. Biginit -> The number data type has a limit for storing numbers. It can store numbers properly only upto 9007199254740991. If you wanna store after this, you need to add an 'n' in the last of the number and it becomes biginit.

// To check the highest number, we write in the console:
// let a = Number.MAX_SAFE_INTEGER
// a

// For example,

let d = 9007199254740995n;
d + 3n;

// Operations will also be carried out using biginit numbers, for example, to add 3:
// d + 3n will be carried out.