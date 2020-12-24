import express, { Request, Response } from 'express';
import {
  validateRequest,
  NotFoundError,
  requireAuth,
} from '@sgtickets/common';
import { Post } from '../models/post';

const router = express.Router();

router.put(
  '/api/post/like/:id',
  requireAuth,
  validateRequest,
  async (req: Request, res: Response) => {
    const post = await Post.findById(req.params.id);

    if (!post) {
      throw new NotFoundError();
    }

    // if (post.userId !== req.currentUser!.id) {
    //   throw new NotAuthorizedError();
    // }

    // post.set({
    //   content: req.body.content,
    // });

    const index = post.likeUsersId.map((userId) => userId.toString()).indexOf(req.currentUser!.id);
    if (index > -1) {
      post.likeUsersId.splice(index, 1);
    } else {
      post.likeUsersId.push(req.currentUser!.id);
    }

    await post.save();

    res.send(post);
  }
);

export { router as likePostRouter };
