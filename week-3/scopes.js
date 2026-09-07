//Global

let globalVar = "hello";
console.log(globalVar); //Accessible everywhere

//Function Scope
function greet() {
  let massage = "Hello from the function!";
  console.log(massage);
}
greet();

function greetTwo() {
  let massage = "hello from inside the function!";
  console.log(massage);

  if (5 > 2) {
    console.log(massage);
  }
}
greetTwo();

//Black Scope
if (true) {
  let blockVar = "I am inside a block";
  console.log(blockVar);
}

function testQA() {
  const massage = "Whatever";
  if (10 > 1) {
    console.log(massage);
  } else if (5 > 2) {
    const addition = 5 + 2;
    console.log(addition);
  } else {
    console.log(globalVar);
  }
}
testQA();
