// // 1: Object Creation
const iphone = {
  name: "Iphone 17 pro",
  year: 2025,
  color: "black",
  parameters: {
    storage: 256,
    hours: 16,
    cameraMP: 48,
  },
};

// //Task 2: Description Method
// //1. Uses `this`
// //2. Returns a sentence describing the object
const iphone = {
  name: "Iphone 17 pro",
  year: 2025,
  color: "black",
  parameters: {
    storage: 256,
    hours: 16,
    cameraMP: 48,
  },
  info() {
    return `This ${this.name} is ${this.color} and released in ${this.year}.`;
  },
};
console.log(iphone.info());

// //Task 3: Update Method
// //Add a method that:
// //1. Takes **parameters**
// // 2. Updates one property using `this`
// //3. Returns the updated value

const iphone = {
  name: "Iphone 17 pro",
  year: 2025,
  color: "black",
  parameters: {
    storage: 256,
    hours: 16,
    cameraMP: 48,
  },
  info() {
    return `This ${this.name} has ${this.storage} GB of Storage.`;
  },
};

iphone.storage = 512;
console.log(iphone.info());

// Task 4: Calculation Method
//Add a method that:
//1. Uses `this`
//2. Performs a calculation
//3. Returns the result

const calculation = {
  division(a, b) {
    return a / b;
  },
};
console.log(calculation.division(10, 5));

// //Task 5: Dot vs Bracket
// //Access **two properties** using:
// // dot notation
// //bracket notation
const iphone = {
  name: "Iphone 17 pro",
  year: 2025,
  color: "black",
  parameters: {
    storage: 256,
    hours: 16,
    cameraMP: 48,
  },
};
console.log(iphone.name);
console.log(iphone.color);
console.log(iphone["name"]);
console.log(iphone["year"]);

// Task 6: Property Checker
//Write a function (outside the object) that:
//1. Takes an object and a property name
//2. Uses the `in` operator
//3. Returns whether the property exists

const iphone = {
  name: "Iphone 17 pro",
  year: 2025,
  color: "black",
  parameters: {
    storage: 256,
    hours: 16,
    cameraMP: 48,
  },
};
console.log("name" in iphone);
console.log("max" in iphone);

// Task 7: Method Calls
//1. Call **each object method**
//2. Store the returned values
//3. Print them to the console
const iphone = {
  name: "Iphone 17 pro",
  year: 2025,
  color: "black",
  parameters: {
    storage: 256,
    hours: 16,
    cameraMP: 48,
  },
  shop() {
    console.log(`this is a new ${this.name}`);
  },
};

iphone.shop();

//✏ Task 8: Add a New Property
//Add a new property to your object **without using a method**
//Print the object to see the added property
const iphone = {
  name: "Iphone 17 pro",
  year: 2025,
  color: "black",
  parameters: {
    storage: 256,
    hours: 16,
    cameraMP: 48,
  },
};
iphone.price = 2000;
console.log(iphone);

//Task 9: Update a Property Directly
// Update an existing property directly (not through a method)
// Print the updated value

const iphone = {
  name: "Iphone 17 pro",
  year: 2025,
  color: "black",
  parameters: {
    storage: 256,
    hours: 16,
    cameraMP: 48,
  },
};
iphone.year = 2027;
console.log(iphone.year);

delete iphone.parameters.cameraMP;
console.log(iphone.parameters.cameraMP);

// Task 11: List Object Keys
// Use `Object.keys()` to list all property names
//Print the result
// Check if a specific property name exists in the returned value from `Object.keys()`

const iphone = {
  name: "Iphone 17 pro",
  year: 2025,
  color: "black",
  parameters: {
    storage: 256,
    hours: 16,
    cameraMP: 48,
  },
};
console.log(Object.keys(iphone));

// Use `Object.values()` to list all property values
//Print the result
//Check if a specific property value exists in the returned value from `Object.values()`.

console.log(Object.values(iphone));

//Use `Object.entries()` to list all key-value pairs
// Print the result
// Flatten the array returned from `Object.entries()` .
// Print the flattened array

console.log(Object.entries(iphone));

// Task 14: Access Nested Properties
//Access at least **two properties** from the nested object
// Use **dot notation**
//Print both values

console.log(iphone.parameters.hours);

// Task 15: Update Nested Properties

// Update one property inside the nested object
//Print the updated nested object

iphone.parameters.cameraMP = 50;
console.log(iphone.parameters.cameraMP);
