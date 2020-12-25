import express from 'express';
import 'express-async-errors';
import { json } from 'body-parser';
import cookieSession from 'cookie-session';
import { errorHandler, NotFoundError, currentUser } from '@sgtickets/common';
import { createPostRouter } from './routes/new';
import { showPostRouter } from './routes/show';
import { indexPostRouter } from './routes/index';
import { updatePostRouter } from './routes/update';
import { likePostRouter } from './routes/like';
import { deletePostRouter } from './routes/delete';

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

app.use(createPostRouter);
app.use(showPostRouter);
app.use(indexPostRouter);
app.use(updatePostRouter);
app.use(likePostRouter);
app.use(deletePostRouter);

app.all('*', async (req, res) => {
  throw new NotFoundError();
});

app.use(errorHandler);

export { app };
