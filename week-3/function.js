///Function Syntax
function greet() {
  console.log("Hello, World");
}

greet();

///Parametres
function greet(name) {
  console.log("Hello, " + name + "!");
}

greet("Alice");
greet("Bob");
greet("NYC");

///Multiple Parametres
function add(a, b) {
  console.log(a + b);
}
add(5, 3);

// ///Default parameters
function greet(name = "guest") {
  console.log("Hello, " + name + "!");
}

greet();
greet("Aliece");

///Return Value
function add(a, b) {
  return a + b;
}
let result = add(5, 3);
console.log(result);

///Arrow Function
const greet = (name) => {
  console.log("Hello, " + name + "!");
};
greet("Charlie");

const greetShort = (name) => console.log("Hello, " + name + "!");
greetShort("Dave");
