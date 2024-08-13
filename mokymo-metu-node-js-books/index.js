const express = require("express");
const app = express();
const cors = require("cors");

const PORT = 3000;
app.use(express.json()); // priimti duomenis JSON formatu
app.use(cors());

let books = [
  { id: 1, title: "Harry Potter", author: "J.K. Rowling" },
  { id: 2, title: "Lord of the Rings", author: "J.R.R. Tolkien" },
  { id: 3, title: "Prince Harry", author: "Prince Harry" },
];

app.get("/books", (req, res) => {
  res.status(200).json(books);
});

app.get("/books/:id", (req, res) => {
  const bookId = parseInt(req.params.id);
  const book = books.find((b) => b.id === bookId);
  if (book) {
    res.json(book);
  } else {
    res.status(404).send("Book not found");
  }
});

// req.body = body
// req.params = dinaminiai elementai po :
// req.query = kas po ?query=

// search?title=Harry&author=J.K
app.get("/search", (req, res) => {
  const { title, author } = req.query; // Gaunami užklausų parametrai iš URL
  const results = books.filter((book) => {
    if (title && author) {
      return book.title.includes(title) && book.author.includes(author);
    } else if (title) {
      return book.title.includes(title);
    } else {
      return book.author.includes(author);
    }
  });
  console.log(author);
  res.json(results);
});

// PAVYZDYS
app.get("/books/:id/version/:versionId", (req, res) => {
  // req.params.id
  // req.params.versionId
  // const {id, versionId} = req.params;
  const bookId = parseInt(req.params.id);
  const book = books.find((b) => b.id === bookId);
  if (book) {
    res.json(book);
  } else {
    res.status(404).send("Book not found");
  }
});

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
    res.status(404).json({ error: "Book with the specified ID not found" });
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
    res.status(404).json({ error: "Book with the specified ID not found" });
  }
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
