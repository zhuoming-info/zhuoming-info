import express, { Request, Response } from 'express';
import { Document } from '../models/document';

const router = express.Router();

router.get('/api/document', async (req: Request, res: Response) => {
  const document = await Document.find();

  res.send(document);
});

export { router as indexDocumentRouter };
