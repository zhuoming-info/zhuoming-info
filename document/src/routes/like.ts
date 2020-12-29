import express, { Request, Response } from 'express';
import {
  validateRequest,
  NotFoundError,
  requireAuth,
} from '@sgtickets/common';
import { Document } from '../models/document';

const router = express.Router();

router.put(
  '/api/document/like/:id',
  requireAuth,
  validateRequest,
  async (req: Request, res: Response) => {
    const document = await Document.findById(req.params.id);

    if (!document) {
      throw new NotFoundError();
    }

    // document.set({
    //   content: req.body.content,
    // });
    

    const index = document.likeUsersId.map((userId) => userId.toString()).indexOf(req.currentUser!.id);
    if (index > -1) {
      document.likeUsersId.splice(index, 1);
    } else {
      document.likeUsersId.push(req.currentUser!.id);
    }

    await document.save();

    res.send(document);
  }
);

export { router as likeDocumentRouter };
