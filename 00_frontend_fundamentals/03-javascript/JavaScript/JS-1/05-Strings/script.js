// strings:
    // string is a sequence of characters used to represent text

/*

🧩 1. What is a String?

A string is a sequence of characters enclosed in quotes:

let name = "Krish";
let college = 'IIT Bombay';
let greeting = `Hello, ${name}!`;  // Template literal


✅ Strings can be created using:

Single quotes (' ')

Double quotes (" ")

Backticks ( ) → for template literals (allow variable embedding)

🧠 2. How Strings Work Internally

In JavaScript:

Strings are immutable, meaning you cannot change a character directly.

Example:

let str = "Hello";
str[0] = "Y";   // ❌ Not possible
console.log(str); // "Hello" (unchanged)


If you want to modify it → create a new string:

str = "Y" + str.slice(1);
console.log(str); // "Yello"

⚙️ 3. String Length Property

You can get string length using .length

let name = "Krish Kumar";
console.log(name.length); // 11


📘 Remember: spaces also count as characters.

✨ 4. Accessing Characters

You can access characters using:

let str = "Hello";
console.log(str[0]); // H
console.log(str.charAt(1)); // e

🧰 5. Common String Methods (with Examples)

Let’s go through the most important methods, with examples 👇

🔹 toUpperCase() and toLowerCase()
let city = "mumbai";
console.log(city.toUpperCase()); // MUMBAI
console.log(city.toLowerCase()); // mumbai

🔹 includes() — checks if substring exists
let text = "I love JavaScript";
console.log(text.includes("love")); // true
console.log(text.includes("Love")); // false (case-sensitive)

🔹 startsWith() and endsWith()
let file = "resume.pdf";
console.log(file.startsWith("res")); // true
console.log(file.endsWith(".pdf"));  // true

🔹 indexOf() and lastIndexOf()
let sentence = "JavaScript is awesome and JavaScript is fun";
console.log(sentence.indexOf("JavaScript"));      // 0
console.log(sentence.lastIndexOf("JavaScript"));  // 25

🔹 slice(start, end) — extract substring
let str = "Hello World";
console.log(str.slice(0, 5));   // Hello
console.log(str.slice(-5));     // World


Negative index counts from the end.

🔹 substring(start, end)

Similar to slice(), but no negative indexes allowed.

let str = "JavaScript";
console.log(str.substring(0, 4)); // Java

🔹 substr(start, length) (⚠️ deprecated but still used)
let str = "JavaScript";
console.log(str.substr(4, 6)); // Script

🔹 replace() and replaceAll()
let str = "I love JS and JS is great";
console.log(str.replace("JS", "JavaScript"));    // replaces first
console.log(str.replaceAll("JS", "JavaScript")); // replaces all

🔹 split() — converts string → array
let names = "Krish,Kumar,IIT";
console.log(names.split(","));  // ["Krish", "Kumar", "IIT"]

🔹 trim(), trimStart(), trimEnd()

Removes extra spaces.

let str = "   Hello World   ";
console.log(str.trim()); // "Hello World"

🔹 repeat(n)

Repeats string n times.

console.log("Hi ".repeat(3)); // "Hi Hi Hi "

🔹 concat()
let first = "Krish";
let last = "Kumar";
console.log(first.concat(" ", last)); // "Krish Kumar"

🔹 charCodeAt(index) and fromCharCode()
let letter = "A";
console.log(letter.charCodeAt(0)); // 65
console.log(String.fromCharCode(65)); // A

⚡ 6. Template Literals (Modern ES6 feature)

Allows embedding variables directly:

let name = "Krish";
let age = 20;
console.log(`My name is ${name} and I am ${age} years old.`);


✅ Supports multi-line strings too:

let text = `
Hello ${name},
Welcome to the JS course!
`;

🧮 7. String Comparison

Strings are compared lexicographically (dictionary order) using Unicode.

console.log("apple" < "banana"); // true
console.log("Z" > "a");          // false (capital letters are smaller in Unicode)

🧠 8. Useful String Problems (Interview Practice)

Reverse a string

Count vowels and consonants

Check if string is a palindrome

Find the first non-repeating character

Count occurrences of a specific character

Convert first letter of every word to uppercase (Title Case)

Remove duplicate characters

Find the longest word in a sentence

Count words in a string

Check if two strings are anagrams

🔥 9. Example — Palindrome Checker
function isPalindrome(str) {
  str = str.toLowerCase().replace(/[^a-z0-9]/g, ""); // remove special chars
  return str === str.split("").reverse().join("");
}

console.log(isPalindrome("Madam"));  // true
console.log(isPalindrome("Hello"));  // false

🧩 10. Example — Count Vowels
function countVowels(str) {
  let count = 0;
  const vowels = "aeiouAEIOU";
  for (let ch of str) {
    if (vowels.includes(ch)) count++;
  }
  return count;
}

console.log(countVowels("Krish Kumar")); // 3

🏁 Summary
| Concept          | Example                                |
| ---------------- | -------------------------------------- |
| Access character | `str[0]`, `charAt()`                   |
| Modify string    | Use new string (strings are immutable) |
| Search           | `indexOf()`, `includes()`              |
| Extract          | `slice()`, `substring()`               |
| Replace          | `replace()`, `replaceAll()`            |
| Split/Join       | `split()`, `join()`                    |
| Trim spaces      | `trim()`                               |
| Combine          | `concat()`, `+`                        |
| Compare          | `"apple" < "banana"`                   |



🧠 What is a String in JavaScript?

A string is a sequence of characters enclosed in single quotes (' '), double quotes (" "), or backticks ( ).

let str1 = "Hello";
let str2 = 'World';
let str3 = `Hello World`;


✅ Strings are immutable — once created, they can’t be changed (but you can create a new one).

📚 String Properties
let str = "JavaScript";
console.log(str.length); // 10


.length → Returns the number of characters in the string.

⚙️ Common String Methods & Functions
🔹 1. charAt(index)

Returns the character at a specific index.

let str = "Krish";
console.log(str.charAt(2)); // i

🔹 2. charCodeAt(index)

Returns the Unicode value of the character.

console.log(str.charCodeAt(0)); // 75 ('K')

🔹 3. at(index) (Modern)

Can use negative indexes.

console.log(str.at(-1)); // h

🔹 4. slice(start, end)

Extracts part of a string (end not included).

let name = "JavaScript";
console.log(name.slice(0, 4)); // "Java"
console.log(name.slice(-6));   // "Script"

🔹 5. substring(start, end)

Similar to slice() but doesn’t accept negative indexes.

console.log(name.substring(0, 4)); // "Java"

🔹 6. substr(start, length) (deprecated but seen in old code)
console.log(name.substr(4, 6)); // "Script"

🔹 7. toUpperCase() / toLowerCase()
console.log("hello".toUpperCase()); // "HELLO"
console.log("WORLD".toLowerCase()); // "world"

🔹 8. trim(), trimStart(), trimEnd()

Removes spaces.

let msg = "   Hello World   ";
console.log(msg.trim());      // "Hello World"
console.log(msg.trimStart()); // "Hello World   "
console.log(msg.trimEnd());   // "   Hello World"

🔹 9. includes(substring)

Checks if a string contains another string.

console.log("Krish Kumar".includes("Kumar")); // true

🔹 10. startsWith() / endsWith()
let course = "JavaScript Mastery";
console.log(course.startsWith("Java")); // true
console.log(course.endsWith("try"));    // true

🔹 11. indexOf() / lastIndexOf()

Find the position of a substring.

let str = "Hello World";
console.log(str.indexOf("o"));      // 4
console.log(str.lastIndexOf("o"));  // 7

🔹 12. replace() / replaceAll()

Replace parts of strings.

let sentence = "I love JS. JS is awesome!";
console.log(sentence.replace("JS", "JavaScript")); 
// "I love JavaScript. JS is awesome!"

console.log(sentence.replaceAll("JS", "JavaScript")); 
// "I love JavaScript. JavaScript is awesome!"

🔹 13. concat()

Join strings together.

let a = "Hello";
let b = "World";
console.log(a.concat(" ", b)); // "Hello World"

🔹 14. split(separator)

Converts a string into an array.

let words = "apple,banana,mango";
console.log(words.split(",")); // ["apple", "banana", "mango"]

🔹 15. repeat(n)

Repeats the string n times.

console.log("Hi ".repeat(3)); // "Hi Hi Hi "

🔹 16. padStart(length, char) / padEnd(length, char)

Used for formatting (padding).

let num = "5";
console.log(num.padStart(3, "0")); // "005"
console.log(num.padEnd(3, "0"));   // "500"

🔹 17. Template Literals (backticks)

Supports variables and multi-line strings.

let name = "Krish";
let greeting = `Hello, ${name}!`;
console.log(greeting); // Hello, Krish!

🔹 18. Escape Characters
let quote = "He said, \"JavaScript is fun!\"";
console.log(quote);

🔹 19. match(), matchAll() (Regex-based)

Used for pattern matching.

let text = "I love JavaScript and Java";
console.log(text.match(/Java/g)); // ["Java", "Java"]

🔹 20. toString() & valueOf()

Convert values to strings.

let num = 100;
console.log(num.toString()); // "100"

🧩 Interview-Oriented String Practice Questions

Try to implement these later:

Reverse a string

Check palindrome

Count vowels/consonants

Find the most frequent character

Remove duplicates from a string

Capitalize first letter of each word

Longest word in a sentence

Anagram check

String compression

Count occurrences of a substring




🧩 1️⃣ Reverse a String
🧠 Problem:

Given a string, reverse it.
Example: "Krish" → "hsirK"

🧩 Logic:

We can:

Convert the string into an array using .split("")

Reverse the array using .reverse()

Join it back using .join("")

💻 Code:
function reverseString(str) {
  return str.split("").reverse().join("");
}

console.log(reverseString("Krish")); // "hsirK"

⚙️ Manual Approach (without built-in reverse)
function reverseStringManual(str) {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}

console.log(reverseStringManual("Krish")); // "hsirK"

🧩 2️⃣ Check Palindrome
🧠 Problem:

A palindrome reads the same forward and backward.
Example: "madam", "racecar" → palindrome

💻 Code:
function isPalindrome(str) {
  let reversed = str.split("").reverse().join("");
  return str === reversed;
}

console.log(isPalindrome("madam")); // true
console.log(isPalindrome("krish")); // false

⚙️ Better version (ignore case & spaces)
function isPalindrome(str) {
  str = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  return str === str.split("").reverse().join("");
}

console.log(isPalindrome("A man, a plan, a canal: Panama")); // true

🧩 3️⃣ Count Vowels and Consonants
💡 Logic:

Loop through each character → check if it’s a vowel (a, e, i, o, u)

💻 Code:
function countVowelsAndConsonants(str) {
  let vowels = "aeiouAEIOU";
  let vCount = 0, cCount = 0;

  for (let ch of str) {
    if (/[a-zA-Z]/.test(ch)) {  // Only alphabets
      if (vowels.includes(ch)) vCount++;
      else cCount++;
    }
  }

  return { vowels: vCount, consonants: cCount };
}

console.log(countVowelsAndConsonants("Krish Kumar"));
// { vowels: 3, consonants: 7 }

🧩 4️⃣ Find the Most Frequent Character
🧠 Problem:

Input: "success" → Output: 's' (appears 3 times)

💡 Logic:

Use an object (map) to count occurrences of each character.

💻 Code:
function mostFrequentChar(str) {
  let freq = {};
  for (let ch of str) {
    freq[ch] = (freq[ch] || 0) + 1;
  }

  let maxChar = "";
  let maxCount = 0;

  for (let key in freq) {
    if (freq[key] > maxCount) {
      maxCount = freq[key];
      maxChar = key;
    }
  }

  return maxChar;
}

console.log(mostFrequentChar("success")); // "s"

🧩 5️⃣ Remove Duplicate Characters
💻 Code:
function removeDuplicates(str) {
  let result = "";
  for (let ch of str) {
    if (!result.includes(ch)) result += ch;
  }
  return result;
}

console.log(removeDuplicates("programming")); // "progamin"

⚙️ Shortcut using Set:
function removeDuplicates(str) {
  return [...new Set(str)].join("");
}

console.log(removeDuplicates("programming")); // "progamin"

🧩 6️⃣ Capitalize First Letter of Each Word
💻 Code:
function capitalizeWords(str) {
  return str
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

console.log(capitalizeWords("hello krish kumar")); // "Hello Krish Kumar"

🧩 7️⃣ Find the Longest Word in a Sentence
💻 Code:
function findLongestWord(str) {
  let words = str.split(" ");
  let longest = "";

  for (let word of words) {
    if (word.length > longest.length) longest = word;
  }

  return longest;
}

console.log(findLongestWord("I love programming and JavaScript"));
// "programming"

🧩 8️⃣ Check if Two Strings Are Anagrams
🧠 Definition:

Two strings are anagrams if they contain the same letters with the same frequency.
Example: "listen" and "silent"

💻 Code:
function isAnagram(str1, str2) {
  const format = s => s.toLowerCase().replace(/[^a-z0-9]/g, "").split("").sort().join("");
  return format(str1) === format(str2);
}

console.log(isAnagram("listen", "silent")); // true
console.log(isAnagram("hello", "world"));   // false

🧩 9️⃣ String Compression

Input: "aaabbccc" → Output: "a3b2c3"

💻 Code:
function compressString(str) {
  let result = "";
  let count = 1;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) count++;
    else {
      result += str[i] + count;
      count = 1;
    }
  }

  return result;
}

console.log(compressString("aaabbccc")); // "a3b2c3"

🧩 🔟 Count Occurrences of a Substring
💻 Code:
function countOccurrences(str, subStr) {
  let count = 0;
  let pos = str.indexOf(subStr);

  while (pos !== -1) {
    count++;
    pos = str.indexOf(subStr, pos + 1);
  }

  return count;
}

console.log(countOccurrences("hello hello world", "hello")); // 2
*/