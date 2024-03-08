// OBJECTS {}
// JavaScript Objects are collections of data
// They consist of a list of properties (key-value pairs) bounded by curly braces ({ }). 
// The properties can point to values of any data type — even other Objects

// empty object
const obj = {};
// with a single property
// const object = {key: value};

// nested objects
// nested Objects, in which the values associated with one or more of the keys is another Object

const obje = {
    key1: 2,
    key2: {
        innerKey1: 3,
        innerKey2: 3,
    },
};
// There is no limit to how deeply nested our Objects can be.
const address = {
    street: {
      line1: "11 Broadway",
      line2: "2nd Floor",
    },
    city: "New York",
    state: "NY",
    zipCode: "10004",
  };

//   Multiple properties can have the same value:

const meals = {
    breakfast: "Avocado toast",
    lunch: "Avocado toast",
    dinner: "Avocado toast",
};

console.log(meals.breakfast);
console.log(meals.lunch);

// But keys must be unique.
//  If the same key is used for multiple properties, only the final value will be retained. The rest will be overwritten:

const meal = {
    breakfast: "Avocado toast",
    breakfast: "Oatmeal",
    breakfast: "Scrambled eggs",
};

console.log(meal);

// Access a Value Stored in an Object
// Dot notation
// With dot notation, we use the member access operator (a single period) to access values in an Object

address.street;
//=> { line1: "11 Broadway", line2: "2nd Floor" }

// Then to access a value inside address.street, we simply append the inner key, again using dot notation:
address.street.line1;
//=> "11 Broadway"


// Accessing Nonexistent Properties
// If we try to access the country property of our address Object, what will happen?

address.country;
//=> undefined

// It returns undefined because there is no matching key on the Object.
//  if you're seeing undefined when trying to access an Object's properties, you should recheck which properties exist on the Object (along with your spelling and capitalization)!


// ***BRACKET NOTATION*** []
// To access the same properties, we need to represent them as strings inside the operator:

address["street"];
//=> { line1: "11 Broadway", line2: "2nd Floor" }

address["street"]["line1"];
//=> "11 Broadway"

address["street"]["line2"];
//=> "2nd Floor"
address["zipCode"];
//=> "10004"

// TWO MAIN SITUATION BRACKET NOTAION IS USED []

// 1. Nonstandard Keys**
// If (for whatever reason) you need to use a nonstandard string as the key in an Object, you'll only be able to access the properties with bracket notation. 

const wildKeys = {
    "Cash rules everything around me.": "Wu",
    "C.R.E.A.M.": "Tang",
    "Get the money.": "For",
    "$ $ bill, y'all!": "Ever",
  };

//   It's impossible to access those properties with dot notation:
// wildKeys.'Cash rules everything around me.';
// ERROR: Uncaught SyntaxError: Unexpected string

wildKeys["$ $ bill, y'all!"];
//=> "Ever"

// 2. Accessing Properties Dynamically

const mealss = {
  breakfats: "oatmeal",
  lunch: "ceasar salad",
  dinner: "CHimichangas",
};

let meallName = "lunch";

console.log(mealss[meallName]);

// We can also use bracket notation to dynamically set properties during the creation of a new Object.

const morningMeal = "breakfast";
const middayMeal = "lunch";
const eveningMeal = "dinner";

const meas = {
  [morningMeal]: "Freanch toast",
  [middayMeal]: "Personal pizza",
  [eveningMeal]: "Fish and chips",
};

console.log(meas)


// JavaScript's Object Methods***
// JavaScript includes a number of built-in static Object methods
// static means that these methods are called on the Object class itself, rather than on an instance of an Object

// **Object.keys()
// We can get a list of the top-level keys in an Object by using the Object.keys() Links to an external site.static method. 
//  We do that by calling Object.keys() and passing the Object instance as an argument. 
// The return value is an Array containing all of the keys at the top level of the Object instance.

const wednesdayMenu = {
  cheesePlate: {
    soft: "Brie",
    semiSoft: "Fontina",
    hard: "Provolone",
  },
  fries: "Sweet potato",
  salad: "Southwestern",
};
Object.keys(wednesdayMenu);
//=> ["cheesePlate", "fries", "salad"]
console.log(Object.keys(wednesdayMenu));

