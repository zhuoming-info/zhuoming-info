import express, { Request, Response } from 'express';
import { body } from 'express-validator';
import { requireAuth, validateRequest } from '@sgtickets/common';
import { Comment } from '../models/comment';

const router = express.Router();

router.post(
  '/api/comment/:postId',
  requireAuth,
  [
    body('content').not().isEmpty().withMessage('Content is required'),
  ],
  validateRequest,
  async (req: Request, res: Response) => {
    const { content } = req.body;

    const comment = Comment.build({
      content,
      postId: req.params.postId,
      userId: req.currentUser!.id,
    });
    await comment.save();

    res.status(201).send(comment);
  }
);

export { router as createCommentRouter };
