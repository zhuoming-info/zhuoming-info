import express from 'express';
import 'express-async-errors';
import { json } from 'body-parser';
import cookieSession from 'cookie-session';
import { errorHandler, NotFoundError, currentUser } from '@sgtickets/common';
import { createCommentRouter } from './routes/new';
import { indexCommentRouter } from './routes/index';
import { updateCommentRouter } from './routes/update';
import { likeCommentRouter } from './routes/like';
import { deleteCommentRouter } from './routes/delete';

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

app.use(createCommentRouter);
app.use(indexCommentRouter);
app.use(updateCommentRouter);
app.use(likeCommentRouter);
app.use(deleteCommentRouter);

app.all('*', async (req, res) => {
  throw new NotFoundError();
});

app.use(errorHandler);

export { app };
