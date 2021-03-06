import express from 'express';
import 'express-async-errors';
import { json } from 'body-parser';
import cookieSession from 'cookie-session';
import { errorHandler, NotFoundError, currentUser } from '@sgtickets/common';
import { createFoldersRouter } from './routes/folders/new';
import { showFoldersRouter } from './routes/folders/show';
import { indexFoldersRouter } from './routes/folders/index';
import { updateFoldersRouter } from './routes/folders/update';
import { likeFoldersRouter } from './routes/folders/like';
import { deleteFoldersRouter } from './routes/folders/delete';

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

app.use(createFoldersRouter);
app.use(showFoldersRouter);
app.use(indexFoldersRouter);
app.use(updateFoldersRouter);
app.use(likeFoldersRouter);
app.use(deleteFoldersRouter);

app.all('*', async (req, res) => {
  throw new NotFoundError();
});

app.use(errorHandler);

export { app };
