// Continuation of Conditional Opertations
// We have conclude if-else statement
// Recap on if-else statement
// if(condition){ //basic syntax
  // code to be executed if condition is true
// }else {
  // code to be executed if condition is false
// } 
// condition is a boolean expression that evaluates to true or false


// balls arranged in sequential order: red, blue, yellow, green

// Definition: 
// A switch statement is a conditional statement that allows a variable to be tested for equality against a list of values.

// basic syntax for a switch statement:
// switch(expression) {
//   case value1:
    // code to be executed if expression === value1
    // break;
//   case value2:
    // code to be executed if expression === value2
    // break;
//   default:
    // code to be executed if expression does not match any case
// }
// NB: expression is a variable that is being tested for equality against a list of values


// function checkColor(color){
//   switch(color){
//     case 'red':
//       console.log('The color is red');
//       break;
//     case 'blue':
//       console.log('The color is blue');
//       break;
//     case 'yellow':
//       console.log('The color is yellow');
//       break;
//     case 'green':
//       console.log('The color is green');
//       break;
//     default:
//       console.log('The color is not red, blue, yellow or green');
//   }
// }

// checkColor('yellow');
// checkColor('blue');
// checkColor('red');
// checkColor('green');
// checkColor('black');
// In this clock of code what willl be the output of the function wearScarf('male')?
// function wearScarf(gender){
//   switch(gender){ 
//     case 'gentleman':
//     case 'boy':
//     case 'male':
//       console.log("Don't wear scarf to church as a male");
//       break;
//     case 'lady':
//     case 'girl':
//     case 'female': 
//       console.log('Wear scarf to church as a female');
//       break;
//     default:
//       console.log('Invalid gender!');
//   }
// }

// // wearScarf('male');
// // wearScarf('male');
// wearScarf('lady');
