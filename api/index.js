import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/user.route.js';
import authRoutes from './routes/auth.route.js';
import cookieParser from 'cookie-parser';
import path from 'path';

dotenv.config();

mongoose.connect("mongodb+srv://ilakshitha7921:ilakshitha7921@cluster0.gfhczos.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
  .then(() => {
    console.log('MongoDB is conected');
  })
  .catch((err) => {
    console.log(err);
  })

const app = express();

app.use(express.json());
app.use(cookieParser());

app.listen(4500, () => {
  console.log('Server is running port 4500');
});

app.use('/api/user', userRoutes);
app.use('/api/auth', authRoutes);

app.use(express.static(path.join(__dirname, '/client/dist')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'));
});

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';
  res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});