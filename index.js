// const currentUser = 'Grace Hopper';
// const welcomeMessage = 'Welcome to Flatbook, ' + currentUser;

// using string literal
const currentUser = 'Grace Hopper';
// const welcomeMessage = `Welcome, ${currentUser.slice(0,3)}!`;
// const welcomeMessage = `Welcome, ${currentUser.charAt(4)}!`;
// const welcomeMessage = `Welcome, ${currentUser.toUpperCase()}!`;

// console.log(welcomeMessage)

// Comparisons in JavaScript
// Strict Equality Operator === and Strict Inequality Operator !==
42 === "42"

// The strict inequality operator returns true if 
// two values are not equal without performing type conversions:
//  9000 !== 9001 true
// 9000 !== '9001' true

// conditional statements
// if statement
const age = 30;

let isAdult;

if (age >= 88) {
    isAdult = true;
}else{
    isAdult = false;
}
console.log(isAdult);

// ternary Expressions
const size = 26;

let isFit;
size >= 18 ? (isFit = true) : (isFit = false)

console.log(isFit)

// Nested if statements
// const age = 17;

// let isAdult, canWork, canEnlist, canDrink;

// if (age >= 16) {
//   canWork = true;

//   if (age >= 18) {
//     isAdult = true;
//     canEnlist = true;

//     if (age >= 21) {
//       canDrink = true;
//     }
//   }
// }

// canWork;

// Switch case
const order = 'cheeseburger';

let ingredients;

switch (order) {
    case 'cheeseburger':
        ingredients = 'bun, burger, cheese, lettuce, tomato, onion';
        break;
    case 'hamburger':
        ingredients = 'bun, burger, lettuce, tomato, onion';
        break;
    case 'malted':
        ingredients = 'milk, ice cream, malted milk powder';
        break;
    default:
        console.log("Sorry, that's not on the menu right now.");
        break;
}

// Arithmetic Operator
9001%42
// Math.ceil() rounds the number up, 
// Math.floor() rounds the number down
// Math.round() rounds the number either up or down, whichever is nearest:

const num1 = 31
const num2 = 2;
var multiply = num1 * num2;
console.log(multiply)

const max = Math.max(20, 11, 17, 4, 7);
console.log(max)


// Functions 
// function exerciseDog(dogName, dogBreed) {
//   console.log(`Wake ${dogName} the ${dogBreed}`);
//   console.log(`Leash ${dogName} the ${dogBreed}`);
//   console.log(`Throw the frisbee for ${dogName} the ${dogBreed}`)
// }
// exerciseDog("Boo", "puggle");
// exerciseDog("Jojo", "mutt");

const weatherToday = "Rainy";

function exerciseDog(dogName, dogBreed) {
  if (weatherToday === "Rainy") {
    return `${dogName} did not exercise due to rain`;
  }
  console.log(`Wake ${dogName} the ${dogBreed}`);
  console.log(`Leash ${dogName} the ${dogBreed}`);
  console.log(`Walk to the park ${dogName} the ${dogBreed}`);
  console.log(`Throw the frisbee for ${dogName} the ${dogBreed}`);
  console.log(`Walk home with ${dogName} the ${dogBreed}`);
  console.log(`Unleash ${dogName} the ${dogBreed}`);
  return `${dogName} is happy and tired!`;
}
const grude = exerciseDog("Byron", "poodle")
console.log(grude)

// Function Expression
1+1; 2
// "Razzle " + "dazzle!"; //=> "Razzle dazzle!"
// function() {
//   console.log("Yet more razzling");
// }


// Function declaration
function razzle(){
  console.log("You are razzled!")
}
razzle()

function saturdayFun(activity = "rollerSkate"){
  console.log(`This Saturday, I want to ${activity}!`)

}
saturdayFun()

// Hoisting
// JavaScript's ability to call functions before they appear in the code is called hoisting. 
// For hoisting to work, the function must be defined using a function declaration

