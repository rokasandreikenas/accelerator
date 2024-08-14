const express = require("express");
const Book = require("../schemas/Book");
const authMiddleware = require("../middlewares/authMiddleware");

const router = express.Router();

router.get("/books", authMiddleware, async (req, res) => {
  try {
    const books = await Book.find();
    console.log(req.currentUser);
    res.json(books);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get("/books/:id", async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) {
      return res.status(404).json({ error: "Book not found" });
    }
    return res.json(book);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

router.post("/books", authMiddleware, async (req, res) => {
  const newBook = new Book(req.body);
  try {
    const savedBook = await newBook.save();
    res.status(201).json(savedBook);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.put("/books/:id", async (req, res) => {
  try {
    const updatedBook = await Book.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(updatedBook);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.delete("/books/:id", async (req, res) => {
  try {
    const deletedBook = await Book.findByIdAndDelete(req.params.id);
    res.json(deletedBook);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

module.exports = router;
