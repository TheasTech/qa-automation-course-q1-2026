// /// Operators Practice.
// //1:Arithmetic Operators
let numberOne = 100;
let numberTwo = 50;

console.log(numberOne + numberTwo); //console.log(100 + 500);
console.log(numberOne - numberTwo); //console.log(100 - 500);
console.log(numberOne * numberTwo); //console.log(100 * 500);
console.log(numberOne / numberTwo); //console.log(100 / 500);

// //2.Create a number (increase and decrease)

let a = 100; //<- increase
a++;
console.log(a);

let b = 100; //<- decrease
b--;
console.log(b);

// //3.Creare two number and print, gthe remainder when the first is divided by the second

let numberFirst = 23;
let numberSecend = 5;
console.log(numberFirst % numberSecend);

// //4.Create a number and raise it to the power of 3.

let c = 4;
console.log(c ** 3);

///Part 2:Comparision Operators
//1.
let number7 = 7;
let string7 = "7";
console.log(number7 === string7);

// //2.
let greater = 20;
let less = 10;
console.log(greater > less);
console.log(greater < less);

//3.
let valueOne = 7;
let valueTwo = 8;
console.log(valueOne !== valueTwo);

///Part 3: Logical Operators
//1.
console.log(5 > 4 && 9 < 10);
//2
console.log(20 > 19 || 6 < 4);
//3.
console.log(!11 < 12);

///4:Truthy vs Falsy
//1.

if (0) {
  console.log("Falsy value detected");
}

// //2.
if (10) {
  console.log("Truthy value detected");
}

//3.
let OR = "Print" || null;
console.log(OR);
