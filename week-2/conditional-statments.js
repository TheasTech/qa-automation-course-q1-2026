//if

let age = 24;

if (age > 18) {
  console.log("You are above the age limit to enter our website.");
}

age = 17;

if (age > 18) {
  console.log("You are above the age limit to enter our website!"); //does not show value !! you are not adult
}

//Else if

let score = 75;

if (score > 90) {
  console.log("grade A"); //Grade A
} else if (score > 82) {
  console.log("grade B"); //Grade B
} else {
  console.log("grade C"); //Grade C
}

//Switch

let day = 2;
switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  default:
    console.log("Invalid day");
}

let light = "green";

switch (light) {
  case "red":
    console.log("stop");
    break;
  case "yellow":
    console.log(Wait);
    break;
  case "green":
    console.log("go");
    break;
  default:
    console.log("Unknow color");
}
