import express from 'express';
import 'express-async-errors';
import { json } from 'body-parser';
import cookieSession from 'cookie-session';
import { errorHandler, NotFoundError, currentUser } from '@sgtickets/common';
import { createJxswRouter } from './routes/new';
import { showJxswRouter } from './routes/show';
import { indexJxswRouter } from './routes/index';
import { updateJxswRouter } from './routes/update';
import { likeJxswRouter } from './routes/like';
import { deleteJxswRouter } from './routes/delete';

const app = express();
app.set('trust proxy', true);
app.use(json());
app.use(
  cookieSession({
    signed: false,
    secure: process.env.NODE_ENV !== 'test',
  })
);
app.use(currentUser);

app.use(createJxswRouter);
app.use(showJxswRouter);
app.use(indexJxswRouter);
app.use(updateJxswRouter);
app.use(likeJxswRouter);
app.use(deleteJxswRouter);

app.all('*', async (req, res) => {
  throw new NotFoundError();
});

app.use(errorHandler);

export { app };
