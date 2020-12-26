import express, { Request, Response } from 'express';
import { requireAuth, validateRequest } from '@sgtickets/common';
import { Document } from '../models/document';

const router = express.Router();

router.delete(
  '/api/document/:id',
  requireAuth,
  validateRequest,
  async (req: Request, res: Response) => {
    const document = await Document.findByIdAndDelete(req.params.id);
    res.status(204).send(document);
  }
);

export { router as deleteDocumentRouter };
