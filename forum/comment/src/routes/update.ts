import express, { Request, Response } from 'express';
import { body } from 'express-validator';
import {
  validateRequest,
  NotFoundError,
  requireAuth,
  NotAuthorizedError
} from '@sgtickets/common';
import { Comment } from '../models/comment';

const router = express.Router();

router.put(
  '/api/forum/comment/:id',
  requireAuth,
  [
    body('content').not().isEmpty().withMessage('Content is required'),
  ],
  validateRequest,
  async (req: Request, res: Response) => {
    const comment = await Comment.findById(req.params.id);

    if (!comment) {
      throw new NotFoundError();
    }

    if (comment.userId !== req.currentUser!.id) {
      throw new NotAuthorizedError();
    }

    comment.set({
      content: req.body.content,
    });
    await comment.save();

    res.send(comment);
  }
);

export { router as updateCommentRouter };
