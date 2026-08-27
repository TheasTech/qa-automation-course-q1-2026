///1. Identify the Data Type

// "Hello World" <- string
// 42 <- Number
// true <- boolean
// let undefined <- undefined
// [1, 2, 3] <- array
// name: "Alex", age: 20, <- object

///2. Create Variables

let favoriteMovie = "Oppenheimer"; // <- string
let likeJavaScript = true; // <- boolean
let movieName; // <- undefined
const movieTheaterSeatNumber = null; // <- null

//3.Primitive vs Non-Primitive
let a = "JS";
let b = [10, 20];
let c = 100;
let d = { city: "Paris" };

console.log(typeof a); //sting, Primitive Dete Types - single value, exp:String, Number, Boolean, Null,Undefined,Symbol,Biglnt
console.log(typeof b); //object, Non-primitive Data Tyoes - multiple value, exp:Object,Array,Function,Date,RegExp
console.log(typeof c); //number, Primitive Dete Types - single value, exp:String, Number, Boolean, Null,Undefined,Symbol,Biglnt
console.log(typeof d); //Object, Non-primitive Data Tyoes - multiple value, exp:Object,Array,Function,Date,RegExp

//4.Array
const NYC = ["Brooklyn", "Manhattan", "The Bronx", "Queens", "Staten Island"];
console.log(NYC);

const years = [2022, 2023, true, 2025, 2026];
console.log(years);

// //5.object

const president = {
  name: "Donald Trump",
  age: 80,
  born: "New York",
  isHeUsaPresidentNow: true,
  isHeNextPresident: undefined,
};
console.log(president);

const iphone = {
  name: "Iphone 17 Pro Max",
  year: 2025,
  color: "silver",
  isItAppleProduct: true,
  isItStock: null,
};
console.log(iphone);

const car = {
  name: "Tesla",
  year: 2026,
  color: "Black",
  inStock: null,
  features: ["electorinc", "driver assistance", "Phone Key"],
};
console.log(car);

// //6. if statement
let number = 12;
if (5 > 0) {
  console.log("positive number");
}

//7.
let isSubwayWorking = true;

if (isSubwayWorking) {
  console.log(" We can go by subway");
} else {
  console.log("We can go by bus");
}
console.log(isSubwayWorking);

// //8.

let score = 81;

if (score > 90) {
  console.log("Grade A");
} else if (score > 80) {
  console.log("Grade B");
} else if (score >= 70) {
  console.log("Grade C");
} else {
  console.log("Fail");
}

// //9.

let dressPrice = "50% price off";

switch (dressPrice) {
  case "10% price off":
    console.log("Do not buy");
    break;
  case "30% price off":
    console.log("Do not buy");
    break;
  case "50% price off":
    console.log("Buy");
    break;
  default:
    console.log("Unknown dress discount");
}
