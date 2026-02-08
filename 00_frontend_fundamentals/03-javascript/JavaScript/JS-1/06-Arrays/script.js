/*

🧩 1️⃣ What is an Array in JavaScript?

An array is a list-like object that can store multiple values in a single variable.
It can hold numbers, strings, objects, or even other arrays.

Example:
let arr = [10, 20, 30, 40, 50];


✅ Arrays are zero-indexed → the first element has index 0.

console.log(arr[0]); // 10
console.log(arr[arr.length - 1]); // 50

⚙️ 2️⃣ Ways to Create Arrays
let arr1 = [1, 2, 3];
let arr2 = new Array(1, 2, 3);
let arr3 = Array.of(1, 2, 3);

🧠 3️⃣ Array Properties
let numbers = [1, 2, 3, 4];
console.log(numbers.length); // 4

🪄 4️⃣ Array Methods — The Ultimate List

Let’s divide them by purpose 👇

🟢 A. Add / Remove Elements
1. push() – Add to end
let fruits = ["apple", "banana"];
fruits.push("mango");
console.log(fruits); // ["apple", "banana", "mango"]

2. pop() – Remove from end
fruits.pop();
console.log(fruits); // ["apple", "banana"]

3. unshift() – Add to start
fruits.unshift("kiwi");
console.log(fruits); // ["kiwi", "apple", "banana"]

4. shift() – Remove from start
fruits.shift();
console.log(fruits); // ["apple", "banana"]

5. splice(start, deleteCount, items...) – Add / Remove anywhere
let numbers = [1, 2, 3, 4, 5];
numbers.splice(2, 1, 99); 
console.log(numbers); // [1, 2, 99, 4, 5]

🔵 B. Searching & Checking
1. includes()
console.log(numbers.includes(4)); // true

2. indexOf() / lastIndexOf()
console.log(numbers.indexOf(99)); // 2

3. find() – Returns first matching element
let result = numbers.find(num => num > 3);
console.log(result); // 4

4. findIndex()
console.log(numbers.findIndex(num => num === 99)); // 2

🟣 C. Transforming Arrays
1. map() – Transform each element (returns new array)
let doubled = numbers.map(num => num * 2);
console.log(doubled); // [2, 4, 198, 8, 10]

2. filter() – Select elements based on condition
let evens = numbers.filter(num => num % 2 === 0);
console.log(evens); // [4]

3. reduce() – Accumulate all values into one
let sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum); // 111

4. forEach() – Loop through array
numbers.forEach(num => console.log(num));

5. flat() – Flatten nested arrays
let nested = [1, [2, [3, [4]]]];
console.log(nested.flat(2)); // [1, 2, 3, [4]]

6. flatMap() – map + flat together
let arr = [1, 2, 3];
console.log(arr.flatMap(x => [x, x * 2]));
// [1, 2, 2, 4, 3, 6]

🟡 D. Combining / Slicing Arrays
1. concat()
let a = [1, 2];
let b = [3, 4];
console.log(a.concat(b)); // [1, 2, 3, 4]

2. Spread operator ...
let c = [...a, ...b];
console.log(c); // [1, 2, 3, 4]

3. slice(start, end)
let part = c.slice(1, 3);
console.log(part); // [2, 3]

🔴 E. Sorting / Reversing
1. reverse()
let nums = [1, 2, 3];
nums.reverse();
console.log(nums); // [3, 2, 1]

2. sort()
let numbers2 = [5, 9, 2, 1];
numbers2.sort((a, b) => a - b);
console.log(numbers2); // [1, 2, 5, 9]

⚪ F. Conversion & Strings
1. join(separator)
let fruits = ["apple", "banana", "mango"];
console.log(fruits.join(", ")); // "apple, banana, mango"

2. toString()
console.log(fruits.toString()); // "apple,banana,mango"

🔥 5️⃣ Array Iteration Techniques
Traditional loops:
let arr = [10, 20, 30];
for (let i = 0; i < arr.length; i++) console.log(arr[i]);

for...of:
for (let num of arr) console.log(num);

for...in (indexes):
for (let index in arr) console.log(index, arr[index]);

💪 6️⃣ Some Important Array Interview Problems

Reverse an array

Find the max/min element

Remove duplicates

Rotate array

Merge two sorted arrays

Find the second largest element

Move all zeros to end

Count frequency of each element

Check if arrays are equal

Find pair with given sum

🧠 7️⃣ Example: Remove Duplicates from Array
let nums = [1, 2, 2, 3, 4, 4, 5];
let unique = [...new Set(nums)];
console.log(unique); // [1, 2, 3, 4, 5]

🧩 8️⃣ Example: Sum of Array Elements
let sum = nums.reduce((acc, val) => acc + val, 0);
console.log(sum);

🚀 9️⃣ Example: Find Maximum Element
let max = Math.max(...nums);
console.log(max);

🎯 10️⃣ Example: Sort Array in Descending Order
nums.sort((a, b) => b - a);
console.log(nums);


🧩 LEVEL 1 — Easy & Foundation Problems
🧠 1️⃣ Reverse an Array
Example:

Input: [1, 2, 3, 4, 5]
Output: [5, 4, 3, 2, 1]

💡 Logic:

We can use:

Built-in reverse(), or

Swap start ↔ end using two pointers.

💻 Code:
function reverseArray(arr) {
  let start = 0, end = arr.length - 1;
  while (start < end) {
    [arr[start], arr[end]] = [arr[end], arr[start]];
    start++;
    end--;
  }
  return arr;
}

console.log(reverseArray([1, 2, 3, 4, 5]));
// [5, 4, 3, 2, 1]

🧠 2️⃣ Find Maximum and Minimum in Array
💡 Logic:

Use Math.max() and Math.min() with spread operator.

💻 Code:
function findMaxMin(arr) {
  return {
    max: Math.max(...arr),
    min: Math.min(...arr)
  };
}

console.log(findMaxMin([10, 5, 8, 22, 3]));
// { max: 22, min: 3 }

🔥 Manual Version:
function findMaxMin(arr) {
  let max = arr[0], min = arr[0];
  for (let val of arr) {
    if (val > max) max = val;
    if (val < min) min = val;
  }
  return { max, min };
}

🧠 3️⃣ Sum of All Elements
💻 Code:
function arraySum(arr) {
  return arr.reduce((acc, val) => acc + val, 0);
}

console.log(arraySum([1, 2, 3, 4, 5])); // 15

🧠 4️⃣ Count Frequency of Each Element
💡 Logic:

Use an object (hash map) to store counts.

💻 Code:
function frequencyCounter(arr) {
  let freq = {};
  for (let num of arr) {
    freq[num] = (freq[num] || 0) + 1;
  }
  return freq;
}

console.log(frequencyCounter([1, 2, 2, 3, 3, 3]));
// { '1': 1, '2': 2, '3': 3 }

🧠 5️⃣ Remove Duplicates from Array
💻 Code:
function removeDuplicates(arr) {
  return [...new Set(arr)];
}

console.log(removeDuplicates([1, 2, 2, 3, 3, 4]));
// [1, 2, 3, 4]

🧩 LEVEL 2 — Intermediate Array Problems
🧠 6️⃣ Find Second Largest Element
💡 Logic:

Remove duplicates

Sort descending

Pick second element.

💻 Code:
function secondLargest(arr) {
  let unique = [...new Set(arr)];
  unique.sort((a, b) => b - a);
  return unique[1];
}

console.log(secondLargest([10, 30, 20, 30, 50, 10])); // 30

⚙️ Efficient (O(n)) Approach:
function secondLargest(arr) {
  let first = -Infinity, second = -Infinity;
  for (let num of arr) {
    if (num > first) {
      second = first;
      first = num;
    } else if (num > second && num < first) {
      second = num;
    }
  }
  return second;
}

🧠 7️⃣ Rotate Array by K Positions
Example:

Input: [1,2,3,4,5,6,7], K=3
Output: [5,6,7,1,2,3,4]

💻 Code:
function rotateArray(arr, k) {
  k = k % arr.length;
  return arr.slice(-k).concat(arr.slice(0, -k));
}

console.log(rotateArray([1,2,3,4,5,6,7], 3));
// [5,6,7,1,2,3,4]

🧠 8️⃣ Move All Zeros to End
💡 Logic:

Keep track of non-zero elements.

💻 Code:
function moveZeros(arr) {
  let result = arr.filter(x => x !== 0);
  let zeros = new Array(arr.length - result.length).fill(0);
  return [...result, ...zeros];
}

console.log(moveZeros([0, 1, 0, 3, 12]));
// [1, 3, 12, 0, 0]

🧠 9️⃣ Merge Two Sorted Arrays
💻 Code:
function mergeSortedArrays(a, b) {
  let i = 0, j = 0, result = [];

  while (i < a.length && j < b.length) {
    if (a[i] < b[j]) result.push(a[i++]);
    else result.push(b[j++]);
  }

  return [...result, ...a.slice(i), ...b.slice(j)];
}

console.log(mergeSortedArrays([1,3,5], [2,4,6]));
// [1,2,3,4,5,6]

🧠 🔟 Check if Two Arrays are Equal
💻 Code:
function areArraysEqual(a, b) {
  if (a.length !== b.length) return false;
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) return false;
  }
  return true;
}

console.log(areArraysEqual([1,2,3], [1,2,3])); // true

🧩 LEVEL 3 — Advanced Problems (Logic + Thinking)
🧠 1️⃣1️⃣ Find Pair with Given Sum
💡 Problem:

Given an array and a sum, find if any pair adds up to it.

💻 Code:
function hasPairWithSum(arr, target) {
  let seen = new Set();
  for (let num of arr) {
    if (seen.has(target - num)) return true;
    seen.add(num);
  }
  return false;
}

console.log(hasPairWithSum([2,7,11,15], 9)); // true

🧠 1️⃣2️⃣ Intersection of Two Arrays
💻 Code:
function intersection(a, b) {
  return a.filter(item => b.includes(item));
}

console.log(intersection([1,2,3,4], [3,4,5]));
// [3,4]

🧠 1️⃣3️⃣ Find Missing Number in 1–N
💡 Logic:

Sum of 1 to N = n(n+1)/2

💻 Code:
function missingNumber(arr, n) {
  let expected = (n * (n + 1)) / 2;
  let actual = arr.reduce((a, b) => a + b, 0);
  return expected - actual;
}

console.log(missingNumber([1, 2, 4, 5, 6], 6)); // 3

🧠 1️⃣4️⃣ Find All Duplicates
💻 Code:
function findDuplicates(arr) {
  let seen = new Set();
  let duplicates = new Set();

  for (let num of arr) {
    if (seen.has(num)) duplicates.add(num);
    else seen.add(num);
  }

  return [...duplicates];
}

console.log(findDuplicates([1,2,3,2,4,3,5]));
// [2,3]

🧠 1️⃣5️⃣ Kadane’s Algorithm — Maximum Subarray Sum
💡 Problem:

Find maximum possible sum of a contiguous subarray.

💻 Code:
function maxSubArraySum(arr) {
  let maxSum = arr[0];
  let currSum = arr[0];

  for (let i = 1; i < arr.length; i++) {
    currSum = Math.max(arr[i], currSum + arr[i]);
    maxSum = Math.max(maxSum, currSum);
  }

  return maxSum;
}

console.log(maxSubArraySum([-2,1,-3,4,-1,2,1,-5,4]));
// 6 → (subarray: [4,-1,2,1])


🧠 1. What is an Array?

An Array is a special variable that can hold multiple values in a single name.

let fruits = ["Apple", "Banana", "Mango"];
console.log(fruits[0]); // Apple


Indexing starts from 0.

You can store different data types:

let mixed = ["Krish", 21, true, { city: "Mumbai" }];

⚙️ 2. Ways to Create Arrays
let arr1 = [1, 2, 3]; // Literal syntax ✅ (most common)
let arr2 = new Array(1, 2, 3); // Using constructor

🔁 3. Array Basic Operations
➤ Access elements:
let numbers = [10, 20, 30];
console.log(numbers[1]); // 20

➤ Modify elements:
numbers[1] = 25;
console.log(numbers); // [10, 25, 30]

➤ Length:
console.log(numbers.length); // 3

➤ Add & Remove Elements:
numbers.push(40); // Add at end
numbers.pop();    // Remove from end
numbers.unshift(5); // Add at beginning
numbers.shift();    // Remove from beginning

🧩 4. Array Iteration (Loops)
🔸 for loop
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

🔸 for...of
for (let num of numbers) {
  console.log(num);
}

🔸 forEach()
numbers.forEach(num => console.log(num));

🧰 5. Important Array Methods (with Examples)

We’ll group them into categories 👇

🏗️ A. Transformation Methods
1. map()

Creates a new array by transforming each element.

let nums = [1, 2, 3, 4];
let doubled = nums.map(num => num * 2);
console.log(doubled); // [2, 4, 6, 8]

2. filter()

Keeps only elements that satisfy a condition.

let evens = nums.filter(num => num % 2 === 0);
console.log(evens); // [2, 4]

3. reduce()

Reduces the array to a single value.

let sum = nums.reduce((acc, val) => acc + val, 0);
console.log(sum); // 10

📊 B. Searching and Checking
4. find()

Returns the first matching element.

let found = nums.find(num => num > 2);
console.log(found); // 3

5. findIndex()

Returns the index of the first match.

let index = nums.findIndex(num => num > 2);
console.log(index); // 2

6. includes()

Checks if an element exists.

console.log(nums.includes(3)); // true

7. indexOf() / lastIndexOf()
console.log(nums.indexOf(2)); // 1

🔄 C. Sorting and Reversing
8. sort()

Sorts array elements (as strings by default).

let arr = [10, 2, 30];
arr.sort((a, b) => a - b); // Ascending numeric sort
console.log(arr); // [2, 10, 30]

9. reverse()
arr.reverse();
console.log(arr); // [30, 10, 2]

🧩 D. Combining & Slicing
10. concat()
let arr1 = [1, 2];
let arr2 = [3, 4];
console.log(arr1.concat(arr2)); // [1, 2, 3, 4]

11. slice()

Extracts a portion of the array.

let fruits = ["apple", "banana", "mango", "orange"];
console.log(fruits.slice(1, 3)); // ["banana", "mango"]

12. splice()

Removes/adds elements.

fruits.splice(2, 1, "grapes");
console.log(fruits); // ["apple", "banana", "grapes", "orange"]

🧱 E. Conversion Methods
13. join()
let names = ["Krish", "Kumar"];
console.log(names.join(" ")); // "Krish Kumar"

14. toString()
console.log(names.toString()); // "Krish,Kumar"

15. flat()

Flattens nested arrays.

let nested = [1, [2, [3]]];
console.log(nested.flat(2)); // [1, 2, 3]

🔥 F. Advanced Utility
16. Array.from()

Creates an array from an iterable.

let str = "Krish";
console.log(Array.from(str)); // ["K", "r", "i", "s", "h"]

17. Array.isArray()
console.log(Array.isArray(nums)); // true

18. fill()
let filled = new Array(5).fill(0);
console.log(filled); // [0, 0, 0, 0, 0]

19. every() / some()
nums.every(num => num > 0); // true
nums.some(num => num > 3);  // true

🧮 6. Destructuring and Spread Operator
let [first, second, ...rest] = [1, 2, 3, 4];
console.log(first, rest); // 1 [3, 4]

let newArr = [...nums, 5, 6];
console.log(newArr); // [1,2,3,4,5,6]

🚀 7. Practice Challenges

Try these small projects to master arrays:

Reverse an array without using reverse()

Find unique elements

Merge two arrays and remove duplicates

Flatten nested arrays

Count occurrences of elements

Find max and min without Math functions

Rotate an array by k steps


🧩 LEVEL 1 — Easy Array Problems
1️⃣ Reverse an Array

Problem: Reverse [1, 2, 3, 4, 5] → [5, 4, 3, 2, 1]

Logic: Swap first ↔ last using two pointers.

function reverseArray(arr) {
  let left = 0, right = arr.length - 1;
  while (left < right) {
    [arr[left], arr[right]] = [arr[right], arr[left]];
    left++;
    right--;
  }
  return arr;
}
console.log(reverseArray([1,2,3,4,5])); // [5,4,3,2,1]

2️⃣ Find Maximum & Minimum

Problem: Find max/min in [10, 5, 20, 8]

function findMaxMin(arr) {
  let max = arr[0], min = arr[0];
  for (let num of arr) {
    if (num > max) max = num;
    if (num < min) min = num;
  }
  return {max, min};
}
console.log(findMaxMin([10,5,20,8])); // {max:20, min:5}

3️⃣ Sum of Elements
function sumArray(arr) {
  return arr.reduce((acc, val) => acc + val, 0);
}
console.log(sumArray([1,2,3,4,5])); // 15

4️⃣ Remove Duplicates
function removeDuplicates(arr) {
  return [...new Set(arr)];
}
console.log(removeDuplicates([1,2,2,3,3,4])); // [1,2,3,4]

5️⃣ Count Frequency of Elements
function frequencyCounter(arr) {
  let freq = {};
  for (let num of arr) {
    freq[num] = (freq[num] || 0) + 1;
  }
  return freq;
}
console.log(frequencyCounter([1,2,2,3,3,3]));
// { '1':1, '2':2, '3':3 }

🧩 LEVEL 2 — Medium Array Problems
6️⃣ Second Largest Element
function secondLargest(arr) {
  let first = -Infinity, second = -Infinity;
  for (let num of arr) {
    if (num > first) {
      second = first;
      first = num;
    } else if (num > second && num < first) {
      second = num;
    }
  }
  return second;
}
console.log(secondLargest([10, 30, 20, 50, 50])); // 30

7️⃣ Rotate Array by K Positions
function rotateArray(arr, k) {
  k = k % arr.length;
  return arr.slice(-k).concat(arr.slice(0, -k));
}
console.log(rotateArray([1,2,3,4,5,6,7], 3)); // [5,6,7,1,2,3,4]

8️⃣ Move All Zeros to End
function moveZeros(arr) {
  let result = arr.filter(x => x !== 0);
  let zeros = new Array(arr.length - result.length).fill(0);
  return [...result, ...zeros];
}
console.log(moveZeros([0,1,0,3,12])); // [1,3,12,0,0]

9️⃣ Merge Two Sorted Arrays
function mergeSortedArrays(a, b) {
  let i = 0, j = 0, res = [];
  while(i < a.length && j < b.length) {
    if(a[i] < b[j]) res.push(a[i++]);
    else res.push(b[j++]);
  }
  return [...res, ...a.slice(i), ...b.slice(j)];
}
console.log(mergeSortedArrays([1,3,5],[2,4,6])); // [1,2,3,4,5,6]

🔟 Check if Arrays are Equal
function areArraysEqual(a,b){
  if(a.length !== b.length) return false;
  for(let i=0;i<a.length;i++){
    if(a[i] !== b[i]) return false;
  }
  return true;
}
console.log(areArraysEqual([1,2,3],[1,2,3])); // true

🧩 LEVEL 3 — Advanced Array Problems
1️⃣1️⃣ Pair with Given Sum
function hasPairWithSum(arr,target){
  let set = new Set();
  for(let num of arr){
    if(set.has(target - num)) return true;
    set.add(num);
  }
  return false;
}
console.log(hasPairWithSum([2,7,11,15],9)); // true

1️⃣2️⃣ Intersection of Two Arrays
function intersection(a,b){
  return a.filter(x => b.includes(x));
}
console.log(intersection([1,2,3,4],[3,4,5])); // [3,4]

1️⃣3️⃣ Missing Number in 1..N
function missingNumber(arr,n){
  let expectedSum = (n*(n+1))/2;
  let actualSum = arr.reduce((a,b)=>a+b,0);
  return expectedSum - actualSum;
}
console.log(missingNumber([1,2,4,5,6],6)); // 3

1️⃣4️⃣ All Duplicates
function findDuplicates(arr){
  let seen = new Set(), duplicates = new Set();
  for(let num of arr){
    if(seen.has(num)) duplicates.add(num);
    else seen.add(num);
  }
  return [...duplicates];
}
console.log(findDuplicates([1,2,3,2,4,3,5])); // [2,3]

1️⃣5️⃣ Maximum Subarray Sum (Kadane’s Algorithm)
function maxSubArraySum(arr){
  let maxSum = arr[0], currSum = arr[0];
  for(let i=1;i<arr.length;i++){
    currSum = Math.max(arr[i], currSum + arr[i]);
    maxSum = Math.max(maxSum, currSum);
  }
  return maxSum;
}
console.log(maxSubArraySum([-2,1,-3,4,-1,2,1,-5,4])); // 6

*/