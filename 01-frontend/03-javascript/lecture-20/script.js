/** Advance JavaScript
 *
 * Object Oriented COncepts in javaScript
 *
 * -
 */

class Remote {
  constructor(product, price, color) {
    this.product = product;
    this.price = price;
    this.color = color;
  }

  powerOn() {
    console.log("the machine is on now.");
  }

  powerOff() {
    console.log("this machine is off now.");
  }
}

let remote = new Remote("Lenovo", 1034, "grey");
// console.log(remote);

// console.log(remote.product);

remote.powerOn();

class Person {
  constructor(name, age, city) {
    this.name = name;
    this.age = age;
    this.city = city;
  }
}

let krish = new Person("krish", 21, "BGP");
// console.log(krish);

/**
 * prototype - shared memory
 * paradigm - way of doing things (tarika)
 */

class Car {
  constructor(name, brand, price, color) {
    // initialize objects
    this.name = name;
    this.brand = brand;
    this.price = price;
    this.color = color;
  }

  getName() {
    return this.name;
  }
  setName(name) {
    this.name = name;
  }
}

let car1 = new Car("thar", "mahindra", 20_0000, "black");
// console.log(car1);
// console.log(car1.price);

/**
 * Prototype
 */

class Sketch {
  constructor() {
    this.character = "doraemon";
    this.color = "blue";
    this.someFun = function () {};
  }

  // shared
  // alternative of declaring outside
  speak() {}
  walk() {}
}

// Sketch.prototype.speak = function() {}
// Sketch.prototype.walk = function() {}

let sketch1 = new Sketch();
// console.log(sketch1);

console.log(this); // window

function abcd() {
  console.log(this);
}
abcd(); // window

let obj = {
  name: "krish",
  fnc: function () {
    console.log(this);
  },
  fnc1: function () {
    function f() {
      console.log(this); // window
    }
    f();
  },
  fnc2: function () {
    let f = () => {
      console.log(this); // current object
    };
    f();
  },
};
obj.fnc(); // obj(current) object
obj.fnc1(); // window
obj.fnc2();

/** this:
 * global -> window
 * function -> window
 * function inside object -> object
 * arrow function inside object -> window
 * function inside function inside object -> window
 * arrow function inside function inside object -> object
 */

let obj1 = {
  user: "test user",
  fnc: function () {
    console.log(this);
    // this.fnc(); // infinite calls
  },
};

obj1.fnc();

let h1 = document.querySelector("h1");
h1.addEventListener("click", () => {
  console.log(this); //  <h1>Heading</h1>;
});

setTimeout(() => {
  console.log(this); // window
}, 1000);

/**
 * call: calls function and set value of this
 * apply: same as call but it takes this as first argument and another as an array.
 * bind: same as call but it doesn't calls function immediatly instead returns a function.
 */

let obj2 = {
  name: "test name",
};

// function abcd() {
//     console.log(this) // window
// }
// abcd();

function abcd(a, b, c) {
  console.log(this, a, b, c); // window
}
abcd.call(obj2, 1, 2, 3);
abcd.apply(obj2, [1, 2, 3]);
let newFnc = abcd.bind(obj2, 1, 2, 3);
newFnc();
