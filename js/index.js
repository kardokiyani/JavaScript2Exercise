// Debugging Lesson Task:

// function updateLabel() {
// var addend1 = getNumber1();
// console.log("addend1:", addend1);
// var addend2 = getNumber2();
// console.log("addend2:", addend2);
// var sum = addend1 + addend2;
// console.log("sum:", sum);
// label.textContent = addend1 + " + " + addend2 + " = " + sum;
// }

// JSDocs Lesson Task:

/**
 * Adds two numbers together
 * @param {dataType} parameterName parameterDescription
 * @param {dataType} parameterName parameterDescription
 * @param {number} a First value
 * @param {number} b Second value
 * @returns {dataType} returnDescription
 * @returns {number} Sum of params
 * @example
 * ```js
 * // Adds two number together
 * const a = 1;
 * const b = 2;
 * const sum = addNumbers(a, b);
 * // except sum to be 3
 * ```
 */
function addNumbers(a, b) {
  const result = a + b;
  return result;
}

// JSON Lesson Task

// Template object
const myCountry = {
  country: "Norway",
  city: "Oslo",
  currency: "Krone",
};

const myCountryJSON = JSON.stringify(myCountry);

console.log(myCountryJSON);

const countryJSON = `{"country": "Norway", "city": "Oslo", "currency": "Krone"}`;

const country = JSON.parse(countryJSON);

console.log(country);

// Local Storage Lesson Task

localStorage.setItem(`lesson`, `Local Storage`);

localStorage.removeItem(`lesson`);

localStorage.clear;

const pet = {
  type: "Dog",
  name: "Lilje",
};

const jsonPet = JSON.stringify(pet);

localStorage.setItem("pet", jsonPet);

const petRetrieved = localStorage.getItem("pet");
const newPet = JSON.parse(petRetrieved);
console.log(newPet);

// Map Lesson Task

const users = new Map();

users.set(`12 `, { firstName: "Ola", lastName: "Nordmann" });

console.log(users.size);

users.set(`50`, { firstName: "Kari", lastName: "Nordmann" });

console.log(users.size);

users.delete(`12`);

console.log(users.size);

// Set Lesson Task

const values = new Set();

values.add(`1,2,2,2,3,4`);

console.log(values.size);

values.has(`1`);

values.has(`a`);

// Classes

class Person {
  language = `Norwegian`;
  constructor(firstName, lastName) {
    // Set 'firstName' to the 'firstName' parameter
    this.firstName = firstName;
    // Set 'lastName' to the 'lastName' parameter
    this.lastName = lastName;
  }

  // 'speak' method that logs a greeting message
  speak() {
    console.log(`Hello ${this.firstName} ${this.lastName}`);
  }
}

const newUser = new Person(`Ola`, `Nordmann`);
// Logs "Hello Ola Nordmann!
newUser.speak();

class thePerson {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  speak() {
    console.log(this.firstName, this.lastName);
  }
}

const human = new thePerson(`Ola`, `Nordmann`);

human.speak();
