// let cart = ["Laptop", "mouse", "keyboard"];
// cart[1] = "headphone";
// console.log(cart);
// console.log(cart.length);

// let mutableCart = [...cart];
// mutableCart.push("headphone");
// console.log("push():", mutableCart);

// mutableCart.push("MacBook Air");
// console.log("push():", mutableCart);

// mutableCart.push("Macbook Pro");
// console.log("push():", mutableCart);

// mutableCart.pop();
// console.log("pop():", mutableCart);

// mutableCart.unshift("iMAc");
// console.log("unshift():", mutableCart);

// mutableCart.unshift("iphone");
// console.log("unshift():", mutableCart);

// mutableCart.shift();
// console.log("shift():", mutableCart);

// mutableCart.shift();
// console.log("shift():", mutableCart);

// mutableCart.reverse();
// console.log("reverse():", mutableCart);

// mutableCart.sort();
// console.log("sort():", mutableCart);

// let numbers = [10, 20, 30, 40];
// numbers.push(50);
// numbers.unshift(5);
// numbers.pop();
// console.log(numbers);

// let fruits = ["apple", "banana", "orange", "grape"];
// fruits.shift();
// fruits.push("kiwi");
// fruits.reverse();
// console.log(fruits);

// let numbers1 = [5, 10, 15, 20, 25];
// numbers1.shift();
// numbers1.pop();
// numbers1.unshift(100);
// numbers1.push(200);
// console.log(numbers1);

// let colors = ["red", "blue", "green", "yellow"];
// colors.shift();
// colors.unshift("black");
// colors.push("white");
// colors.reverse();
// console.log(colors);

// let animals = ["cat", "dog", "bird"];
// animals.push("fish");
// animals.shift();
// animals.unshift("hamster");
// animals.pop();
// console.log(animals);

// let orders = ["ORD101", "ORD102", "ORD103"];
// orders.push("ORD104");
// orders.shift();
// orders.unshift("ORD100");
// console.log(orders);

// let ticker = ["APPL", "TSLA", "MSFT", "NVDA"];
// ticker.pop();
// ticker.push("SPY");
// ticker.reverse();
// console.log(ticker);

// let prices = [185.2, 184.9, 186.1, 185.7];
// let highest = prices.sort();
// highest.push(187.0);
// highest.reverse();
// console.log(highest);

// let prices1 = [101.25, 99.8, 103.5, 100.1];
// prices1.push(102.75);
// prices1.sort((a, b) => a - b);
// prices1.reverse();
// console.log(prices1);

// let numbers2 = [500, 100, 1000, 250];
// numbers2.push(750);
// numbers2.shift();
// numbers2.sort((a, b) => a - b);
// console.log(numbers2);

// let numbers3 = [420.5, 415.25, 430.1];
// numbers3.push(425.75);
// numbers3.unshift(410.0);
// numbers3.sort((a, b) => a - b);
// numbers3.pop();
// console.log(numbers3);

// let numbers4 = [150.25, 148.75, 151.5, 149.9];
// numbers4.push(152.0);
// numbers4.sort((a, b) => a - b);
// numbers4.reverse();
// numbers4.pop();
// numbers4.unshift(153.25);
// console.log(numbers4);

// let numbers5 = [100.5, 101.25, 99.75, 102.0];
// numbers5.push(103.5);
// numbers5.sort((a, b) => a - b);
// numbers5.reverse();
// numbers5.shift();
// numbers5.push(98.5);
// console.log(numbers5);

// let numbers6 = [201.5, 199.75, 203.25, 200.1];
// numbers6.push(204.5);
// numbers6.sort();
// numbers6.shift();
// numbers6.unshift(198.5);
// console.log(numbers6);

// let techStocks = ["AAPL", "MSFT"];
// let etfs = ["SPY", "QQQ"];
// let combine = techStocks.concat(etfs);
// console.log(combine);
// console.log(techStocks);

// let symbols = ["AAPL", "MSFT", "TSLA", "NVDA", "SPY"];
// let selected = symbols.slice(1, 4);
// console.log(selected);
// console.log(symbols);

// let watchlist = ["AAPL", "MSFT", "TSLA", "NVDA", "SPY"];
// console.log(watchlist.indexOf("TSLA"));

// let symbols = ["AAPL", "MSFT", "TSLA", "NVDA"];
// let spyIndex = symbols.indexOf("SPY");
// console.log(spyIndex);

// let trades = ["AAPL", "TSLA", "MSFT", "TSLA", "NVDA"];
// let firstTsla = trades.indexOf("TSLA");
// let lastTsla = trades.lastIndexOf("TSLA");
// console.log(firstTsla);
// console.log(lastTsla);

// let orders = ["BUY", "SELL", "BUY", "BUY", "SELL"];
// let firstIndex = orders.indexOf("BUY");
// let lastIndex = orders.lastIndexOf("BUY");
// console.log(firstIndex);
// console.log(lastIndex);

// let portfolio = ["AAPL", "MSFT", "NVDA", "SPY"];
// let hasNvda = portfolio.includes("NVDA");
// let hasTsla = portfolio.includes("TSLA");
// console.log(hasNvda);
// console.log(hasTsla);

// let trades = ["AAPL", "MSFT", "TSLA", "NVDA"];
// let firstTrade = trades.at(0);
// let lastTrade = trades.at(3);
// console.log(firstTrade);
// console.log(lastTrade);

// let symbols = ["AAPL", "MSFT", "TSLA"];
// let tradeSummary = symbols.join(" | ");
// console.log(tradeSummary);

let ticker = "AAPL";
let letters = Array.from(ticker);
console.log("Array.from():", letters);
