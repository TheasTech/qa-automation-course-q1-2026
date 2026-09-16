// string

let name = "John";
let nameTwo = "Alex";
let nameThree = "Ronaldo";
const myNumber = "1998"; // <-string

//Number

const birthYear = 1965;
const anothwrNumber = 2.5;

//boolean

let isLightOn = false;
console.log("is the light on?", isLightOn);

// after 1 hours you come back

isLightOn = true;
console.log("is the light on?", isLightOn);

//Null

let seatOwner = null; // <-No one is sitting here yet
console.log(seatOwner);

//one 1 hours passes, someone takes the seat

seatOwner = "Ava";
console.log(seatOwner);

//undefind

let studentPresent; //<-not assigned=undefind
console.log(studentPresent);

//later, after checking attendece

studentPresent = true; // <-assigned
console.log(studentPresent);

//Array

const color = ["red", "green", "blue"]; //<- keep the same data types (just sting or number)
const whatever = ["red", 5, true];
console.log(color);

//Object

const person = {
  name: "Alex",
  age: 25,
  isStudent: true,
};

let age = 19;
if (age > 18) {
  console.log("You are an adolt");
}

let score = 81;
if (score > 90) {
  console.log("Grade A");
} else if (score > 80) {
  console.log("Grade B");
} else {
  console.log("Grade C");
}

let temperature = 25;
if (temperature > 30) {
  console.log("Hot");
} else if (temperature > 20) {
  console.log("Warm");
} else {
  console.log("Cold");
}

let age = 22;
if (age >= 65) {
  console.log("Senior");
} else if (age > 18) {
  console.log("Adult");
} else {
  console.log("Minor");
}

let orderValue = 7500;
if (orderValue >= 10000) {
  console.log("Large Order");
} else if (orderValue >= 5000) {
  console.log("Medium Order");
} else {
  console.log("small order");
}

let priceChange = -3;
if (priceChange > 0) {
  console.log("Price Up");
} else if (priceChange < 0) {
  console.log("Price Down");
} else {
  console.log("No Change");
}
let orderStatus = "filled";
if (orderStatus === "filled") {
  console.log("Order Completed");
} else if (orderStatus === "partially-filled") {
  console.log("order partially completed");
} else {
  console.log("order not completed");
}

let day = 3;
switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  default:
    console.log("invalid day");
}

let orderType = "Limit";

switch (orderType) {
  case "Market":
    console.log("Market order selected");
    break;
  case "Limit":
    console.log("limit order selected");
    break;
  case "Stop":
    console.log("Stop order selected");
    break;
  default:
    console.log("invalid order type");
}

let side = "BUY";
switch (side) {
  case "BUY":
    console.log("buy order");
    break;
  case "SELL":
    console.log("Sell order");
    break;
  case "SHORT":
    console.log("Short sell order");
    break;
  default:
    console.log("Invalid side");
}

let tif = "DAY";
switch (tif) {
  case "DAY":
    console.log("Order valid for today");
    break;
  case "GTC":
    console.log("Good till cancaled");
    break;
  case "IOC":
    console.log("Immediate or cancel");
    break;
  default:
    console.log("Invalid time in force");
}

let isRaining = false;
if (isRaining) {
  console.log("Take an umbrela");
} else {
  console.log("No umbrella needed");
}

let marketOpen = true;
if (marketOpen) {
  console.log("trading is allowed");
} else {
  console.log("Market is closed");
}

let hasBuyingPower = true;
let marketOpen = false;
if (hasBuyingPower && marketOpen) {
  console.log("order can be submitted");
} else {
  console.log("Order cannot be submitted");
}
