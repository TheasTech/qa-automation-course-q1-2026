//1.Creating a functions
function greet() {
  console.log("Hello, World");
}
greet(); //greet() - calling the function.

//2. Function with a single parametr
function newGreet(name) {
  console.log(`Hello ${name} welcome to the class!`);
}
newGreet("smith");

function guest(number) {
  console.log(`Hello Guest! ${number} your order is ready!`);
}
guest(15);
guest(10);

//3. Function with multiple parametrs

function add(num1, num2, num3, num4, num5) {
  console.log(num1);
  console.log(num2);
  console.log(num3);
  console.log(num4);
  console.log(num5);
}

add(1, 2, 3, 4, 5);

function multiplication(num1, num2) {
  console.log(num1 * num2);
}
multiplication(4, 2);

function printNumber(num1, numb2) {
  if (num1 > numb2) {
    console.log("Number is bigger");
  } else {
    console.log("Number is smaller");
  }
}
printNumber(1, 2);
printNumber(5, 4);

// 4. Default Parametrs

function greetStudent(name = "student") {
  console.log(`Hello ${name}, welcome to JavaScreipt class!`);
}
greetStudent();
greetStudent("Alex");

// 5. Return values
function addNewNumbers(num1, num2) {
  return num1 + num2;
}

const functionrResult = addNewNumbers(3, 6);
console.log(functionrResult);

//or
function addNewNumbersTwo(num1, num2) {
  const result = num1 + num2;
  return result;
}

const functionrResultTWo = addNewNumbersTwo(3, 6);
console.log(functionrResultTWo);

// 5. Arrow Functions

const greetStudentTwo = (student) => {
  console.log(`Hello ${student}, welcome to class!`);
};
greetStudentTwo("Davit");

//another

const substractTwoNumbers = (num1, num2) => num1 - num2;
const resultTwo = substractTwoNumbers(5, 3);

console.log(resultTwo);

function generateRandomNumber() {
  return 2;
}
const array = ["Red", "Blue", "Green"];
const rendomNumber = generateRandomNumber();

console.log(array[rendomNumber]);
