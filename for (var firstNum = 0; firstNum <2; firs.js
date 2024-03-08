for (var firstNum = 0; firstNum <2; firstNum++) {
   for (var secondNum = 0; secondNum < 10; secondNum++){
    console.log(firstNum + " times " + secondNum + "equals " + firstNum * secondNum);
   }
}


// FUNCTIONS

function letterFinder(word, match){
   for (var i = 0; i < word.length; i++){
   if (word[i] == match){
      console.log('Found the', match, 'at', i)
   }
   else {
      console.log('---No match found at', i)
   }
   letterFinder("test", "t");
   
   }

}

// OBJECT LITERALS 7 DOT NOTATION
var table = {
   legs: 4,
   color: "brown",
   priceUSD: 160,
   specialAbility: "strong and stable"
}
// The returned value is the entire table object:  
console.log(table) 
{legs: 4, color; "brown", priceUSD; 160,  specialAbility; "strong and stable" }
// Additionally, I can console log any individual property, like this:  
console.log(table.specialAbility); "strong and stable"

// An alternative approach of building objects is to first save an empty object literal to a variable, 
// then use the dot notation to declare new properties on the fly, 
// and use the assignment operator to add values to those properties; 
// for example:

var house2 = {};
house2.rooms = 4;
house2.color = "pink";
house2.priceUSD = 12345;

// BRACKET NOTATION
var car = {};
car.color = "red";
car["color"] = "green";
car["speed"] = 200;
car.speed = 100;
console.log(car); // {color: "green", speed: 100}

// Additionally, I can add numbers (as the string data type) as property keys:  
car["2022"] = 1901;
console.log(car); // {2022: 1901, color: 'green', speed: 100, number of doors: 5}


// Finally, there's one really useful thing that bracket notation has 
// but is not available in the dot notation: It can evaluate expressions.

var arrOfKeys = ['speed', 'altitude', 'color'];
var drone = {
    speed: 100,
    altitude: 200,
    color: "red"
}
for (var i = 0; i < arrOfKeys.length; i++) {
    console.log(drone[arrOfKeys[i]])
}


// ARRAYS ARE OBJECTS
// To add new items to an array, I can use the push() method

var fruits = [];
fruits.push("apples")
fruits.push("orange")

// To remove the last item from an array, I can use the pop() method:  
fruits.pop()
console.log(fruits)

// MATH OBJECT
// Math.ceil() - rounds up to the closest integer 

// Math.floor() - rounds down to the closest integer 

// Math.round() - rounds up to the closest integer if the decimal is .5 or above; otherwise, rounds down to the closest integer 

// Math.trunc() - trims the decimal, leaving only the integer

// ***String Cheat Sheet
var greet = "Hello, ";
var place = "World"

greet.length; // 7

// To read each individual character at a specific index in a string, 
// starting from zero, I can use the charAt() method:  

greet.charAt(0); // 'H'

// The concat() method joins two strings:  

"Wo".concat("rl").concat("d"); // 'World'

// The indexOf returns the location of the first position that matches a character: 

"ho-ho-ho".indexOf('h'); // 0
"ho-ho-ho".indexOf('o'); // 1
"ho-ho-ho".indexOf('-'); // 2


// Here's a list of all the methods covered in this cheat sheet:

//     charAt() 

//     concat() 

//     indexOf() 

//     lastIndexOf() 

//     split() 

//     toUpperCase() 

//     toLowerCase()  

// OBJECT METHODS
// We can add new key-value pairs to existing objects using the 
// dot notation and the assignment operator. 
var car = {};
car.color = "red";

var car = {};
car.mileage = 98765;
car.color = "red";
console.log(car);
car.turnTheKey = function() {
    console.log("The engine is running")
}
car.lightsOn = function() {
    console.log("The lights are on.")
}
console.log(car);
car.turnTheKey();
car.lightsOn()



// Functional Programming Paradigm​
// In functional programming, we use a lot of functions and variables.

function getTotal(a, b) {
   return a + b
}

var num1 = 4;
var num2 = 6;

var total = getTotal(num1, num2)
//  Object-oriented programming (OOP). 
// In this style, we group data and functionality as properties and methods inside objects.

// For example, if I have a virtualPet object, I can give it a sleepy property and a nap() method:

var virtualPet = {
   sleepy: true,
   nap: function () {

   }
}

// In OOP, methods update properties stored in the object instead of generating new return values.

// For example, if I check the sleepy property on the virtualPet object, I can confirm that it's set to true.

// However, once I've ran the nap() method on the virtualPet object, will the sleepy property's value change?
var virtualPet = {
   sleepy: true,
   nap: function() {
       this.sleepy = false
   }
}
console.log(virtualPet.sleepy) // true
virtualPet.nap()
console.log(virtualPet.sleepy) // false

// Object Oriented Programming principles
// polymorphism example

class Bird {
   useWings() {
       console.log("Flying!")
   }
}
class Eagle extends Bird {
   useWings() {
       super.useWings()
       console.log("Barely flapping!")
   }
}
class Penguin extends Bird {
   useWings() {
       console.log("Diving!")
   }
}
var baldEagle = new Eagle();
var kingPenguin = new Penguin();
baldEagle.useWings(); // "Flying! Barely flapping!"
kingPenguin.useWings(); // "Diving!"


// CREATING CLASSES
class Train {}