// let text = "Hello";
// console.log(text.length);

// let word = "Hello";
// console.log(word[0]);
// console.log(word[4]);
// console.log(word.toUpperCase());
// console.log(word.toLocaleLowerCase());

// let messy = " JavaScript   ";
// console.log(messy.trim());
// console.log(messy.trim().slice(0, 4));
// console.log(messy.trim().slice(4));

// let texts = " I like cats    ";
// console.log(texts.trim().replace("cats", "dogs"));
// console.log(texts.includes("cats"));
// console.log(texts.includes("@"));
// console.log(texts.trim().split(","));
// console.log(texts.trim().split(""));

// let stri1 = "Hello";
// let stri2 = "World";
// console.log(stri1.concat(" ", stri2));
// console.log(stri1.concat(",", texts));
// console.log(texts.trim().indexOf("cats"));
// console.log(texts.indexOf("dogs"));

// let file = "report.pdf";
// console.log(file.startsWith("report"));
// console.log(file.endsWith("pdf"));

// let name = "Alice";
// let greeting = `Hello, ${name}!`;
// console.log(greeting);

// let a = 5,
//   b = 6;
// console.log(`The sum of ${a} and ${b} is ${a + b}`);

// let user = "alice",
//   score = 150;
// console.log(`Player: ${user.toUpperCase()}, score:${score}`);
// console.log(`Player: ${user}, score:${score}`);

// let symbol = "  aapl ";
// console.log(symbol.trim().toUpperCase());

// let company = "Apple";
// console.log(company.length);
// console.log(company[0]);
// console.log(company[4]);

// let order = "BUY-AAPL-100";
// console.log(order.includes("AAPL"));
// console.log(order.split("-"));

// let fileName = "Trade_report.cvs";
// console.log(fileName.startsWith("Trade"));
// console.log(fileName.endsWith("cvs"));

// let message = "Order rejected";
// console.log(message.replace("rejected", "accepted"));

// let symbol = "MSFT";
// console.log(symbol.slice(0, 2));
// console.log(symbol.slice(2, 4));
// console.log(symbol.slice(-2));

// let trade = "SELL-TSLA-250";
// console.log(trade.split("-"));
// console.log(trade.split("-")[1]);
// console.log(trade.split("-")[2]);

// let status = " rejected  ";
// console.log(status.trim().toUpperCase() === "REJECTED");

// let message = "Order 123 was rejected";
// console.log(message.includes("123"));
// console.log(message.replace("rejected", "accepted"));

let orderInfo = " BUY|NVDA|50  ";
console.log(orderInfo.trim().split("|")[1]);
console.log(orderInfo.trim().split("|")[2]);
console.log(orderInfo.trim().startsWith("BUY"));

let tradeData = "SELL|AAPL|100|REJECTED";
console.log(tradeData.split("|"));
console.log(tradeData.split("|")[1]);
console.log(tradeData.split("|")[3]);
console.log(tradeData.endsWith("REJECTED"));

let symbol = "NASDAQ:AAPL";
console.log(symbol.indexOf(":"));
console.log(symbol.slice(7));
