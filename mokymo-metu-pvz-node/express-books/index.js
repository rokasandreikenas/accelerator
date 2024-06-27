const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

let books = [
  { id: 1, title: "Harry Potter", author: "J.K. Rowling" },
  { id: 2, title: "Lord of the Rings", author: "J.R.R. Tolkien" },
  { id: 3, title: "Harry Potter", author: "J.K. Rowling husband" },
];

// GET request to retrieve all books
app.get("/books", (req, res) => {
  res.status(200).json(books);
});

// POST request to add a new book
app.post("/books", (req, res) => {
  const newBook = { id: books.length + 1, ...req.body };
  books.push(newBook);
  res.status(201).json(newBook);
});

// DELETE request to remove a book by ID
app.delete("/books/:id", (req, res) => {
  const bookId = parseInt(req.params.id);
  const bookToDelete = books.find((book) => book.id === bookId);
  books = books.filter((book) => book.id !== bookId);

  if (bookToDelete) {
    res.status(200).json(bookToDelete);
  } else {
    res.status(404).send("Book with the specified ID not found");
  }
});

// PUT request to update a book by ID
app.put("/books/:id", (req, res) => {
  const bookId = parseInt(req.params.id);
  const { title, author } = req.body;
  const bookIndex = books.findIndex((book) => book.id === bookId);

  if (bookIndex !== -1) {
    books[bookIndex] = { id: bookId, title, author };
    res.json(books[bookIndex]);
  } else {
    res.status(404).send("Book with the specified ID not found");
  }
});

app.get("/search", (req, res) => {
  const { query } = req.query; // Gaunami užklausų parametrai iš URL
  const results = books.filter((book) => book.title.includes(query));
  res.json(results);
});

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
