// now let us say i want to create user inside the database or i want to do something that is where your drizzle orm will come

const db = require("./db/index.js"); // this db is just a connection
const usersTable = require("./drizzle/schema.js");

async function getAllUsers() {
  const users = await db.select().from(usersTable); // drizzle converts into sql and returns back an array.
  console.log(users);
  return users;
}

async function createUser({ id, name, email, password, age }) {
  await db.insert(usersTable).values({
    // coverts into the sql query by drizzle
    id,
    name,
    email,
    password,
    age,
  });
}

getAllUsers();
createUser({
  id: 1,
  name: "krish",
  email: "krish@gmail.com",
  password: "krish@123",
  age: 21,
});
createUser({
  id: 2,
  name: "piyush",
  email: "pitush@gmail.com",
  password: "piyush@123",
  age: 24,
});
getAllUsers();
