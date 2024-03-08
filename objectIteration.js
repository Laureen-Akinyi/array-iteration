// Object Iteration

// LOOPING Vs ITERATION
// Looping is the process of executing a set of statements repeatedly until a condition is met. 
// It's great for when we want to do something a specific number of times (for loop) 
// or unlimited times until the condition is met (while or do while loop).

// ***Iteration
// Iteration is the process of executing a set of statements once for each element in a collection.
// We can accomplish this with a for loop:

let myArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];

for (let i = 0; i < myArray.length; i++){
    console.log(myArray[i]);
}

// or with a while loop:

let myArrays = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];

let j = 0;

while(j < myArrays.length) {
    console.log(myArrays[j++]);
}

// but neither is very pretty. The for...of statement gives us a better way.

// Using for...of***
// Use a for...of statement anytime you want to iterate over an array.

const myArrayy =  ['a', 'b', 'c', 'd', 'e', 'f', 'g'];

for (const element of myArrayy) {
    console.log(element);
}

// Using a construct that is specifically meant for iteration results in much cleaner code: 
// there's no initialization of a counter, no condition, no incrementing the counter,
//  and no bracket notation to access elements in the array (myArray[i]).

// ***const vs. let
// As you might've noticed, for...of allows us to use const instead of let.
//  In for and while statements, let is required because we are incrementing a counter variable.
// Delightfully, the for...of statement involves no such reassignment.


// ***Iterating over... strings?
for (const char of 'Hello, world!') {
    console.log(char);
}

// Iterating over objects
// used for iterating over the properties in an object. 
// SYNTAX

// for (const [KEY] in [OBJECT]) {
//     // code in the statement body
// }
// The for...in statement iterates over the properties in an object, but it doesn't pass the entire property into the block. 
// Instead, it only passes in the keys:

const address = {
    street1: '11 Broadway',
    street2: '2nd Floor',
    city: 'New York',
    state: 'NY',
    zipCode: '1004',
};

for (const key in address) {
    console.log(key)
}

// Accessing the object's values is as simple as combining the passed-in key with the bracket operator:
const adress = {
    street1: '11 Broadway',
    street2: '2nd Floor',
    city: 'New York',
    state: 'NY',
    zipCode: "10004"
  };
  
  for (const key in adress) {
    console.log(adress[key]);
  }

//   If you recall from the lesson on objects, variables don't work with the dot operator because it treats the variable name as a literal key — that is, 
// address.key is trying to access the property on address with a key of key. 
//  Since there is no key property in address, it returns undefined. 

// Usage
// Use a for...in statement whenever you want to enumerate the properties of an object.


// First class Function is funcction as variables