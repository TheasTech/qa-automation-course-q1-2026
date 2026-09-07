// 1.The for loop

// for (let i = 1; i <= 5; i++) {
//   console.log(`count: ${i}`);
// }

// for (let i = 1; i <= 5; i++) {
//   console.log("count:", i);
// }
// //Run (iteration) 1: i = 1; -> count:1
// //Run (iteration) 2: i = 2; -> count:2
// //Run (iteration) 3: i = 3; -> count:3
// //Run (iteration) 4: i = 4; -> count:4
// //Run (iteration) 5: i = 5; -> count:5
// //Run (iteration) 6: i = 6; -> no print

// // 3. Looping through an Array
// const fruits = ["apple", "banana", "orange"]; //.lenght = 3
// for (let i = 0; i < fruits.length; i++) {
//   console.log("fruit:", fruits[i]);
// }

// // 4. looping each character in a string

// const word = "hello";
// for (let i = 0; i < word.length; i++) {
//   console.log("Character:", word[i]);
// }

// // 5. the while loop

// let isLightOn = true;
// while (isLightOn) {
//   console.log("hello students");
//   isLightOn = false;
// }

let i = 1;
while (i <= 5) {
  console.log("count:", i);
  i++;
}

//'for of' loop
const colors = ["green", "red", "blue", "yellow"];
for (const color of colors) {
  console.log(` i like all the folow colots: ${color}`);
}
