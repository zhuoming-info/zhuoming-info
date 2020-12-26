import express from 'express';
import 'express-async-errors';
import { json } from 'body-parser';
import cookieSession from 'cookie-session';
import { errorHandler, NotFoundError, currentUser } from '@sgtickets/common';
import { createJiangxiRouter } from './routes/new';
import { showJiangxiRouter } from './routes/show';
import { indexJiangxiRouter } from './routes/index';
import { updateJiangxiRouter } from './routes/update';
import { likeJiangxiRouter } from './routes/like';
import { deleteJiangxiRouter } from './routes/delete';

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

app.use(createJiangxiRouter);
app.use(showJiangxiRouter);
app.use(indexJiangxiRouter);
app.use(updateJiangxiRouter);
app.use(likeJiangxiRouter);
app.use(deleteJiangxiRouter);

app.all('*', async (req, res) => {
  throw new NotFoundError();
});

app.use(errorHandler);

export { app };
