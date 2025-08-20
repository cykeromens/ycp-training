// Array:
// Array is a collection of elements of the same type
// Array is a non-primitive data type
// Array is a reference data type
// Arrays are declared in javascript using square brackets []
// Arrays are zero indexed (means the first element is at index 0)

// 1. Creation of an array
// let fruits = []; // no fruit in the basket (creation of an empty array)
// Creating an array is a O(1) operation (constant time)

let fruits = [
  "apple",
  "banana",
  "orange",
  "mango",
  "pineapple",
  "grape",
  "watermelon",
  "strawberry",
  "blueberry",
];

// // Assesing arrays by index
// console.log(fruits[0]) // to get the apple from the basket the index is 0
// console.log(fruits[1]) // to get a banana from the basket the index is 1
// console.log(fruits[2]) // to get an orange from the basket the index is 2
// console.log(fruits[8])
// console.log(fruits.length) // to get the number of fruits in the basket

// 2. Transversing an array
for (let i = 0; i < fruits.length; i++) {
  // big O notation O(n)
  console.log(fruits[i]);
}

// Note transaversing an array is a O(n) operation

// 3. Inserting an element into an array
// fruits.push('kiwi'); // to add a fruit to the basket
// console.log(fruits)
// Algorithm to insert an element into an array is O(1) operation

// // 4. Deleting Removing an element from an array
// fruits.pop(); // to remove the last fruit from the basket
// fruits.pop();
// console.log(fruits)
// // Algorithm to delete an element from the last index is O(1) operation

// // Removing the first element from an array
// fruits.shift(); // to remove the first fruit from the basket
// console.log(fruits)
// Algorithm to delete an element from the first index is O(1) operation

// Removing an element from a specific index
// fruits.splice(2, 2); // to remove an orange from the basket
// console.log(fruits)
// Algorithm to delete an element from a specific index is O(n) operation

function removeFruit(fruit) {
  for (let i = 0; i < fruits.length; i++) {
    // O(n)
    if (fruits[i] === fruit) {
      // O(1)
      fruits.splice(i, 1); // O(n)
    }
  }
}

// Magic framework is used to calculate the time complexity of an algorithm
// Big O notation is used to calculate the time complexity of an algorithm
// To calculate the time complexity of an algorithm, we need to know the number of operations performed by the algorithm
// Compute the time complexity of the algorithm above
// O(n) + O(1) + O(n) = O(n^2)

removeFruit("apple"); // algorithm is O(n^2) operation

// removeFruit('banana')

// Algorithm to remove an element from an array is O(n^2) operation

// Because of the time complexity of the algorithm above, we can use a hash table to remove an element from an array
// Avoid using splice to remove an element from an array
// Use shift or pop to remove an element from an array

let names = ["testing testing testing"];
let deleted = names.pop();

console.log("This has been deleted", deleted);
console.log("Name is now", names);

// Assignment
// 1a. Given an array of numbers, write a function that returns the sum of all the numbers in the array. [1, 2, 3, 4, 5]
// 1b. Reverse the numbers to print [5, 4, 3, 2, 1]
// 2. Find the smallest number in any array.
// Example: [7, 3, 9, 1]
//3. Merge two sorted arrays into one sorted array.
// Example: [1, 3, 5] and [2, 4, 6] → [1, 2, 3, 4, 5, 6]
// Find the second largest element in an array.
// Example: [10, 20, 4, 45, 99]

