import express, { Request, Response } from 'express';
import { NotFoundError } from '@sgtickets/common';
import { Document } from '../models/document';

const router = express.Router();

router.get('/api/document/:id', async (req: Request, res: Response) => {
  const document = await Document.findById(req.params.id);

  if (!document) {
    throw new NotFoundError();
  }

  res.send(document);
});

export { router as showDocumentRouter };