// Anonymous Function
// An anonymous function is a function that doesn't have a name:

// function(){
//   console.log("Yet more razzling")
// }

// how to invoke an anonymous function
//  we can use it as a callback function. 
// For example, you'll often see anonymous functions passed as an argument to an event listener:

// const button = document.getElementById("button");
// button.addEventListener("click", function () {
//   console.log("Yet more razzling");
// });

// Define a Function Using a Function Expression
// Another way we can solve the problem of accessing an anonymous function is by declaring a variable and assigning the function as its value. Recall that any expression can be assigned to a variable; this includes function expressions:

const fn = function () {
  console.log("Yet more razzling")
}
fn;
fn();

function mondayWork(activity = "go to the office"){
  console.log(`This Monday, I will ${activity}`)
}
mondayWork("sing!")

// Immediately-Invoked Function Expression
// Another way to invoke an anonymous function is by creating what's known as an IIFE
// (function (baseNumber) {
//   return baseNumber + 3;
// }) 
// (2);

//  Function-Level Scope

function outer(greeting, msg = "It's a fine day to learn") {
  const innerFunction = function(name, lang = "Python") {
    return `${greeting}, ${name}! ${msg} ${lang}`;
  }
  return innerFunction("student", "JavaScript");
 }

 outer("Hello");


//  final
function outer(greeting, msg = "It's a fine day to learn"){
  return function(name, lang = "Python"){
    return `${greeting}, ${name}! ${msg} ${lang}`
  }
}
console.log(outer("Hello") ("Mary", "JavaScript"));

// Closure
const array = (function (thingToAdd) {
  const base = 3;
  return [
    function() {
      return base + thingToAdd;
    },
    function () {
      return base;
    },
  ]
}) (2);

// Scope Chain
function demoChain(name) {
  const part1 = "hi";
  return function () {
    const part2 = "there";
    return function () {
      console.log(`${part1.toUpperCase()} ${part2} ${name}`);
    }
  }
}
console.log(demoChain("Dr. Lorane Monny") () () );

// EXERCISE LAB
function saturdayFun (activity = "roller-skate") {
 console.log( `I love doing this ${activity}`);
}
saturdayFun("skip");
// next

function wrapAdjective(adjective){
  const specialChar = function(start){
    return `You are ${adjective} ${start} ${adjective}!`;
  }
  return specialChar

}
console.log(wrapAdjective("%") ("a dedicated programmer"));

// praco
const foo = function () {
  return "bar";
}
console.log(foo());

// Arrow function.
// First, we declare a variable add and assign an anonymous function as its value. 

const add = (parameter1, parameter2) => parameter1 + parameter2;
console.log(add(2, 3));

const twoAdder = x => x + 2;
// Arrow function with mutiple lines of code and has to have a return 
const sum = (parameter1, parameter2) => {
  console.log(`Adding ${parameter1}`);
  console.log(`Adding ${parameter2}`);
  return parameter1 + parameter2;
}
console.log(sum(1, 2));

const divide = () => 2000/1000
const square = x => x *x;
const addition = (a, b) => a +b;

// Situations Where Arrow Functions Are Used
// Arrow functions are often used in JavaScript's iterator methods. 
//  An iterator is a method that allows you to deal with a set of data one at a time. 
// For example, if you had a group of students' essays, you could only grade them one at a time.


// Callback Functions
// Passing Functions as Arguments
// This is how we pass an object into a function:
function iReturnThings (thing) {
  return thing;
}
console.log(iReturnThings({firstName: 'Brendan', lastName: 'Owino'}));

// And this is how we pass a function into a function:
iReturnThings(function () { return 4 + 5});


function iInvokeThings (thing) {
  return thing();
}
iInvokeThings(function (){ return 4 + 5; });
iInvokeThings(function () { return 'Hello, ' + 'world'});


