// Array Iterator Methods

const users = [
    {
        firstName: "Niky",
        lastName: "Morgan",
        favoriteColor: "Blue",
        favoriteAnimal: 'Jaguar',
        personalQuote: "You're never too late to learn someting new",
    },
    {
        firstName: "Tracy",
        lastName: "Lum",
        favoriteColor: "Yellow",
        favoriteAnimal: "Penguin",
        personalQuote: "I just got lost in thought - it was unfamiliar territory",
      },
      {
        firstName: "Josh",
        lastName: "Rowley",
        favoriteColor: "Blue",
        favoriteAnimal: "Penguin",
        personalQuote: "Always remember you're unique, just like everyone else",
      },
      {
        firstName: "Kate",
        lastName: "Travers",
        favoriteColor: "Red",
        favoriteAnimal: "Jaguar",
        personalQuote: "Behind every great man is a woman rolling her eyes",
      },
      {
        firstName: "Avidor",
        lastName: "Turkewitz",
        favoriteColor: "Blue",
        favoriteAnimal: "Penguin",
        personalQuote:
          "You don’t have to see the whole staircase, just take the first step",
      },
      {
        firstName: "Drew",
        lastName: "Price",
        favoriteColor: "Yellow",
        favoriteAnimal: "Elephant",
        personalQuote:
          "Failure is not the opposite of success: it’s part of success",
      },
];

// We can iterate over that collection and print out everyone's first name as follows:

function firstNamePrinter(collection){
    for(const user of collection) {
        console.log(user.firstName);
    }
}
console.log(firstNamePrinter(users))

// It's also not too difficult to print out only users whose favorite color is blue:

function blueFilter(collection){
    for(const user of collection) {
        if(user.favoriteColor === "Blue"){
            console.log(user.firstName);
        
        }
    }
}
console.log(blueFilter(users));

// But what if we wanted to print out users whose favorite color is red instead? 
// With the above approach, we'd need to create a whole new redFilter function.
// We can improve matters by abstracting out the color into a variable:
function colorFilter(collection, color) {
    for (const user of collection) {
        if (user.favoriteColor === color){
            console.log(user.firstName);
        }
    }
}
console.log(colorFilter(users, "Yellow"));

// Use Case	                                                   Method
// Finding a single element that meets a condition	           indexOf(), find()
// Finding and returning a list of elements that meet a condition	filter()
// Modifying each element and returning the modified array	   map()
// Creating a summary or aggregation of values in an array	   reduce()


// ***Finding Array Elements
// In JavaScript, there are two different methods that we use to locate data in arrays. 
//  For simple conditions, we use Array.prototype.indexOf()
// For more complex calculations, we use Array.prototype.find().


// Array.prototype.indexOf()
// Array.prototype.indexOf() is called on an array and takes two arguments:
//  the value you are looking for and an optional start position. 
const cards = ['queen of hearts', 'jack of clubs', 'ten of diamonds', 'ace of spades'];

cards.indexOf('jack of clubs'); //=> 1
cards.indexOf('jack of hearts'); //=> -1

// If you pass in the optional second argument, indexOf() will begin the search at the specified position:

cards.indexOf('ace of spades', 2); //=> 3
cards.indexOf('jack of clubs', 2); //=> -1 

// Array.prototype.find()
// Array.prototype.find() allows you to execute more complex searches by passing it a callback function.
// The method will automatically iterate through the array, call the callback on each value, and return the first element in the array that satisfies the condition defined by the function. 
// If no matching element is found, undefined is returned.


const record = [
    {year: "2015", result: "W"},
    {year: "2014", result: "N/A"},
    {year: "2013", result: "L" },
]

// will loop through reuslt
// Find the first object whose condition returns true based on a callback


// Write a function called superbowlWin() in index.js:

// The function should receive 1 argument, an Array of JavaScript Objects
// Each object has two properties: year and result
// It should use find() to test each Object to see if the result is "W" — a win!
// It should return the year when the win occurred (if it occurred at all!)
// If no win is found, it should return, sadly, undefined
function superbowlWin(result, finder){
    let game = undefined
    for(let item of result) {
        if (finder(item) === true){
            game = item
            break
        }
    }
    return game;
}

function isWin(year){
    return year.result === "W"
}

console.log(superbowlWin(record, isWin));



// ***Filtering Arrays



const doubledAndSummed = [1, 2, 3].reduce(function(accumulator, element){ return element * 2 + accumulator}, 0)
console.log(doubledAndSummed);

const phrases = {
  greeting: "Hello Akinyi!!",
  time: () => {
    const currentTime = new Date ();
    return `The time is ${currentTime.getHours()}:${currentTime.getMinutes()}`;
  }
}
console.log(phrases.greeting);
console.log(phrases.time());


const listOfGoodDogs = ["Nola", "Spinach", "Diego"];

listOfGoodDogs.map((dog) => console.log(dog));

// console.log(dog);



// console.log(exampleArray.__proto__)

let artists = [
  "Smash Mouth",
  "Janelle Monae",
  "SZA",
  "Thunder Cat",
  "Frank Ocean",
  "Solange",
];

const playingArtists = artists.filter(function (artist) {
  return artist.startsWith("S");
});

console.log(playingArtists);

const expenses = [25, 99, 1000, 350];

const total = expenses.reduce(function (total, expense) {
  return total + expense;
}, 0);

console.log(total);
// SPREAD OPERATOR
let names = ['losh', 'akin', 'owin', 'apiy']
let names1 = [...names, 'odon', 'max', 'lil']
console.log(names);
console.log(names1)


