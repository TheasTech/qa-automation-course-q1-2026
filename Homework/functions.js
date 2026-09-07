const carBrands = ["BMW", "Porsche", "Lexus", "Tesla", "Mercedes-Benz"]; //An array of **car brands**
console.log(carBrands);

const numbers = [10, 20, 30, 40, 50]; // An array of **numbers**
console.log(numbers);

const sentence = " TESLA is an American company that makes electric cars  "; // A sentence about cars
console.log(sentence);

let decimalNumber = 5.7; //A decimal number
console.log(decimalNumber);

///Task 1: Clean & Format Text

function cleanText(text) {
  return text.trim().toLowerCase();
}
console.log(cleanText(sentence));

/// Task 2: First & Last Character

function textCharacter(text) {
  const trimmed = text.trim();
  return [trimmed[0], trimmed[trimmed.length - 1]];
}
console.log(textCharacter(sentence));

// 3. Word Counter
function wordCounter(text) {
  const trimmed1 = text.trim();
  const words = trimmed1.split(" ");
  return words.length;
}
console.log(wordCounter(sentence));

//4.Brand Chacker
function brandChaker(carBrands, carBrand) {
  if (carBrands.includes(carBrand)) {
    return "Brand exists";
  } else {
    return "Brand not found";
  }
}
console.log(brandChaker(carBrands, "Lexus"));

// 5. Get last Brand
function getLastBrand(brands) {
  return brands.at(-1);
}
console.log(getLastBrand(carBrands));

// 6. Format Brand list
function formatBrandlist(brands) {
  return brands.join(", ");
}
console.log(formatBrandlist(carBrands));
