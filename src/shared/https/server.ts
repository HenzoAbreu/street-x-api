import 'reflect-metadata';
import 'dotenv/config';
import express, { NextFunction, Request, Response } from 'express';
import 'express-async-errors';
import cors from 'cors';
import routes from './routes';
import AppError from '../errors/AppError';
import '../typeorm';
import { errors } from 'celebrate';
import { pagination } from 'typeorm-pagination';
import rateLimiter from './middlewares/rateLimiter';

import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use(rateLimiter);

app.use(pagination);

app.use(routes);

app.use(errors());

app.use(
  (error: Error, request: Request, response: Response, next: NextFunction) => {
    if (error instanceof AppError) {
      return response.status(error.statusCode).json({
        status: 'error',
        message: error.message,
      });
    }
    console.log(error)
    return response.status(500).json({
      status: 'error',
      message: 'internal server error',
    });
  },
);

app.listen(process.env.PORT || 80, () => {
  console.log('server started on port 3000');
});