// Define Callback Functions
// function main (cb) {
//   console.log(cb());
// }
// console.log(main())
// main (function () { return "After i get passed to the main() function as the only argument, I'm stored in the local 'cb' variable!"});

function greet (name, cb) {
  return cb(name);
}

greet('Ada Lovelace', function (name) { return 'Hello there, ' + name; });
// => "Hello there, Ada Lovelace"

function doMath (num1, num2, cb) {
  return cb(num1, num2);
}

doMath(42, 8, function (num1, num2) { return num1 * num2; });

// Introduction to Scope
// Scope is, in short, the concept of where something is available. 
//  In the case of JavaScript, it has to do with where declared variables and methods are available within our code.
// Global scope 
//  If a variable or function is not declared inside a function or block, it's in the global execution context.
function myFunc(){
  return 42;
}

const myVar = myFunc() * 2
myVar;
84

// Function scope
function myFunc() {
  const myVar = 42;

  return myVar * 2;
}
// => undefined

myFunc();
// => 84

// Block scope
if (true) {
  const myVar = 42;

  let myOtherVar = 9001;
}

// Variables created without a const, let, or var keyword are always globally-scoped, regardless of where they sit in your code. 
// If you create one inside of a block, it's still available globally:

function bankAccount() {
  secretPassword = "il0v3pupp135";

  return "bankAccount() function invoked!";
}

bankAccount();
// => "bankAccount() function invoked!"

secretPassword;
// => "il0v3pupp135"

// Scope Chain

// *** Nested scopes and the scope chain

const globalVar = 7;

function firstFunc() {
  const firstVar = 2;

  return firstVar + globalVar;
}

console.log(firstFunc());

// Nested scope chaim
// const fruit = "Apple";

// function first () {
//   const vegetable = "Broccoli";

//   console.log("fruit:", fruit);
//   console.log("vegetable:", vegetable);
//   console.log("legume:", legume);
// }

// function second() {
//   const legume = "Peanut";

//   console.log("fruit:", fruit);
//   console.log("legume:", legume);
//   console.log("vegetable:", vegetable);
// }

// console.log(first());

// console.log(second());
// first();
// LOG: fruit: Apple
// LOG: vegetable: Broccoli
// ERROR: Uncaught ReferenceError: legume is not defined


// SCOPE LAB
var customerName = "mary";
const leastFavoriteCustomer = "Achien";
var bestCustomer;

function upperCaseCustomerName() {
  return customerName.toUpperCase();
}
console.log(upperCaseCustomerName())

function setBestCustomer() {
  bestCustomer = "not bob";
}
console.log(setBestCustomer());

function overwriteBestcustomer() {
   bestCustomer = "maybe bob"

}
console.log(overwriteBestcustomer());

// function changeLeastFavoriteCustomer () {
//   leastFavoriteCustomer = "Njeri";
// }

// console.log (changeLeastFavoriteCustomer());


// ****LEXICAL SCOPE


// Arrays []
// Identify Data Structures and Arrays
// primitive data types — types that represent a single value eg strings, Booleans, and numbers.
// ***A data structure is a means for associating and organizing information. 

// ["This", "is", "an", "array", "of", "strings."];
// The members or elements in an Array can be data of any type in JavaScript:
 ["Hello, world!", 42, null, NaN];
//  We can find out how many elements an Array contains by checking the Array's built-in length property:
 
const myArray = ["This", "array", "has", 5, "elements"];
myArray.length;
//  => 5

// Just like any other type of JavaScript data, we can assign an Array to a variable:

const primeNumers = [2, 3, 5, 7, 11, 13, 17];
const flowers = ["Rose", "Tulip", "Orchid", "Lily"];

const winningNumbers = [32, 9, 14, 33, 48, 5];

function logWinningNumbers(numbers) {
  console.log("Winning numbers:", numbers);
}
console.log(logWinningNumbers(winningNumbers));

