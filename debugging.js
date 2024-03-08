// Debugging
// Debugging is the process of figuring out where our code is either breaking, or giving us an unexpected result.

// Define tracing
// We've already used console.log() 
// to print out data to the console, but we haven't really discussed why you'd want to do that.

// Demonstrate console.error()
// console.error() method is for printing out an error to the console, and it can also take multiple arguments
//  When we use console.error() in code snippets, we'll preface the output statements with ERROR: to differentiate them from other logged messages:

console.error('Uh oh, you done goofed.');
// ERROR: Uh oh, you done goofed.


// Demonstrate console.warn()
//  It provides a step between a regular log() message and a more dire error() message.

console.warn('This is a warning message');

// Demonstrate console.table()
// A very handy method to help work with Objects and Arrays is console.table()

const family = {
    mother: {
        firstName: "Susan",
        lastName: "Doyle",
        age: 32
    },
    father: {
        firstName: "John",
        lastName: "Doyle",
        age: 33 
    },
    daughter: {
        firstName: "Lily",
        lastName: "Doyle",
        age: 5
    },
    son: {
        firstName: "Mike",
        lastName: "Doyle",
        age: 8
    }
}
console.table(family);
console.log(Object.keys(family));
console.log(Object.keys(family.daughter));
console.log(Object.values(family.son));


// ***LOOPING 

for (let age = 30; age < 40; age++) {
    console.log(`I'm ${age} years old. Happy birthday to me!`);
    // debugger;
}

// When you're done, enter .exit or Ctrl-C twice to exit the debugger.
// Now let's remove debugger; from our code and execute it by running node debugging.js. You should see the following:

// Using for with Arrays

const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
    for(let i = 0; i < gifts.length; i++) {
        console.log(`Wrapped ${gifts[i]} and added a bow!`);
        // debugger;
    }
    return gifts;
}
wrapGifts(gifts);


const newArray = [];
function writeCards (stringName, eventName){
    for(let i = 0; i < stringName.length; i++) {
        console.log(`Thank you, ${stringName[i]}, for the wonderful ${eventName} gift!`);
        // debugger;
    }
    return newArray;
}
writeCards(["wendo", "nafula", "Ali"], 'birthday');

// Using for with Arrays
// const gifts = ["teddy bear", "drone", "doll"];

// function wrapGifts(gifts) {
//   for (let i = 0; i < gifts.length; i++) {
//     console.log(`Wrapped ${gifts[i]} and added a bow!`);
//     debugger;
//   }

//   return gifts;
// }

// wrapGifts(gifts);


//  WHILE LOOP***

const gift = ["teddy bear", "drone", "doll"];

function wrapGifts(gift) {
  let i = 0; // the initialization moves OUTSIDE the body of the loop!
  while (i < gift.length) {
    console.log(`Wrapped ${gift[i]} and added a bow!`);
    i++; // the iteration moves INSIDE the body of the loop!
  }

  return gift;
}

wrapGifts(gift);

// write a function, countDown, that takes in any positive integer and, starting from that number, counts down to zero using console.log().
function countDown( count) {
    let i = count;
    while(i >= 0) {
        console.log(i);
        i--;
        debugger;
    }
    return count;
}
countDown (10);
