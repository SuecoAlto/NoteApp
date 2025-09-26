import express from 'express';
import dotenv from 'dotenv';
import NodeRoutes from './routes/NodeRoutes.js';
import { connectDB } from '../config/db.js';
import rateLimiter from './middleware/rateLimiter.js';
import cors from 'cors';
import path from 'path';

dotenv.config({ debug: true }); // Remove { debug: true } if you don't need debug logs and dont want unnecessary console output

const app = express();
const port = process.env.PORT || 5001;
const __dirname = path.resolve(); // To get the current directory name for serving static files

//Middleware 
if (process.env.NODE_ENV !== "production") {
  app.use(
  cors({
    origin: 'http://localhost:5173'
  })
);
}

app.use(express.json()); // Middleware to parse JSON bodies
app.use(rateLimiter); // Apply the rate limiting middleware to all incoming requests  
app.use('/api/notes', NodeRoutes);

if (process.env.NODE_ENV === "production") {
  // Serve static files from the React frontend app
  app.use(express.static(path.join(__dirname, '../frontend/dist')));
  
  // All other GET requests not handled before will return the React app
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend', "dist", "index.html"));
  });
}

connectDB().then(() => {
  app.listen(port, () => {
    console.log("Server started on PORT:", port);
  });
});
  