// Using Bracket Notation
// To access an element, we use bracket notation like this: nameOfArray[index]

const lotteryNumbers = [32, 9, 14, 33, 48, 5];
console.log(lotteryNumbers[3]);
// => 33


// Updating the Value of an Element
// We can also use bracket notation ([]) — along with the assignment operator (=) — 
// to update the value of an element in the array.

const planets = ['Mercury', "Venus", "Earth", "Mars", "Juptier",
"saturn", "Uranus", "Neptune"];
planets[4] = "Jupiter";
console.log(planets);

// Nested Arrays
//  In general, it is best to keep your Arrays to no more than two levels deep. 
// Two levels is perfect for representing two-dimensional things, like a tic-tac-toe board:

const board = [
  ["X", "O", " "],
  [" ", "X", "O"],
  ["X", " ", "O"],
];
console.log(board);

// The first [] operator grabs the row that we want, top (board[0]), middle (board[1]), or bottom (board[2]). For example:
board[1];
// => [" ", "X", "O"]

// The second [] operator specifies the column, or the square within that row: 
// left (board[1][0]), middle (board[1][1]), or right (board[1][2]). For example:

board[0][0];
// => "X"
board[0][2];
// => " "

board[2][2];
// => "O"

// Mutability
// Some methods update or mutate the object they are called on; these methods are referred to as destructive.
//  Other methods, known as nondestructive methods, leave the object intact.
// For example, the String method toUpperCase() is nondestructive:
const string = "Hello";

string.toUpperCase();
//=> "HELLO"

string;
//=> "Hello"


// ***Array Methods (destructive (i.e., it mutates the array) mutate is change in form or nature.)
// Add Elements to an Array
// .push() and .unshift() are destructive methods and spread operator which is nondestructive
// **** .push() <addes elements to the end of array.> and .unshift() < adds elements to the beginning of the array>
// These two methods work in the same way:

// They take one or more arguments (the element or elements you want to add)
// They return the length of the modified array
// They are destructive methods

const superheroes = ["Catwoman", "Storm", "Jessica Jones"];
superheroes.push("Wonder Woman");
// .push adds elements at the end of an Array
console.log(superheroes);
superheroes.unshift("Kenneth");
// .unshift adds elements in the beginning of an Array
console.log(superheroes);

const cities = ["New York", "San Franciso",];
cities.unshift("Boston", "Chicago");
console.log(cities);

// ***Spread Operator ...
// The spread operator, which looks like an ellipsis: ..., allows us to "spread out" the elements of an existing Array into a new Array, creating a copy:

const coolCities = ["New York", "San Franciso",];
const copyOfCoolCities = [...coolCities];

console.log(copyOfCoolCities);

// Because the spread operator is an operator rather than a method, it works differently than push() and unshift()
// Where the spread operator comes in especially handy is when we want to add one or more new elements 
// either before or after the elements in the original array (or both) without mutating the original array.
// To add an element to the front of the new array, we simply type in the new element before spreading the elements in the original array:

const likedCities = ["New York", "San Franciso",];

const allCities = ["Los Angeles", ...coolCities];

console.log(likedCities);
console.log(allCities);

// And, as you might expect, to add a new item to the end of an Array, we type in the new element after spreading the elements in the original array:

const coolCats = ["Hobbes", "Felix", "Tom"];

const allCats = [...coolCats, "Garfield"];

console.log(coolCats);
console.log(allCats);

// Note that, in both cases, we created a new Array instead of modifying the original one — 
// our coolCities and coolCats Arrays were untouched. Because we didn't modify the original array, 
// in order to save the results of our work we had to assign it to a variable.


// ***Remove Elements from an Array
// .pop() and .shift()
// these two methods work in the same way:

// *they don't take any arguments
// *they remove a single element
// *they return the element that is removed
// *they are destructive methods

// .pop() method removes the last element in an Array:

const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

console.log(days.pop());
console.log(days);

