//Accedding array elements
// let fruits = ["Apple", "Banana", "Cherry"];
// console.log(fruits[0]); //Apple
// console.log(fruits[1]); //Banana
// console.log(fruits[2]); //Cherry

// //Updating element in an array
// fruits[1] = "Mango"; //Apple, Mango, Cherry
// console.log(fruits);

// //Lenght
// console.log(fruits.length);

//concat

// const colors = ["red", "blue"];
// const moreColors = ["yellow", "white"];
// const allColore = colors.concat(moreColors);

//flat

//slice
const grapes = ["a", "b", "c", "d", "e"];
const slicedGrapes = grapes.slice(1, 4);
console.log(grapes);
console.log(slicedGrapes);

//Finders
const cars = ["BWM", "KIA", "TESLA", "JEEP"];
console.log(cars.indexOf("TESLA"));

//includes

console.log(cars.includes("KIA"));

///joiners & convertors

console.log(cars.join(" / "));

//from
const str = "Hello";
const chars = Array.from(str);
