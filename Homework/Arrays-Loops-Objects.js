//1. Combine Two Arrays
// let trades1 = ["AAPL", "TSLA", "MSFT"];
// let trades2 = ["SPY", "NVDA"];
// function combinesArray(trades1, trades2) {
//   const combine = [];
//   for (const item of trades1) {
//     combine.push(item);
//   }
//   for (const item of trades2) {
//     combine.push(item);
//   }
//   return combine;
// }
// const result = combinesArray(trades1, trades2);
// console.log(result);

//2: Combine and Print

// 2: Combine and Print
// let trades1 = ["AAPL", "TSLA", "MSFT"];
// let trades2 = ["SPY", "NVDA"];
// function combineTrades(trades1, trades2) {
//   const combine = [];
//   for (let i = 0; i < trades1.length; i++) {
//     combine.push(trades1[i]);
//   }
//   for (let i = 0; i < trades2.length; i++) {
//     combine.push(trades2[i]);
//   }
//   for (let i = 0; i < combine.length; i++) {
//     console.log(combine[i]);
//   }
// }
// combineTrades(trades1, trades2);

//3: Combine Numbers
// let numbersOne = [100, 200, 300, 400];
// let numbersTwo = [500, 600, 700, 800];
// function allNumbers(numbersOne, numbersTwo) {
//   const numbers = [];
//   for (const item of numbersOne) {
//     numbers.push(item);
//   }
//   for (const item of numbersTwo) {
//     numbers.push(item);
//   }
//   return numbers;
// }
// const result = allNumbers(numbersOne, numbersTwo);
// console.log(result);

//5:Task 5: Count Numbers Greater Than 10
let numbers = [100, 200, 300, 400];
function numbersGreater(numbers) {
  const greater = numbers.find((num) => num > 10);
  return greater;
  console.log("find():", greater);
}
