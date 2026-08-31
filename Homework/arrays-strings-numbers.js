let carBrands = ["BMW", "Porsche", "Lexus", "Tesla", "Mercedes-Benz"]; //An array of **car brands** (at least 5)

console.log(carBrands[0]); //Log the first car brand

const sliced = carBrands.slice(-1);
console.log("slice(-1):", sliced); //Log the last car brand using a method

console.log(carBrands.length); //Log how many car brands are in the array

carBrands[1] = "Audi";
console.log(carBrands); // Change the **second car brand**

carBrands[4] = "Volvo";
console.log(carBrands); // Change the **last car brand**

console.log(carBrands); //Log the updated array

carBrands.push("Jeep");
console.log("push():", carBrands); // Add a new car brand to the **end**

carBrands.pop();
console.log("pop():", carBrands); // Remove the **last** car brand

carBrands.unshift("Nissan");
console.log("unshift():", carBrands); //Add a new car brand to the **beginning**

carBrands.shift();
console.log("shift():", carBrands); // Remove the **first** car brand

carBrands.reverse();
console.log("reverse():", carBrands); // Reverse the array

carBrands.sort();
console.log("sort():", carBrands); // Sort the array alphabetically

const carOne = carBrands.includes("Toyota");
console.log("includes():", carOne); // Check if `"Toyota"` exists in the array

const indexOfcars = carBrands.indexOf("BMW");
console.log("indexOf:", indexOfcars); // Find the index of `"BMW"`

const lastindeOfcar = carBrands.lastIndexOf("Volvo");
console.log("lastindexOf():", lastindeOfcar); //Find the last index of a car brand that appears more than once

const carBrandsString = carBrands.join(", ");
console.log("join():", carBrandsString); // Convert the car brands array into a **single string**

console.log("Array.isArray(carBrands):", Array.isArray(carBrands)); // Check if the car brands variable is an array
// Convert the word `"ENGINE"` into an array of characters

let number = [10, 20, 30, 40, 50]; //An array of **numbers**

let string = "Macbook Air "; //A **string** with extra spaces

console.log(string.trim()); // Remove extra spaces from the string
// Log the cleaned string

console.log(string.length); // Log its length

console.log(string.toUpperCase()); // Convert the string to **uppercase**
console.log(string.toLowerCase()); //Convert it to **lowercase**
console.log(string[0]); //Log the **first** character
console.log(string[10]); //Log the **last** character

console.log(string.slice(0, 8)); // Extract the **first word**
console.log(string.slice(8)); // Extract the **last word**
console.log(string.replace("Air", "Pro")); // Replace one word with another

const cleanedString = string.trim();
console.log(cleanedString.includes("car")); //heck if the string includes `"car"`
console.log(cleanedString.includes("Mac")); //Find the position of a word
console.log(cleanedString.startsWith("Macbook")); // Check if the string starts with a specific word
console.log(cleanedString.endsWith("Air")); // Check if the string ends with a specific word

console.log(cleanedString.split(" ")); // Split the sentence into words
let strOne = "Macbook Air";
let strTwo = "Macbook Pro";
console.log(strOne.concat(" ", strTwo)); // Join two strings using a method (not `+`)
const carBrand = "Tesla"; //car brand
const carYear = 2024; //car year (has to be in the past)
console.log(2026 - carYear); //car age (think about how you get the car age)

let decimalNumber = 5.9; //A **decimal number**
console.log(Math.round(decimalNumber)); // Round a decimal normally
console.log(Math.floor(decimalNumber)); // Always round down
console.log(Math.ceil(decimalNumber)); // Always round up
console.log(Math.trunc(decimalNumber)); // Remove the decimal part

console.log((5.987765).toFixed(2)); //Format a number to **2 decimal places**
// Explain (in comments) why the result is **not a number**
//console.log("5"); //Convert a numeric string into a number
//console.log("5.5"); //Convert a decimal string into an integer
// Convert a decimal string into a float
console.log(isNaN("BMD")); //Check if a value is **Not a Number**
// Check if a number is an integer
//Find the absolute value of a number
console.log(Math.min(1, 4, 7)); // Find the smallest number
console.log(Math.max(1, 4, 7)); //Find the largest number
console.log(Math.pow(4, 5)); //Raise a number to a power
//Find the square root of a number
// Generate a random number between 0 and 1
// Generate a random whole number between **1 and 10**
// Explain the formula in comments
