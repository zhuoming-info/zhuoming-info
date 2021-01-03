import express, { Request, Response } from 'express';
import { Post } from '../models/post';

const router = express.Router();

router.get('/api/post', async (req: Request, res: Response) => {
  let time = 1
  if (req.query.sort === "time") {
    time = -1
  }
  let like = 1
  if (req.query.sort === "like") {
    like = -1
  }
  // let tag = ""
  // if (req.query.tag) {
  //   tag = req.query.tag
  // }

  const post = await Post.find().sort({ createdAt: time, likeUsersId: like });

  res.send(post);
});

export { router as indexPostRouter };
