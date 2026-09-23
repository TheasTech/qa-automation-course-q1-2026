// const user = {
//   name: "John",
//   age: 25,
// };
// console.log(user.name);
// console.log(user["name"]);

const car = {
  brand: "BMW",
  speed: 120,
};

car.speed = 150;
car.color = "black";
delete car.brand;

console.log(car);

const person = {
  name: "Ana",
  age: 22,
};

for (let key in person) {
  console.log(person[key]);
}