// Object.values()
//  behaves similarly to Object.keys() returns an array of values
console.log(Object.values(wednesdayMenu));
// [ { soft: 'Brie', semiSoft: 'Fontina', hard: 'Provolone' },
//   'Sweet potato',
//   'Southwestern' ]


// ***Modifying Objects

// Add an Object Property Using Dot or Bracket Notation

const circle = {};

circle;
// => {}

circle.radius = 5;

circle;
// => {radius: 5}

circle["diameter"] = 10;
circle.circumference = circle.diameter * Math.PI;

circle["area"] = Math.PI * circle .radius ** 2;

console.log(circle);
//=> { radius: 5, diameter: 10, circumference: 31.41592653589793, area: 78.53981633974483 }


// Modify a Property Using Dot or Bracket Notation

const mondayMenu = {
  cheesePlate: {
    soft: "Chèvre",
    semiSoft: "Gruyère",
    hard: "Manchego",
  },
  fries: "Curly",
  salad: "Cobb",
};

mondayMenu.fries = "Sweet potato";
mondayMenu;
//=> { cheesePlate: { soft: "Chèvre", semiSoft: "Gruyère", hard: "Manchego" }, fries: "Sweet potato", salad: "Cobb" }


// Update an Object Nondestructively Using the Spread Operator

function nondestructivelyUpdateObject(obj, key, value) {
  return {
    ...obj,
    [key]: value,
  };
}

// const sundayMenu = nondestructivelyUpdateObject(
//   // tuesdayMenu,
//   "fries",
//   "Shoestring"
// );

// tuesdayMenu.fries;
// //=> "Sweet potato"

// sundayMenu.fries;
// //=> "Shoestring"

// Remove a Property from an Object
const whendayMenu = {
  cheesePlate: {
    soft: "Brie",
    semiSoft: "Fontina",
    hard: "Provolone",
  },
  fries: "Sweet potato",
  salad: "Southwestern",
};
console.log(delete whendayMenu.salad);
console.log( whendayMenu);

// ***Remember that all Object keys, including Array indexes, are strings. This will 
// really come into play when we learn how to iterate over Objects, so keep it in the back of your mind.


// EXERCISE

const employee = {};

employee.name = "Apiyo";
employee["streetAddress"] = 420420;

console.log(employee);
// updateEmployeeWithKeyAndValue(): this function should take in three arguments:
//  an employee Object, a key and a value. This function should not mutate the employee; it should return a new Object that has an updated value for the key passed in.
//  Hint: use the spread operator!
function updateEmployeeWithKeyAndValue(employee, key, value) {
  return{
    ...employee,
    [key]: value,
  };
}

const employee1 = updateEmployeeWithKeyAndValue(
  employee,
  "name",
  "Wafula",
)
console.log(employee1.name);
console.log(employee.name);


// destructivelyUpdateEmployeeWithKeyAndValue():
//  this function should work the same as updateEmployeeWithKeyAndValue() 
// but it should mutate the employee Object passed in.
function destructivelyUpdateEmployyWithKeyAndValue(employee, key, value){
  employee[key] = value;
  return employee;
}

const employee2 = destructivelyUpdateEmployyWithKeyAndValue(
  employee,
  "streetAddress",
  5454,
)
console.log(employee2);
console.log(employee);
console.log(employee1);
console.log(employee2.name);


// deleteFromEmployeeByKey(): this function should take in a employee Object and a key.
//  It should delete the property with that key from the employee Object. This should not mutate the original employee Object; 
// it should return a new Object that doesn't include the identified key-value pair. Hint: use the spread operator!
function deleteFromEmployeeByKey(employee, key){
 let newEmployee = {
  ...employee
 }
 delete newEmployee[key]
 return newEmployee;
}

const newEmployee = deleteFromEmployeeByKey(
  employee,
  "name",
)
console.log(newEmployee);
console.log(employee);

// destructivelyDeleteFromEmployeeByKey(): this function should work the same as deleteFromEmployeeByKey() but it should mutate the employee Object.

function destructivelyDeleteFromEmployeeByKey(employee, key){
  delete employee[key];
  return employee;
}

const employee3 = destructivelyDeleteFromEmployeeByKey(
  employee,
  "name",
)

console.log(employee3);
