import express, { Request, Response } from 'express';
import {
  validateRequest,
  NotFoundError,
  requireAuth,
} from '@sgtickets/common';
import { Comment } from '../models/comment';

const router = express.Router();

router.put(
  '/api/forum/comment/like/:id',
  requireAuth,
  validateRequest,
  async (req: Request, res: Response) => {
    const comment = await Comment.findById(req.params.id);

    if (!comment) {
      throw new NotFoundError();
    }

    // comment.set({
    //   content: req.body.content,
    // });
    

    const index = comment.likeUsersId.map((userId) => userId.toString()).indexOf(req.currentUser!.id);
    if (index > -1) {
      comment.likeUsersId.splice(index, 1);
    } else {
      comment.likeUsersId.push(req.currentUser!.id);
    }

    await comment.save();

    res.send(comment);
  }
);

export { router as likeCommentRouter };
