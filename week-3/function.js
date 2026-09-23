//1.Creating a functions
// function greet() {
//   console.log("Hello, World");
// }
// greet(); //greet() - calling the function.

// function greet() {
//   const addition = 2 + 5;
//   console.log(addition);
// }
// greet();
// console.log("Bye Students");

// //2. Function with a single parametr
// function newGreet(name) {
//   console.log(`Hello ${name} welcome to the class!`);
// }
// newGreet("smith");

// function guest(number) {
//   console.log(`Hello Guest! ${number} your order is ready!`);
// }
// guest(15);
// guest(10);

//3. Function with multiple parametrs

// function add(num1, num2, num3, num4, num5) {
//   console.log(num1);
//   console.log(num2);
//   console.log(num3);
//   console.log(num4);
//   console.log(num5);
// }

// add(1, 2, 3, 4, 5);

// function multiplication(num1, num2) {
//   console.log(num1 * num2);
// }
// multiplication(4, 2);

// function printNumber(num1, numb2) {
//   if (num1 > numb2) {
//     console.log("Number is bigger");
//   } else {
//     console.log("Number is smaller");
//   }
// }
// printNumber(1, 2);
// printNumber(5, 4);

// // 4. Default Parametrs

// function greetStudent(name = "student") {
//   console.log(`Hello ${name}, welcome to JavaScreipt class!`);
// }
// greetStudent();
// greetStudent("Alex");

// // 5. Return values
// function addNewNumbers(num1, num2) {
//   return num1 + num2;
// }

// const functionrResult = addNewNumbers(3, 6);
// console.log(functionrResult);

// //or
// function addNewNumbersTwo(num1, num2) {
//   const result = num1 + num2;
//   return result;
// }

// const functionrResultTWo = addNewNumbersTwo(3, 6);
// console.log(functionrResultTWo);

// // 5. Arrow Functions

// const greetStudentTwo = (student) => {
//   console.log(`Hello ${student}, welcome to class!`);
// };
// greetStudentTwo("Davit");

// //another

// const substractTwoNumbers = (num1, num2) => num1 - num2;
// const resultTwo = substractTwoNumbers(5, 3);

// console.log(resultTwo);

// function generateRandomNumber() {
//   return 2;
// }
// const array = ["Red", "Blue", "Green"];
// const rendomNumber = generateRandomNumber();

// console.log(array[rendomNumber]);

// console.log("hello Word!");

// function greet() {
//   console.log("hello Word!");
// }
// greet();

// function newGreet(name) {
//   console.log(`Hello ${name} welcome to the class!`);
// }
// newGreet("Alex");
// newGreet("Smith");

// function add(numb1, numb2) {
//   console.log(numb1 + numb2);
//   console.log(numb1 * numb2);
//   console.log(numb1 / numb2);
// }
// add(5, 5);
// add(2, 6);
// add(1, 2);

// function number(number1, number2) {
//   if (number1 < number2) {
//     console.log("Number is bigger!");
//   } else {
//     console.log("number is smaller!");
//   }
// }
// number(4, 5);
// number(6, 5);

// function greetStudent(name = "student") {
//   console.log(`Hello ${name}, welcome to JavaScriot class`);
// }
// greetStudent("Alex");
// greetStudent();

// function addNumbers(num1, num2) {
//   return num1 + num2;
// }
// const functionresult = addNumbers(1, 2);
// console.log(functionresult);

// function addNumberTwo(num1, num2) {
//   const result = num1 + num2;
//   return result;
// }
// const functionresultTwo = addNumberTwo(1, 2);
// console.log(functionresult);

// const greet = (name) => {
//   console.log(`Hello,` + name + `!`);
// };
// greet("Charlie");

// const greetOne = (name) => console.log(`Hello,` + name + `!`);
// greet("Alex");

// const substactionNumbers = (num1, num2) => num1 - num2;
// const resultTwo = substactionNumbers(6, 5);
// console.log(resultTwo);
// console.log(resultTwo + 22);

function generateRendomNumber() {
  return 2;
}
const array = ["red", "blue", "green"];
const returnRendom = generateRendomNumber();
console.log(array[returnRendom]);
