// index.js
const express = require('express');
const app = express();
require('dotenv').config();
const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes');

// Middleware
app.use(express.json());

// Routes
app.use('/api', userRoutes);
app.use('/api', productRoutes);

// Start server
const PORT = process.env.PORT|| 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
