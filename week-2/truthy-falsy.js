//&& - End

console.log(0 && "Hello"); //0. <-returns first falsy value
console.log("" && 0); //"" . <- if both falsy, it does not show anything
console.log("Hi" && "World"); //"World". <- if both true, returns last true value

// || or
console.log(0 || 42); //it is first show which is true
console.log(100 || 100); //it is first show which is true

//! Not
console.log(!(5 > 3)); //false
console.log(!0); //true
console.log(!false); //true

console.log(true && true); //true
console.log(!(true && true)); //false
console.log(false && true); //false
console.log(!(false && true)); //true
