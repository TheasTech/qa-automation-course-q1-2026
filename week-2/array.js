//Accessing Array Elements

let fruits = ["Apple", "Banana", "Charry"];

console.log(fruits[0]); //first element "Apple"
console.log(fruits[1]); //second element "Banana"
console.log(fruits[2]); //thirt element "Cherry"

//Updating Element in an Array

fruits[1] = "Mango";
console.log(fruits); //[ 'Apple', 'Mango', 'Charry' ]

//Array Properties .length

console.log(fruits.length); //3 elements

///Array Methods

//concat ()
const colors = ["red", "blue"];
const moreColors = ["yellow", "white"];
const allcolors = colors.concat(moreColors);

console.log(colors); //[ 'red', 'blue' ]
console.log(moreColors); //[ 'yellow', 'white' ]
console.log(allcolors); //[ 'red', 'blue', 'yellow', 'white' ]

//flat ()
const nestedArr = [
  [1, 2],
  [3, 4],
  [5, 6, 7, 8],
];
const flattenedArr = nestedArr.flat();
console.log(nestedArr[2].length); // 4

console.log(nestedArr);
console.log(flattenedArr);

//slice()
const grapes = ["A", "B", "C", "D", "E"];
const slicedGrapes = grapes.slice(1, 4); // ["A", "B", "C", "D", "E"];
console.log(slicedGrapes); //[ 'B', 'C', 'D' ]

///The Mutators

const mutableFruits = [...fruits]; //[ 'Apple', 'Mango', 'Charry']
console.log(fruits); //[ 'Apple', 'Mango', 'Charry']

//push -add an element to the end
mutableFruits.push("kiwi");
console.log(mutableFruits);

//pop - removes the last element
mutableFruits.pop();
console.log(mutableFruits);

//unshift - adds an element to the start
mutableFruits.unshift("grapes");
console.log(mutableFruits);

//shift -removes the first element
mutableFruits.shift();
console.log(mutableFruits); //[ 'Apple', 'Mango', 'Charry' ]

//reverse() - reverse the order
mutableFruits.reverse();
console.log(mutableFruits);

//sort
mutableFruits.sort();
console.log(mutableFruits); //[ 'Apple', 'Charry', 'Mango' ]

//check the original array
console.log(fruits);

///The Finders
//Indexof
const cars = ["BMD", "Mercedes", "Tesla", "KIA", "Jeep"];
console.log(cars.indexOf("Tesla")); //2

//lastIndexof()
console.log(cars.lastIndexOf("KIA"));

//at
console.log(cars.at(2));

//includes
console.log(cars.includes("Jeep"));

//The Joiners & Converters
//join()
console.log(cars.join("/ "));

//Array.from()
const str = "Hello";
console.log(Array.from(str)); //[ 'H', 'e', 'l', 'l', 'o' ]

//Array.isArray()
const luckyNumbers = [7, 10, 19];
console.log(Array.isArray(luckyNumbers)); //true

const studentName = "Alice";
console.log(Array.isArray(studentName)); //false
