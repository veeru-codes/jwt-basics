import express from 'express';
import dotenv from 'dotenv';
import 'express-async-errors';

import jwtRouter from './routes/jwt.router.js';
import notFound from './middleware/notFound.js';
import errorHandler from './middleware/errorHandler.js';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3001;

// Express Middleware
app.use(express.json());

// Base Route
app.use('/api/v1', jwtRouter);

app.use(notFound);
app.use(errorHandler);

const start = async () => {
  app.listen(PORT, () => {
    console.log('Server running...');
  });
};

start();
