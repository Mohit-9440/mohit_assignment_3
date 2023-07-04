// index.js
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectToDatabase = require('./app/utils/db');
const userRoutes = require('./app/routes/userRoutes');

const app = express();

const port = 3000;

app.use(express.json());
app.use(cors(
  {
    origin: ["https://mohit-assignment-3.vercel.app"],
    methods: ["POST", "GET"],
    credentials:true
  }
));

// Connect to MongoDB
connectToDatabase();
console.log(process.env.MONGODB_URI);

// Routes
app.use('/api/users', userRoutes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
