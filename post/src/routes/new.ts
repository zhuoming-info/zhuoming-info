import express, { Request, Response } from 'express';
import { body } from 'express-validator';
import { requireAuth, validateRequest } from '@sgtickets/common';
import { Post } from '../models/post';

const router = express.Router();

router.post(
  '/api/post',
  requireAuth,
  [
    body('content').not().isEmpty().withMessage('Content is required'),
  ],
  validateRequest,
  async (req: Request, res: Response) => {
    const { content, price } = req.body;

    const post = Post.build({
      content,
      userId: req.currentUser!.id,
    });
    await post.save();

    res.status(201).send(post);
  }
);

export { router as createPostRouter };
