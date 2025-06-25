console.log("FOR LOOP:");
for (let i = 1; i <= 5; i++) {
  console.log(i);
}

console.log("WHILE LOOP:");
let j = 1;
while (j <= 5) {
  console.log(j);
  j++;
}

console.log("DO...WHILE LOOP:");
let k = 1;
do {
  console.log(k);
  k++;
} while (k <= 5);

const colors = ["red", "green", "blue", "yellow"];
console.log("FOR EACH LOOP:");
colors.forEach(function(color, index) {
  console.log("Color at index " + index + " is " + color);
});

console.log("SWITCH CASE:");
let day = 4;
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
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  default:
    console.log("Weekend");
}

function add(a, b) {
  return a + b;
}
console.log("Addition of 2 and 3 is:", add(2, 3));

// With return type and with parameters
function addWithReturn(a, b) {
  return a + b;
}
console.log("addWithReturn(2, 3):", addWithReturn(2, 3));

// With return type and without parameters
function getNumber() {
  return 42;
}
console.log("getNumber():", getNumber());

// Without return type and with parameters
function printSum(a, b) {
  console.log("printSum:", a + b);
}
printSum(5, 7);

// Without return type and without parameters
function greet() {
  console.log("Hello from greet!");
}
greet();
