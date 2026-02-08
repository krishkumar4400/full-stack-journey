console.log("Hello JS");

// Loops
/*🔁 What Are Loops?

Loops are used to repeat a block of code multiple times until a certain condition is met.

For example:

“Print numbers 1 to 5” → Instead of writing 5 console.log() lines, we can use a loop.

🧩 1. for loop

📘 Syntax:
for (initialization; condition; increment/decrement) {
  // code to run each time
}

💡 Example:
for (let i = 1; i <= 5; i++) {
  console.log(i);
}

🧠 Step-by-step:

let i = 1 → start value

i <= 5 → condition check

Run the code → console.log(i)

Increment i++

Repeat until condition becomes false

📤 Output:
1
2
3
4
5



🔄 2. while loop

📘 Syntax:

while (condition) {
  // code to run
}

💡 Example:
let i = 1;
while (i <= 5) {
  console.log(i);
  i++;
}
  🧠 Works same as for, but initialization and increment happen outside or inside manually.

🔂 3. do...while loop

📘 Syntax:

do {
  // code to run
} while (condition);

💡 Example:
let i = 1;
do {
  console.log(i);
  i++;
} while (i <= 5);
🧠 Difference:
Even if condition is false initially, the loop runs at least once.

Example:
let i = 10;
do {
  console.log(i);
  i++;
} while (i <= 5);
📤 Output:


10

(because code ran once before checking condition)

🧠 4. for...of loop

Used to loop through arrays, strings, or iterable objects.

💡 Example:
let fruits = ["apple", "banana", "mango"];
for (let fruit of fruits) {
  console.log(fruit);
}
apple
banana
mango

🧠 It directly gives values from the array, not indices.


⚙️ 5. for...in loop

Used to loop through object properties (keys).

💡 Example:

let student = { name: "Krish", age: 20, course: "CSE" };

for (let key in student) {
  console.log(key + ": " + student[key]);
}
name: Krish
age: 20
course: CSE


🧩 6. Nested Loops

Loop inside another loop (used for patterns, matrices, etc.)

💡 Example:
for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 2; j++) {
    console.log(`i=${i}, j=${j}`);
  }
}
i=1, j=1
i=1, j=2
i=2, j=1
i=2, j=2
i=3, j=1
i=3, j=2


🧱 7. Loop Control Statements
✅ break

Stops the loop immediately.
for (let i = 1; i <= 10; i++) {
  if (i === 5) break;
  console.log(i);
}
1
2
3
4


✅ continue

Skips the current iteration and goes to next.

for (let i = 1; i <= 5; i++) {
  if (i === 3) continue;
  console.log(i);
}


📤 Output:

1
2
4
5


🧠 Practice Problems

Try these 👇

Print all even numbers from 1 to 20

Print multiplication table of 7

Find the sum of numbers 1 to 100

Print pattern:

*
**
***
****


Reverse a string using loop


********************************************
practice problems:
🌱 EASY LEVEL
🧩 1. Print Numbers 1 to 10

Goal: Print all numbers from 1 to 10 using a for loop.
Hint: Use for (let i = 1; i <= 10; i++) console.log(i);

🧩 2. Print Even Numbers (1–20)

Goal: Display only even numbers from 1 to 20.
Hint: Use % (modulus) to check divisibility.

💡 Example Output:

2, 4, 6, 8, 10, 12, 14, 16, 18, 20

🧩 3. Sum of First 100 Numbers

Goal: Find the sum of numbers from 1 to 100.
Hint: Create a variable sum = 0, then add i in each iteration.

💡 Expected Output: 5050

🧩 4. Multiplication Table

Goal: Take a number (like 7) and print its multiplication table.
Hint: console.log(num + " x " + i + " = " + num * i)

💡 Example:

7 x 1 = 7
7 x 2 = 14
...
7 x 10 = 70

🧩 5. Reverse Counting

Goal: Print numbers from 10 to 1 using a loop.
Hint: for (let i = 10; i >= 1; i--)

🌿 MEDIUM LEVEL
🧩 6. Count Digits in a Number

Goal: Input a number (e.g., 12345) and count its digits using a loop.
Hint: Use while (num > 0) and divide by 10 each time.

💡 Example Output:

Digits: 5

🧩 7. Reverse a String

Goal: Reverse "Krish" using a loop.
Hint: Start from last index → concatenate characters.

💡 Example Output:

hsirK

🧩 8. Factorial of a Number

Goal: Find factorial of 5 (5 × 4 × 3 × 2 × 1).
Hint: Initialize fact = 1 and multiply by i in loop.

💡 Output:

120

🧩 9. Print Star Pattern

Goal: Print:

*
**
***
****
*****


Hint: Use nested loops → outer loop for rows, inner for columns.

🌳 ADVANCED LEVEL
🧩 10. Check if a Number is Prime

Goal: Determine if a number is prime (divisible only by 1 and itself).
Hint: Use a loop from 2 to sqrt(n) and check n % i === 0.

💡 Example:

Input: 7 → Output: Prime
Input: 9 → Output: Not Prime

🏁 BONUS CHALLENGES (for after you finish above)

Print Fibonacci series (1, 1, 2, 3, 5, 8, 13…)

Check if a string is a palindrome

Find sum of digits of a number

Count vowels in a string

Create a pattern like:

*****
****
***
**
*


*/