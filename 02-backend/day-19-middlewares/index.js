const express = require("express");
const fs = require("node:fs");

const app = express();

function loggerMiddleware(req, res, next) {
  const log = `\n[${Date.now()}] ${req.method} ${req.path}`;
  fs.appendFileSync("logs.txt", log, "utf8");
  next();
}

function customMiddleware(req, res, next) {
  console.log("I am a custom Middleware");
  next();
}

// middlewares
app.use(express.json());
app.use(function (req, res, next) {
  console.log("I am Middleware A");
  //   return res.json({
  //     message: "Boom i am a middleware",
  //   });

  next();
});

app.use(function (req, res, next) {
  console.log("I am middleware B");
  // res.json({
  //     message: "Boom I am B"
  // })
  next();
});

app.use(loggerMiddleware); // global middleware
// app.use(customMiddleware);

// GET, POST or any Request on /books this middleware is going to run.
app.use("/books", (req, res, next) => {
  console.log("This is /books middleware ");
  next();
});

app.get("/books", (req, res) => {
  console.log("Get at /books");
  res.send("ok");
});
app.get("/books/:id", (req, res) => {
  console.log("Get at /books:id");
  res.send("ok2");
});
app.post("/books/all", (req, res) => {
  console.log("Post at /books/all");
  res.send("ok");
});

// In Memory DB
const books = [
  {
    id: 1,
    title: "Book One",
    author: "Author One",
  },
  {
    id: 2,
    title: "Book Two",
    author: "Author One",
  },
  {
    id: 3,
    title: "Book Three",
    author: "Author Two",
  },
  {
    id: 4,
    title: "Book Four",
    author: "Author Two",
  },
];

app.use(function (req, res, next) {
  console.log("This is middleware");
  next();
});

// routes
app.get(
  "/xyz",
  (req, res, next) => {
    console.log("This is middleaware two");
    next();
  },
  (req, res) => {
    res.send("Hello express");
  },
);
app.get("/", (req, res) => {
  res.send("Hello express");
});

app.get("/books", (req, res) => {
  res.json(books);
});

// route level or route specific middleware
app.get("/books/:id", customMiddleware, loggerMiddleware, (req, res) => {
  const id = parseInt(req.params.id);
  const book = books.find((book) => book.id === id);
  return res.json(book);
});

app.post("/book", (req, res) => {
  const { title, author } = req.body;
  console.log(req.body);
  const book = {
    id: books.length + 1,
    title,
    author,
  };
  books.push(book);
  console.log(book);

  return res.json({
    message: "New Book Added",
    success: true,
  });
});

app.listen(8000, () => {
  console.log(`server is up and running on http://localhost:8000`);
});
