import express from 'express';
import dotenv from 'dotenv';
import NodeRoutes from './routes/NodeRoutes.js';
import { connectDB } from '../config/db.js';
import rateLimiter from './middleware/rateLimiter.js';
import cors from 'cors';

dotenv.config({ debug: true }); // Remove { debug: true } if you don't need debug logs and dont want unnecessary console output

const app = express();
const port = process.env.PORT || 5000;

//Middleware 
app.use(
  cors({
    origin: 'http://localhost:5173'
  })
);

app.use(express.json()); // Middleware to parse JSON bodies
app.use(rateLimiter); // Apply the rate limiting middleware to all incoming requests  

connectDB();

app.use('/api/notes', NodeRoutes);


app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
