///Artihmetic Operators

console.log(5 + 3); //<-Addition

console.log(5 - 3); //<-Subtraction

console.log(2 * 12); //<-Multiplication

console.log(20 / 4); //<-Division

console.log(10 % 3); //<-Modulus

console.log(2 ** 3); //<-Exponatiaton

//Increment (Increase)

let a = 5;
a++; //same a = 5 + 1;
console.log(a);

//Decrement (Decrease)

let b = 3;
b--; //same b = 3 - 1;
console.log(b);

///Comparasion Operators

console.log(5 == " 5 "); //true  <- Equal (value only)

console.log(5 === " 5 "); // false <- //Strict equal (value & type)

console.log(5 > 2); //true, Greater than
console.log(3 > 10); //false, less than
console.log(5 >= 5); //true, Greater than or equal
console.log(1 <= 2); //true

console.log(5 > 3); //true
console.log(!5 > 3); //false

console.log(12 === 12); //true
console.log(12 !== 12); //false
console.log(12 == "12"); //true

///logical Operators

console.log(5 > 3 && 2 < 4); // true, (&&-end) if both conditions are true
console.log(5 > 8 && 2 < 4); //false, (&&-end) if one condition is false

console.log(6 > 3 || 1 > 4); //true, (||-or) if at least one condition is true
