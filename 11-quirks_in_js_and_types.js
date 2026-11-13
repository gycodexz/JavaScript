// typeof quirks (For eg. typeof null === 'object')


// typeof is a keyword in JavaScript
// These quirks can be avoided using TypeScript

// There are many typeof quirks or weird problems in JS, like:

typeof 12;
// gives 'number'

typeof "GAP";
// gives 'string'

typeof null;
// gives 'object' --- QUIRK

typeof NaN; // Not a Number
// gives 'number'  --- QUIRK

NaN === NaN;
// gives false  --- QUIRK

0.1 + 0.2;
// gives 0.30000000000004  --- QUIRK

[] + []
// gives ''  --- QUIRK

1 + "1"
// gives '11'  --- QUIRK

1 == "1"
// gives true

1 === "1"
// gives false  --- QUIRK


// There are many issues like these in JS.