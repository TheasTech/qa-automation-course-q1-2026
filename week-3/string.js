let single = "Hello"; //single quotes
let duble = "Hello"; //double quotes
let backtick = `Hello`; //backticks

console.log(single);
console.log(duble);
console.log(backtick);

///string Lenght
let text = "JavaScript";
console.log(text.length);

///Accessing Characters
let word = "Hello";
console.log(word[0]);
console.log(word[4]);

let greeting = "Hello World";
console.log(greeting.toUpperCase());
console.log(greeting.toLocaleLowerCase());

///Trim
let messy = "   Javascript     ";
console.log(messy.trim());

///slice(start, end)
let text = "javaScript";
console.log(text.slice(0, 4));
console.log(text.slice(4));

///replace (searchValue, newValue);

let text = "I like cats";
console.log(text.replace("cats", "dogs"));

///Includes(substring)
let sentence = "I love coding";
console.log(sentence.includes("love"));
console.log(sentence.includes("hate"));

///Split(seperator)
let fruit = "Apple, Banana, rape";
console.log(fruit.split(","));
console.log(fruit.split(""));

///concat(string1,string2,...)
let str1 = "Hello",
  str2 = "World";
console.log(str1.concat(" ", str2));

///indexOf(substring)
let text = "javaScript is awesome";
console.log(text.indexOf("Script"));
console.log(text.indexOf("Python"));

///startsWith(), endWith()
let file = "report.pdf";
console.log(file.startsWith("report"));
console.log(file.endsWith("pdf"));

///Template Literal
let name = "Alice";
let greeting = `Hello, ${name}!`;
console.log(greeting);

name = "Thea";
greeting = `Hello, ${name}!`;
console.log(greeting);

/// Expressions Inside
let a = 5,
  b = 10;
console.log(`the sum of the ${a} and ${b} is ${a + b}`);

///Combining Methods + Template Literals
let user = "alice",
  score = 150;
console.log(`player: ${user.toUpperCase()},Score:${score}`);
