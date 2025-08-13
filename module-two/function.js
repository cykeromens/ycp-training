// Functions and Methods
// Reusable block of code that performs a specific task

// To delcare a function, we use the function keyword followed by the function name and parentheses ()

// function functionName(<args>*){
  // statements
// }

// A functionName is the name of the function which will be used to the function
// <args> is the arguments that the function will take
// * means optional 

// To call a function, we use the function name followed by parentheses ();
// If a function is not called it will not be executed

// Example:

function sayHello(){
  console.log('Hello World!');
}
// sayHello(); 

// NB: the number of times you call the function is the number of times it will be executed


function checkNumber(num){
  if(num > 0){
    console.log(`The number: ${num} is positive`);
  }else if(num < 0){
    console.log(`The number: ${num} is negative`);
  }else{
    console.log(`The number: ${num} is zero`);
  }
}

// checkNumber(10); // The number is positive
// checkNumber(-30); // The number is negative
// checkNumber(0);   // The number is zero

// checkNumber(100);

// PP
// If Chike scored 68 in Math 502, calculate his grade

// A, B, C, D, E, F
// A : 70 - 100
// B : 60 - 69
// C : 50 - 59
// D : 40 - 49
// E : 45 - 49
// F : 0 - 44

function calculateGrade(score) {
  if (score >= 70 && score <= 100) {
    console.log('A');
  } else if (score >= 60 && score <= 69) {
    console.log('B');
  } else if (score >= 50 && score <= 59) {
    console.log('C');
  } else if (score >= 40 && score <= 49) {
    console.log('D');
  } else if (score >= 45 && score <= 49) {
    console.log('E');
  } else if (score >= 0 && score <= 44) {
    console.log('F');
  } else {
    console.log('Invalid score');
  }
}

// calculateGrade(-20);
// calculateGrade(70);
// calculateGrade(35);
// calculateGrade(50);


// 2. PP
// Given a number check if the number is even or odd
// pseudo code


// Definition
// Even number is a number that is divisible by 2
// Odd number is a number that is not divisible by 2

// Psudeo
// 1. Check if the number is divisible by 2
// 2. If it is divisible by 2, it is even
// 3. If it is not divisible by 2, it is odd

function checkEvenOrOdd(num){
  if(num % 2 === 0){
    console.log(`The number: ${num} is even`);
  }else{
    console.log(`The number: ${num} is odd`);
  }
}

checkEvenOrOdd(10);
checkEvenOrOdd(13);
checkEvenOrOdd(59);


// Write a function that greets a person based on their gender and period of the day

//Pseudo code
// 1. Create a function that takes two parameters: gender and periodOfTheDay
// 2. If the gender is male and the period of the day is morning, return "Good morning sir"
// 3. If the gender is male and the period of the day is afternoon, return "Good afternoon sir"
// 4. If the gender is male and the period of the day is evening, return "Good evening sir"
// 5. If the gender is female and the period of the day is morning, return "Good morning madam"
// 6. If the gender is female and the period of the day is afternoon, return "Good afternoon madam"
// 7. If the gender is female and the period of the day is evening, return "Good evening madam"
// 8. If the gender is not male or female, return "Invalid gender"

function greet(gender, periodOfTheDay){ // function declaration with parameters
    if(gender === 'male' && periodOfTheDay === 'morning')
        return 'Good morning sir';
    else if(gender === 'male' && periodOfTheDay === 'afternoon')
        return 'Good afternoon sir';
    else if(gender === 'male' && periodOfTheDay === 'evening')
        return 'Good evening sir';
    else if(gender === 'female' && periodOfTheDay === 'morning')
         return 'Good morning madam';
    else if(gender === 'female' && periodOfTheDay === 'afternoon')
        return 'Good afternoon madam';
    else  if(gender === 'female' && periodOfTheDay === 'evening')
        return 'Good evening madam';
    else  return 'Invalid gender';
}

let greetAmale = greet('male', 'morning'); // passing a arguements to a function
let greetAFemale = greet('female', 'evening');

console.log(greetAmale);
console.log(greetAFemale)

// SOLID Principle // Clean Codes
// Single Responsibility Principle  