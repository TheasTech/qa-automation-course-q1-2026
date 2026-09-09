// // 1.Checking if a Key Exists
// const person = {
//   name: "Alice",
//   age: 25,
//   isStudents: true,
// };
// console.log("name" in person); //true
// console.log("weight" in person); //false

// // 2. dot vs bracket Notation

// const person = {
//   name: "Alice",
//   age: 25,
//   isStudent: true,
// };

// console.log(person.name);
// console.log(person.age);
// console.log(person.isStudent);

// console.log(person["name"]);
// console.log(person["age"]);
// console.log(person["isStudent"]);

// // 3. dot vs bracket - Syntax
// let user = { " first name": "Alex" };
// console.log(user[" first name"]);

// // 4.dot and bracket -key rules

// let user = { "first name": "Alex" };
// console.log(user.first name); //error
// console.log(user["first name"]); //alex

// // 5. dot and bracket -looping
// let user = { name: "Alex", age: 25 };

// for (const key in user) {
//   console.log(user[key]);
// }

// // 6.looping through object properties
// const person = { name: "Alice", age: 25, isStudents: true };

// for (const key in person) {
//   console.log(key + ": " + person[key]);
// }

// // 7.adding and updating propertis
// const person = {
//   name: "Alice",
//   age: 25,
//   isStudents: true,
// };

// person.height = 170; //adding a new property
// console.log(person);

// person.age = 26;
// console.log(person);

// // 8.Removing Properties
// const person = {
//   name: "Alice",
//   age: 25,
//   isStudents: true,
// };
// delete person.isStudents;
// console.log(person);

// // 10. nested objects
// const student = {
//   name: "Bob",
//   grades: {
//     math: 90,
//     science: 85,
//     geometry: 88,
//     econometries: 92,
//   },
// };
// student.grades.econometries = 98;
// student.grades.history = 75;
// console.log(student.grades);

// console.log(student.grades.math);

// //11.object methods

// const person = {
//   name: "Alice",
//   age: 25,
//   isStudents: true,
//   greet: function () {
//     console.log("Hello this is Alice");
//   },
//   greetTwo() {
//     console.log("Hello this is Alice 2");
//   },
// };
// person.greet();
// person.greetTwo();

// //12. Using "this" in methods
// const car = {
//   brand: "Tesla",
//   speed: 120,
//   info() {
//     console.log(`${this.brand} is going at ${this.speed} km/h`);
//   },
// };

// car.info();

// // 13. MEthods with Parametes
// const calculator = {
//   add(a, b) {
//     return a + b;
//   },
//   multiply(a, b) {
//     return a * b;
//   },
// };
// console.log(calculator.add(2, 4));
// console.log(calculator.multiply(3, 5));

// // 14. built-in object methods
// const person = {
//   name: "Alice",
//   age: 25,
// };

// const array = Object.keys(person);
// console.log(Object.keys(person).includes("age"));

// console.log(Object.keys(person));
// console.log(Object.values(person));
// console.log(Object.entries(person));

// let car = { maxSpeed: 150 };
// console.log(car.maxSpeed);
// console.log(car["maxSpeed"]);

// const person = {
//   name: "alex",
//   age: 25,
//   isStudent: true,
// };
// for (let key in person) {
//   console.log(key + ": " + person[key]);
// }

// const person = {
//   name: "Alex",
//   age: 20,
//   isStudent: true,
// };
// person.height = 170;
// ((person.age = 21), console.log(person.height));
// console.log(person.age);

// delete person.isStudent;
// console.log(person.isStudent); //undefined
// console.log(person); //{ name: 'Alex', age: 21, height: 170 }

// const student = {
//   name: " Alex",
//   grades: {
//     math: 80,
//     science: 95,
//     history: 100,
//   },
// };
// student.grades.math = 90;
// console.log(student.grades.math);
// console.log(student);
// console.log(student.grades);

// const person = {
//   name: "Alice",
//   age: 25,
//   greet: function () {
//     console.log("Hello, my name is " + this.name);
//   },
// };
// person.greet();

// const person = {
//   name: "Alice",
//   age: 25,
//   greet() {
//     console.log(`Hi! I am ${this.name}`);
//   },
// };
// person.greet();

// const car = {
//   brand: "Tesla",
//   speed: 120,
//   info() {
//     console.log(`${this.brand} is going at ${this.speed} km/h`);
//   },
// };
// car.info();

// const calculator = {
//   add(a, b) {
//     return a + b;
//   },
//   multiply(a, b) {
//     return a * b;
//   },
// };
// console.log(calculator.add(5, 3));
// console.log(calculator.multiply(3, 4));

const car = {
  brand: "Tesla",
  speed: 120,
  color: "White",
};

console.log(Object.keys(car));
console.log(Object.values(car));
console.log(Object.entries(car));
