let age = 25;
console.log(age);

let price = 9.99;
console.log(price);

let temperature = -3;
console.log(temperature);

console.log(5 + 3);
console.log(10 - 4);
console.log(6 * 3);
console.log(5 / 2);
console.log(5 % 2);

console.log(2 > 1);
console.log(2 < 1);
console.log(5 === 5); //true
console.log(5 !== 3); //true

// ///Rounding Numbers
console.log(Math.round(1.5));
console.log(Math.round(4.6));
console.log(Math.round(4.3));
console.log(Math.round(2.99));

console.log(Math.floor(4.9));
console.log(Math.floor(4.1));

console.log(Math.ceil(4.1));
console.log(Math.ceil(4.9));

console.log(Math.trunc(4.9));
console.log(Math.trunc(-4.9));

// ///Formating Numbers
let price = 9.569;
price = 5.677;

console.log(price.toFixed(2));
console.log(price.toFixed(1));

///Converting Numbers
console.log(Number("42"));
console.log(Number("abc"));

///parsent()
console.log(parseInt("10.5"));
console.log(parseInt("2.9"));

///persafloat()
console.log(parseFloat("10.5"));

///Checking Numbers
console.log(isNaN("abc"));
console.log(isNaN("3"));

///Number.isInteger
console.log(Number.isInteger(5));
console.log(Number.isInteger(5.5));

// ///Math Utility Methods
console.log(Math.abs(-10));
console.log(Math.abs(5));
console.log(Math.abs(0));

///Math min
console.log(Math.min(3, 7, 2));
console.log(Math.min(5, 3, 1, 0));

///math max()
console.log(Math.max(2, 5, 8, 9));

///Math.pow
console.log(Math.pow(2, 2));

///Math.random
let random200to300 = Math.floor(Math.random() * (300 - 200 + 1)) + 200;
console.log(random200to300);
