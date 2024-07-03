const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());

const { connectToDb, PORT } = require("./db");
const carRoutes = require("./routes/carRoutes");
const clientRoutes = require("./routes/clientRoutes");
// host + "/cars" + "/"
app.use("/cars", carRoutes); // one example
// host + "/clients"
app.use(clientRoutes); // second example

connectToDb()
  .then(() => {
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err) => {
    console.error("Failed to connect to the database", err);
  });
