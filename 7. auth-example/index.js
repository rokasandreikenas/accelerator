const express = require('express');
const { connectToDb, PORT } = require('./db');
const userrRoutes = require('./routes/userRoutes');
const authRoutes = require('./routes/authRoutes');

const app = express();

app.use(express.json());
app.use('/users', userrRoutes);
app.use('/auth', authRoutes);

connectToDb()
  .then(() => app.listen(PORT, () => console.log(`Server running on port ${PORT}`)))
  .catch((err) => console.error('Failed to connect to the database', err));
