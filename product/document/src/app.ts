import express from 'express';
import 'express-async-errors';
import { json } from 'body-parser';
import cookieSession from 'cookie-session';
import { errorHandler, NotFoundError, currentUser } from '@sgtickets/common';
import { createDocumentRouter } from './routes/new';
import { showDocumentRouter } from './routes/show';
import { indexDocumentRouter } from './routes/index';
import { updateDocumentRouter } from './routes/update';
import { likeDocumentRouter } from './routes/like';
import { deleteDocumentRouter } from './routes/delete';

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

app.use(createDocumentRouter);
app.use(showDocumentRouter);
app.use(indexDocumentRouter);
app.use(updateDocumentRouter);
app.use(likeDocumentRouter);
app.use(deleteDocumentRouter);

app.all('*', async (req, res) => {
  throw new NotFoundError();
});

app.use(errorHandler);

export { app };
