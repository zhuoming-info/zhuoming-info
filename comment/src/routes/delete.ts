import express, { Request, Response } from 'express';
import { requireAuth, validateRequest } from '@sgtickets/common';
import { Comment } from '../models/comment';

const router = express.Router();

router.delete(
  '/api/comment/:id',
  requireAuth,
  validateRequest,
  async (req: Request, res: Response) => {
    const comment = await Comment.findByIdAndDelete(req.params.id);
    res.status(204).send(comment);
  }
);

export { router as deleteCommentRouter };
