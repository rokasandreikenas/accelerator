const express = require("express");
const app = express();
const cors = require("cors");
const { PORT, connectToDb } = require("./db");
const bookRoutes = require("./routes/bookRoutes");
const userRoutes = require("./routes/userRoutes");
const authRoutes = require("./routes/authRoutes");

app.use(express.json());
app.use(cors());
app.use(bookRoutes);
app.use("/users", userRoutes);
app.use("/auth", authRoutes);

connectToDb().then(() => {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});