// .shift() method removes the first element in an Array:

const siku = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
console.log(siku.shift());
console.log(siku);

// .slice()
// To remove elements from an Array nondestructively 
// (without mutating the original Array), we can use the .slice() method.
// .slice() returns a portion, or slice, of an Array.
// The method takes 0, 1, or 2 arguments and returns a new array containing the sliced elements.

// .slice() With No Arguments
// If we don't provide any arguments, .slice() will return a copy of the original Array with all elements intact:

const primes = [2, 3, 5, 7];

const copyOfPrimes = primes.slice();

console.log(primes);
// => [2, 3, 5, 7]
console.log(copyOfPrimes);
// => [2, 3, 5, 7]

const rimes = [2, 3, 5, 7];

const copyOfRimesUsingSlice = primes.slice();

const copyOfRimesUsingSpreadOperator = [...primes];

rimes.push(11);
// => 5

rimes;
// => [2, 3, 5, 7, 11]

copyOfRimesUsingSlice;
// => [2, 3, 5, 7]

copyOfRimesUsingSpreadOperator;
// => [2, 3, 5, 7]

// .slice() With Arguments
// We can also provide one or two arguments to .slice(): 
// the first is the index where the slice should begin and the second is the index before which it should end:

const dayz =  ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

console.log(dayz.slice(2, 5));
// => ["Wed", "Thu", "Fri"]

// If no second argument is provided, the slice will run from the index specified by the first argument to the end of the Array:

const day = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

console.log(day.slice(5));
// => ["Sat", "Sun"]

// To return a new Array with the first element removed, we call .slice(1):

const masiku = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

console.log(masiku.slice(1));
// // => ["Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]

// And we can return an array with the last element removed in a way that will look familiar from the previous lesson

const week = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

week.slice(0, days.length - 1);
// => ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

// ***.slice() provides an easier syntax for referencing the last element (or elements) in an Array:
week.slice(-1);
// => ["Sun"]

week.slice(-3);
// => ["Fri", "Sat", "Sun"]

week.slice(0, -1);
// => ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

// ***When we provide a negative index, the JavaScript engine knows to start counting from the last element in the Array instead of the first.


// ***.splice() ALLOWS US TO REMOVE, ADD REPLACE ELEMENTS.
// .splice() performs destructive actions.
// Depending on how many arguments we give it, 
// .splice() allows us to remove elements, add elements, or replace elements (or any combination of the three).

// With a Single Argument

const kids = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

// kids.splice(2);
// => ["Wed", "Thu", "Fri", "Sat", "Sun"]
console.log(kids.splice(2));
console.log(kids)

// We can use a negative 'start' index with splice(), the same as with slice():
const kid = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

console.log(kid.splice(-2));
// => ["Sat", "Sun"]
console.log(kid);
// => ["Mon", "Tue", "Wed", "Thu", "Fri"]

// **** .splice() With Two Arguments
// array.splice(start, deletecount);
// the first is still the index at which to begin splicing,
//  the second dictates how many elements we want to remove from the Array.

const towns = ["kenol", "Kabati", "Murang'a", "Kitui", "Thika", "Kita", "Malaba"];
// towns.splice(2, 3);
console.log(towns.splice(2,3));
// => ["Murang'a", "Kitui", "Thika"]
// towns;
console.log(towns);


// ***Replace Elements in an Array
// .splice() with 3+ arguments
// array.splice(start, deleteCount, item1, item2, ...)
// We can replace a single element in an Array as follows, discarding a card and drawing a new one:

const cards = [
  "Ace of Spades",
  "Jack of Clubs",
  "Nine of Clubs",
  "Nine of Diamonds",
  "Three of Hearts",
];
cards.splice(2, 1, "Ace of Clubs");


// Slicing and Spreading


// <!-- crate an alert -->
// document.querySelector('alert').addEventListener
// (click, () => alert('Hi, I was clicked!'));

