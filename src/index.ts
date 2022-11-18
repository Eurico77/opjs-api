import express from 'express';
import mongoose from 'mongoose';
import { router } from './routes';
import path from 'node:path';

mongoose
  .connect('mongodb://localhost:27017/API',)
  .then(() => {
    const app = express();
    app.use(express.json());
    app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));
    app.use(router);
    const port = 3000;
    console.log('Connected to MongoDB');
    app.listen(port, () => {
      console.log(`🚀 Server is at http://localhost:${port}`);
    });

   
  })
  .catch((err) => console.error('Could not connect to MongoDB', err));
