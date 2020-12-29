import express, { Request, Response } from 'express';
import { Comment } from '../models/comment';

const router = express.Router();

router.get('/api/comment/:postId', async (req: Request, res: Response) => {
  const comment = await Comment.find({ postId: req.params.postId });

  res.send(comment);
});

export { router as indexCommentRouter };
