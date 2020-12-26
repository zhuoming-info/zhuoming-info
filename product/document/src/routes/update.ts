import express, { Request, Response } from 'express';
import { body } from 'express-validator';
import {
  validateRequest,
  NotFoundError,
  requireAuth,
  NotAuthorizedError
} from '@sgtickets/common';
import { Document } from '../models/document';

const router = express.Router();

router.put(
  '/api/document/:id',
  requireAuth,
  [
    body('content').not().isEmpty().withMessage('Content is required'),
  ],
  validateRequest,
  async (req: Request, res: Response) => {
    const document = await Document.findById(req.params.id);

    if (!document) {
      throw new NotFoundError();
    }

    if (document.userId !== req.currentUser!.id) {
      throw new NotAuthorizedError();
    }

    document.set({
      content: req.body.content,
    });
    await document.save();

    res.send(document);
  }
);

export { router as updateDocumentRouter };
