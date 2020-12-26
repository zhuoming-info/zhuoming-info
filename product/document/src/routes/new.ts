import express, { Request, Response } from 'express';
import { body } from 'express-validator';
import { requireAuth, validateRequest } from '@sgtickets/common';
import { Document } from '../models/document';

const router = express.Router();

router.post(
  '/api/document',
  requireAuth,
  [
    body('content').not().isEmpty().withMessage('Content is required'),
  ],
  validateRequest,
  async (req: Request, res: Response) => {
    const { content, tag } = req.body;

    const document = Document.build({
      content,
      tag,
      userId: req.currentUser!.id,
    });
    await document.save();

    res.status(201).send(document);
  }
);

export { router as createDocumentRouter };
