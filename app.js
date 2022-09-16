import express from 'express';
import dotenv from 'dotenv';

import jwtRouter from './routes/jwt.router.js';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3001;

// Express Middleware
app.use(express.json());

// Base Route
app.use('/api/v1', jwtRouter);

const start = async () => {
  try {
    app.listen(PORT, () => {
      console.log('Server running...');
    });
  } catch (error) {
    console.log(`Error: ${error.message}`);
  }
};

start();
