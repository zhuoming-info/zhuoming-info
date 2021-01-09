import express, { Request, Response } from 'express';
import { requireAuth, validateRequest } from '@sgtickets/common';
import { Post } from '../../models/post';

const router = express.Router();

router.delete(
  '/api/forum/post/:id',
  requireAuth,
  validateRequest,
  async (req: Request, res: Response) => {
    const post = await Post.findByIdAndDelete(req.params.id);
    res.status(204).send(post);
  }
);

export { router as deletePostRouter };
