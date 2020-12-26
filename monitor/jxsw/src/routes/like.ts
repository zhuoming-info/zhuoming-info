import express, { Request, Response } from 'express';
import {
  validateRequest,
  NotFoundError,
  requireAuth,
} from '@sgtickets/common';
import { Jxsw } from '../models/jxsw';

const router = express.Router();

router.put(
  '/api/forum/jxsw/like/:id',
  requireAuth,
  validateRequest,
  async (req: Request, res: Response) => {
    const jxsw = await Jxsw.findById(req.params.id);

    if (!jxsw) {
      throw new NotFoundError();
    }

    // jxsw.set({
    //   content: req.body.content,
    // });
    

    const index = jxsw.likeUsersId.map((userId) => userId.toString()).indexOf(req.currentUser!.id);
    if (index > -1) {
      jxsw.likeUsersId.splice(index, 1);
    } else {
      jxsw.likeUsersId.push(req.currentUser!.id);
    }

    await jxsw.save();

    res.send(jxsw);
  }
);

export { router as likeJxswRouter };
