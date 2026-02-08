/*
🧩 1️⃣ What is a Function?

A function is a block of reusable code that performs a specific
 task.

function greet() {
  console.log("Hello Krish!");
}

greet(); // Call the function


Functions help reuse code and reduce duplication.

Can accept parameters and return values.

🧩 2️⃣ Function Syntax
A. Function Declaration
function add(a, b) {
  return a + b;
}
console.log(add(5, 3)); // 8

B. Function Expression
const multiply = function(a, b) {
  return a * b;
};
console.log(multiply(2, 4)); // 8

C. Arrow Function (ES6)
const divide = (a, b) => a / b;
console.log(divide(10, 2)); // 5


✅ Arrow functions are shorter and do not have their own this.

🧩 3️⃣ Function Parameters
A. Default Parameters
function greet(name = "Guest") {
  console.log("Hello " + name);
}
greet();        // Hello Guest
greet("Krish"); // Hello Krish

B. Rest Parameters
function sum(...numbers) {
  return numbers.reduce((acc, val) => acc + val, 0);
}
console.log(sum(1,2,3,4)); // 10

C. Arguments Object (Older JS)
function multiply() {
  let product = 1;
  for(let i=0;i<arguments.length;i++){
    product *= arguments[i];
  }
  return product;
}
console.log(multiply(2,3,4)); // 24

🧩 4️⃣ Return Statement

Functions can return a value using return.

Without return → function returns undefined.

function square(x) {
  return x * x;
}
console.log(square(5)); // 25

🧩 5️⃣ Function Scope

Variables declared inside a function → local scope

Variables declared outside → global scope

let globalVar = 10;

function testScope() {
  let localVar = 5;
  console.log(globalVar); // 10
  console.log(localVar);  // 5
}
testScope();
console.log(localVar); // Error! localVar is not defined

🧩 6️⃣ Function Hoisting

Function declarations are hoisted → can be called before declaration.

console.log(sum(2,3)); // 5
function sum(a,b){ return a+b; }


Function expressions & arrow functions → not hoisted

console.log(subtract(5,3)); // Error
const subtract = (a,b) => a-b;

🧩 7️⃣ Immediately Invoked Function Expression (IIFE)

A function that runs immediately after being defined.

(function() {
  console.log("IIFE executed!");
})();

🧩 8️⃣ Callback Functions

A function passed as an argument to another function.

function greet(name, callback) {
  console.log("Hello " + name);
  callback();
}

greet("Krish", function() { console.log("Have a great day!"); });
// Hello Krish
// Have a great day!

🧩 9️⃣ Higher-Order Functions

Functions that accept functions or return functions.

function multiplier(factor) {
  return function(num) {
    return num * factor;
  };
}
const double = multiplier(2);
console.log(double(5)); // 10

🧩 10️⃣ Anonymous Functions

Functions without a name, often used as callbacks.

setTimeout(function() {
  console.log("Executed after 2 seconds");
}, 2000);

🧩 11️⃣ Recursive Functions

A function that calls itself.

function factorial(n) {
  if(n === 0) return 1;
  return n * factorial(n-1);
}
console.log(factorial(5)); // 120

🧩 12️⃣ Function Closures

A closure is when a function remembers the scope in which it was created.

function outer() {
  let count = 0;
  return function inner() {
    count++;
    return count;
  };
}
const counter = outer();
console.log(counter()); // 1
console.log(counter()); // 2


✅ Closures are used in private variables, callbacks, event handlers, and modules.

🧩 13️⃣ Function Currying

Transform a function with multiple arguments into a series of functions each taking 1 argument.

function sum(a) {
  return function(b) {
    return a + b;
  };
}
console.log(sum(2)(3)); // 5


Can also be done using arrow functions:

const add = a => b => a + b;
console.log(add(5)(10)); // 15

🧩 14️⃣ Function Best Practices

Always use meaningful names.

Prefer arrow functions for callbacks.

Avoid global variables inside functions.

Use default & rest parameters for flexibility.

Use closures wisely for encapsulation.

Keep functions small & single-purpose.

🧩 15️⃣ Real-World Function Patterns
A. Map, Filter, Reduce
const nums = [1,2,3,4];
const doubled = nums.map(x => x*2); // [2,4,6,8]
const evens = nums.filter(x => x%2===0); // [2,4]
const sum = nums.reduce((acc,val)=>acc+val,0); // 10

B. Debounce Function

Prevents function from running too frequently.

function debounce(func, delay) {
  let timer;
  return function() {
    clearTimeout(timer);
    timer = setTimeout(() => func.apply(this, arguments), delay);
  }
}

C. Throttle Function

Ensures function runs at most once per interval.

function throttle(func, limit) {
  let inThrottle;
  return function() {
    if(!inThrottle){
      func.apply(this, arguments);
      inThrottle = true;
      setTimeout(()=>inThrottle=false, limit);
    }
  }
}


Krish, after this, you’ll master all types of JS functions:

Basic → Declaration / Expression / Arrow

Advanced → Callbacks / HOF / Closures / Currying

Real-world → Debounce / Throttle / Map-Filter-Reduce

*/

// Arrow function

const sum = (a,b) => {
  console.log(a + b);
}

sum;
sum(1,2);

console.log(sum);
console.log(sum(2,3));