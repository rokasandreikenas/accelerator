const express = require("express");
const Book = require("../schemas/Book");
const User = require("../schemas/User");
const authMiddleware = require("../middlewares/authMiddleware");

const router = express.Router();
// {
//   "_id": "66bcdcabb9a36dbb3ecc788a",
//   "userId": "66c362873318ca2bd59459f4",
//   "title": "How to code",
//   "author": "Rokas A.",
//   "ISBN": "147",
//   "createdAt": "2024-08-14T16:34:51.782Z",
//   "updatedAt": "2024-08-14T16:34:51.782Z"
// }
router.get("/books", authMiddleware, async (req, res) => {
  try {
    const books = await Book.find();
    console.log(req.currentUser);
    const existingUser = await User.findById(req.currentUser.id).select(
      "-password"
    );
    console.log(existingUser);
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
