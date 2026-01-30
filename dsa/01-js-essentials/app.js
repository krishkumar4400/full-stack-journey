console.log(typeof(true + "hello" + false));

a = 10;
b = 20;

console.log("the sum of " + 10 + "and " + b + " is " + a + b);
// the sum of 10and 20 is 1020

console.log("the sum of " + 10 + " and " + b + " is " + (a + b));
// the sum of 10 and 20 is 30

console.log(("the sum of " + 10 + " and " + b + " is ") + a + b);
// the sum of 10 and 20 is 1020

console.log(a + b + " is the sum of " + 10 + " and " + b + " is ");
// 30 is the sum of 10 and 20 is 

// type coercion
console.log("Type Coercion");

console.log(2 + "2") // 22 (string)
console.log(2 - "2") // 0
console.log(2 * "2") // 4
console.log(2 / "2") // 1
console.log(2 % "2") // 0
console.log(2 | "2") // 2
console.log(2 & "2") // 2
console.log(2 || "2") // 2
console.log(2 && "2") // 2 (string)

// accept dynamic values from the user:
let prompt = require('prompt-sync')(); // takes input as string 

let age = prompt("Enter your age: ");

console.log("Age ", age);
console.log(typeof(age));
// Age  4
// string

let marks = Number(prompt("Enter your marks: "));
console.log(typeof(marks)); // number


// swap two variables using 3 methods:
let x = 100;
let y = 200;
console.log(`before swapping \n x = ${x} y = ${y}`);

// let z = x;
// x = y;
// y = z;

// x = x + y;
// y = x - y;
// x = x - y;

// x = x * y;
// y = x / y;
// x = x / y;

[x,y] = [y,x]

/**
 * output: 
 
 before swapping
 x = 100 y = 200
 after swapping
 x = 200 y = 100

 */
console.log(`after swapping \n x = ${x} y = ${y}`);