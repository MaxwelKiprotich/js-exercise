// ===============================
// Exercise 1: Variable Declaration
// ===============================

// TODO: Declare a variable called name and assign your name to it
let name = "Alice";

// TODO: Declare a variable called age and assign your age to it
let age = 25;

// TODO: Log a sentence that uses both variables
console.log("My name is " + name + " and I am " + age + " years old.");


// ===============================
// Exercise 2: Data Types
// ===============================

// TODO: Declare one variable of each primitive data type
let isStudent = true;              // Boolean
let height = 170.5;                // Number
let firstName = "Alice";          // String
let nothingHere = null;           // Null
let notAssigned;                  // Undefined
let uniqueId = Symbol("id");      // Symbol (advanced, optional)

// Log the types of each variable
console.log("isStudent is a", typeof isStudent);
console.log("height is a", typeof height);
console.log("firstName is a", typeof firstName);
console.log("nothingHere is a", typeof nothingHere);  // returns "object" (quirk in JS)
console.log("notAssigned is a", typeof notAssigned);
console.log("uniqueId is a", typeof uniqueId);
