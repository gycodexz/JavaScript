// DOUBTS IN SECTION 2


// DOUBT 1:

// Why does NaN have the data type 'number'?
// -> Because JS treats it as a FAILED NUMBER OPERATION.
// Is a number operation only, but is a failed operation.

// For example, if we do 
// "GAP" * 2
// This is not a possible operation (string multiplied by a number), so the output will be 'NaN'.

typeof NaN === 'number'; // gives true


// DOUBT 2:

// undefined V/S null

// undefined is an automatically provided value by JS to any variable after declaration.
// null is a data type given to a variable by a human to manually prove that this value is not assigned right now, but can be assigned later.

