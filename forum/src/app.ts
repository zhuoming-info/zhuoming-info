import express from 'express';
import 'express-async-errors';
import { json } from 'body-parser';
import cookieSession from 'cookie-session';
import { errorHandler, NotFoundError, currentUser } from '@sgtickets/common';

import { createPostRouter } from './routes/post/new';
import { showPostRouter } from './routes/post/show';
import { indexPostRouter } from './routes/post/index';
import { updatePostRouter } from './routes/post/update';
import { likePostRouter } from './routes/post/like';
import { deletePostRouter } from './routes/post/delete';

import { createCommentRouter } from './routes/comment/new';
import { indexCommentRouter } from './routes/comment/index';
import { updateCommentRouter } from './routes/comment/update';
import { likeCommentRouter } from './routes/comment/like';
import { deleteCommentRouter } from './routes/comment/delete';

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
