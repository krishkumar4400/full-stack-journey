// classes & objects

// object:
const student = {
    fullName: "krish kumar",
    marks: 99.99,
    printMarks: function() {
        console.log("Marks: " + this.marks)
    }
};

let arr = [1,2,3,4]

const employee = {
    calcTax() {
        console.log("Tax rate is 12%");
    },

    calcTax2 : function() {
        console.log("Tax rate is 20%");
    }
};

const karanArjun = {
    salary: 500000
};

karanArjun.__proto__ = employee;

//  krish = {
//     salary: 99999,
//     calcTax() {
//         console.log("Tax rate is 20 %");
//     }
// };

// krish.__proto__ = employee;

class ToyotaCar {
  start() {
    console.log("Start");
  }

  stop() {
    console.log("Stop");
  }

  setBrand(brand) {
    this.brand = brand;
  }
}

let fortuner = new ToyotaCar();
let lexus = new ToyotaCar();

fortuner.setBrand("Fortuner");
lexus.setBrand("Lexus");

class Tata {
  constructor(brand, speed) {
    console.log("Creating new object");
    this.brand = brand;
    this.speed = speed;
  }
  start() {
    console.log("Start");
  }

  stop() {
    console.log("Stop");
  }
}

let scorpio = new Tata("SCORPIO", 100);
let thar = new Tata("", 300);

thar.brand = "THAR";

scorpio.mileage = 10;
thar.mileage = 20;

// inheritance

class Parent {
  sayHello() {
    console.log("Hello_!");
  }
}

class Child extends Parent {}

let obj = new Child();

class Person {
  constructor() {
    this.species = "Homo Sapience";
  }
  eat() {
    console.log("Eat");
  }

  sleep() {
    console.log("Sleep");
  }

  work() {
    console.log("Do nothing");
  }
}

let p1 = new Person();

class Engineer extends Person {
  constructor(branch) {
    super(); // to invoke parent class constructor
    this.species = "Animal";
    this.branch = branch;
  }
  work() {
    console.log("Solve problems, Build something");
  }
}

class Doctor extends Person {
  work() {
    console.log("Treat Patients");
  }
}

let krish = new Engineer("cse");
let ankit = new Doctor();

// if child and parent have same method, child's method will be used. and called as method overriding.

class Upper {
  constructor() {
    console.log("Enter parent constructor");
  }
  eat() {
    console.log("Eat");
  }
}

class Lower extends Upper {
  constructor() {
    console.log("Enter child constructor");
    super();
    this.name = "krishna";
    console.log("Exit child constructor");
  }

  work() {
    console.log("Work");
  }
}

let obj1 = new Lower();

// argument passing:
class Upper2 {
  constructor(name) {
    this.name = name;
  }
  eat() {
    console.log("Eat");
  }
}

class Lower2 extends Upper2 {
  constructor(name) {
    super(name);
  }

  work() {
    console.log("Work");
  }
}

let obj2 = new Lower2("krishhh");

class Human {
  constructor(name) {
    this.name = name;
  }

  eat() {
    console.log("Eat");
  }
}

class Driver extends Human {
  constructor(name) {
    super(name);
  }

  work() {
    super.eat();
    // eat(); -> eat is not defined
    console.log("Work is driving");
  }
}

let obj3 = new Driver("sami");

DATA = "secret data";
class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  viewData() {
    console.log("This is website data", DATA);
  }
}

let u1 = new User("krish", "krishkumarbgp2022@gmail.com");
u1.viewData();

console.log(u1.name, " ", u1.email);

class Admin extends User {
    constructor(name, email) {
        super(name, email);
    }

    editData() {
        DATA = "Some new Value";
    }
}

admin1 = new Admin("admin", "admin.college@gmail.com");


// next topics: 