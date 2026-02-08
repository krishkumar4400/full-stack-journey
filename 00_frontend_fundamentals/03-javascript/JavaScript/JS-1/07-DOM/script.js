// // DOM

// // readability 
// // modularity 
// // browser caching

// dom is used to make dynamic changes and manipulations

// console.log("DOM");

// let btn = document.querySelector("button");
// // alert("Button Clicked"); 
// // window.alert();

// window.console.log("Window");

// console.log() -> print only
// console.log() -> document -> properties and methods

// console.log(window.document);
// console.dir(document);

// console.log(document);
// console.dir(document);

// console.log(document.body);
// console.dir(document.body);


// DOM Manipulation

// 1. selecting with id
//      document.getElementById("id");

let heading = document.getElementById("heading");
console.log(heading);
console.dir(heading);


// 2. selecting with class 
//      document.getElementByClassName("class")

let paragraph = document.getElementsByClassName("paragraph");
console.log(paragraph);
console.log(paragraph[0]);
console.dir(paragraph);


// 3. selecting with tag 
//      document.getElementByTagName("p")

let btn = document.getElementsByTagName("button");
console.log(btn);
console.dir(btn);


// Query Selector 

// document.querySelector("myId / myClass / tag")
//      returns first element 

// document.querySelectorAll("myId / myClass / tag")
//      returns a NodeList

let firstEl = document.querySelector("p"); // matching first element
console.log(firstEl);
console.dir(firstEl);

let allElements = document.querySelectorAll("p"); // matching all elements in the form of node list
console.log(allElements);
console.dir(allElements);

let cElAll = document.querySelector(".paragraph");
console.log(cElAll);

let cEl = document.querySelectorAll(".paragraph");
console.log(cEl);

let elId = document.querySelector("#heading");
console.log(elId);
console.dir(elId);


/**
 * Properties: used to get(check) , set or update the values of elements.
 *  - tagName: returns tag for element nodes.
 *  - innerText: returns the text content of the element and all its children
 *  - innerHTML: returns the plain text or HTML contents in the element.
 *  - textContent: returns textual content even for hidden elements.
 */

let btnn = document.querySelector('#btn');

console.log(btnn.tagName); // 'BUTTON'

console.log(btnn.innerText);
console.log(btnn.innerHTML);


let btn2 = document.querySelector('#btn2');

console.log(document.body.firstChild);

// there are 3 types of nodes in DOM tree:
    // 1. text nodes
    // 2. comment 
    // 3. elements

/**
 * firstChild
 * lastChild
 * children
 */

let b = document.querySelector('body');

console.dir(b);

console.log(b.children)
// HTMLCollection(12) [h1#heading, p.paragraph, p.paragraph, p.paragraph, p.paragraph, button, button, button, div, button#btn, button#btn2, script, heading: h1#heading, btn: button#btn, btn2: button#btn2]

console.dir(b.children[0]);
console.log(b.children[0]);

console.log(b.firstChild)
console.log(b.lastChild)

document.querySelector('ul li').innerText = 'Vegetables';

document.querySelector('ul').innerHTML = '<li>Hi Bro</li>';

console.log(document.querySelector('#h1').textContent);