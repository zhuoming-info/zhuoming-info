import express, { Request, Response } from 'express';
import { Post } from '../models/post';

const router = express.Router();

router.get('/api/post', async (req: Request, res: Response) => {
  let post
  if (req.query.sort === "time") {
    post = await Post.find().sort({ createdAt: -1 });
  } else if (req.query.sort === "hot") {
    post = await Post.find().sort({ likeUsersId: -1 });
  } else {
    post = await Post.find().sort({ createdAt: -1 });
  }

  res.send(post);
});

export { router as indexPostRouter };
