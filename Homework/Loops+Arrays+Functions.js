/// Task 1: Print All Elements
//Use a `for` loop**
//Write a function that:
//1. Takes an array
//2. Prints each element

const printElements = [
  "Toyota",
  "BMW",
  "Audi",
  "Tesla",
  "Mercedes",
  "Jeep",
  "Ford",
];

for (let i = 0; i < printElements.length; i++) {
  console.log(printElements[i]);
}

/// Task 2: Index + Value
//Use a `for` loop**
//Write a function that:
//1. Takes an array
//2. Prints both the **index** and **value** of each element

for (let i = 0; i < printElements.length; i++) {
  console.log(i, printElements[i]);
}
/// Task 3: First and Last
//Use a `for` loop**
//Write a function that:
//1. Takes an array
//2. Prints:
//- The first element
//-The last element (using `array[array.length - 1]`)

///Task 4: Loop Through a String
//Use a `while` loop**
//Write a function that:
//1. Takes a **string**
//2. Uses a `while` loop
//3. Prints **each character** one by one

const word = "Tesla";
let i = 0;

while (i < word.length) {
  console.log("character:", word[i]);
  i++;
}

/// task 5: Stop When Found
//Use a `for` loop**
//Write a function that:
//1. Takes an array and a value to search for
//2. Loops through the array using a `for` loop
//3. Stops the loop when the value is found

for (let i = 0; i < printElements.length; i++) {
  if (printElements[i] === "Mercedes") {
    break;
  }
  console.log(printElements[i]);
}

///Task 6: Print Values
//Use a `for...of` loop**
//Write a function that:
//1. Takes an array
//2. Prints each value

function printValue(array) {
  for (const car of array) {
    console.log("car:", car);
  }
}
printValue(printElements);

//Task 7: Skip a Value
//Use a `for...of` loop**
//Write a function that:
//1. Takes an array and a value to skip
//2. Prints all va,lues except the skipped one

for (const car of printElements) {
  if (car === "Tesla") continue;
  console.log(car);
}
