// Data Types
// Kind of variables in programming languages

// Two kinds of data types
// 1. Primitive data types ( String, Number, Boolean, Undefined, Null, Symbol, BigInt)
// 2. Non-primitive data types (Reference data types)

// String - Sequence of characters eg. "YCP", 'YCP', `YCP`
// Number - Integers and floating point numbers eg. 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,
// Boolean - True or False eg. true, false
// Undefined - A variable that has not been assigned a value
// Null - A variable that has been assigned a value of null
// Symbol - A unique identifier **
// BigInt - A number that is too big to be represented by a normal number eg. 12345678901234567890123456789012345678901234567

// let name; // undefined

// let name = null;

// console.log(name);

// console.log(typeof name);


// Reference data types
// Object - A collection of key-value pairs eg. {name: 'YCP', age: 20}
// Array - A collection of values eg. [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 1
// Function - A block of code that can be executed eg. function() { console.log('YCP') }
// Date - A date object eg. new Date()
// Classes ** (typescript))

// Example of datatypes manupulation

// let name = 'YCP';
// let age = 25;
// let religion = 'Christian';
// let isMarried = false
// let accoutBalance = 1000000000000000000000000000000000000000000000000;

// const profile = `My name is ${name}, I am ${age} years old, I am a ${religion} and I have in my account ${accoutBalance}`; // String interpolation - Template literals (String wins all the time)

// // console.log(profile)


// console.log('name: ' + typeof name)
// console.log('age: ' +typeof age)
// console.log('religion: '+ typeof religion)
// console.log('accountBalance: ' + typeof accoutBalance)
// console.log('isMarried: ' + typeof isMarried)
// console.log('profile: '+ typeof profile)

// Definition:
// Concatenation is the process of appending one string to the end of another string with the use of the + operator.
// String interpolation is the process of embedding expressions inside string literals with the use of the ${} syntax.
// concatenation can be done across different data types but string interpolation can only be done across string data types.

// Example of concatenation
let firstName = 'Cyprian'; // initialization & declaration
let lastName = 'Omenuko';

let age = 20;

let fullName = firstName + ' ' + lastName;

let detail = 'firstName: ' + firstName + ' lastname: ' + lastName + ' age: ' + age

console.log(detail);



// Assignment 
// 1. Create your profile using the variables above and print it to the console
// 2. Use the typeof operator to check the data type of each variable
// 3. Use the + operator to concatenate your profile name


// Example on cancatenation:

