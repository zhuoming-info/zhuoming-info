import express, { Request, Response } from 'express';
import { body } from 'express-validator';
import {
  validateRequest,
  NotFoundError,
  requireAuth,
  NotAuthorizedError
} from '@sgtickets/common';
import { Post } from '../../models/post';

const router = express.Router();

router.put(
  '/api/forum/post/:id',
  requireAuth,
  [
    body('content').not().isEmpty().withMessage('Content is required'),
  ],
  validateRequest,
  async (req: Request, res: Response) => {
    const post = await Post.findById(req.params.id);

    if (!post) {
      throw new NotFoundError();
    }

    if (post.userId !== req.currentUser!.id) {
      throw new NotAuthorizedError();
    }

    post.set({
      content: req.body.content,
    });
    await post.save();

    res.send(post);
  }
);

export { router as updatePostRouter };
