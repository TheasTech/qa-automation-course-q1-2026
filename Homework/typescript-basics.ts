//Task 1: String Variables
const studentName: string = "Thea";
console.log(studentName);

let course: string = "TypeScript";
console.log(course);

//Task 2: Number Variables
let age: number = 20;
let price: number = 100.5;

//Task 3: Boolean Variables
let isStudent: boolean = true;
let isOnline: boolean = false;

//Task 4: Flexible Variable
let randomValue: any = 200;
randomValue = "Drees";
randomValue = true;

//Task 5: Let TypeScript Guess the Type
let city = "NYC";
// city = 25; //error Type 'number' is not assignable to type 'string'.

//Task 6: String Array
const carBrands: string[] = ["BMW", "Audi", "Tesla", "Jeep"];

//Task 7: Number Array
let scores: number[] = [75, 80, 85, 90, 95];

//Task 8: Simple Object
let user: { name: string; age: number; isAdmin: boolean } = {
  name: "Alex",
  age: 25,
  isAdmin: true,
};

//Task 9: Product Object
let product: { title: string; price: number; inStock: boolean } = {
  title: "iPhone 18",
  price: 100,
  inStock: true,
};

//Task 10: Real-World Data
let students: { name: string; age: number; isActive: boolean }[] = [
  { name: "Alex", age: 20, isActive: true },
  { name: "Oliver", age: 22, isActive: false },
  { name: "Emma", age: 20, isActive: true },
];
console.log(students);
