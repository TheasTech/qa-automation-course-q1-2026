let cart = ["Laptop", "mouse", "keyboard"];
cart[1] = "headphone";
console.log(cart);
console.log(cart.length);

let mutableCart = [...cart];
mutableCart.push("headphone");
console.log("push():", mutableCart);

mutableCart.push("MacBook Air");
console.log("push():", mutableCart);

mutableCart.push("Macbook Pro");
console.log("push():", mutableCart);

mutableCart.pop();
console.log("pop():", mutableCart);

mutableCart.unshift("iMAc");
console.log("unshift():", mutableCart);

mutableCart.unshift("iphone");
console.log("unshift():", mutableCart);

mutableCart.shift();
console.log("shift():", mutableCart);

mutableCart.shift();
console.log("shift():", mutableCart);

mutableCart.reverse();
console.log("reverse():", mutableCart);

mutableCart.sort();
console.log("sort():", mutableCart);
