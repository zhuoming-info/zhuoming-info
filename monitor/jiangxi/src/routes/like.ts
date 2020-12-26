import express, { Request, Response } from 'express';
import {
  validateRequest,
  NotFoundError,
  requireAuth,
} from '@sgtickets/common';
import { Jiangxi } from '../models/jiangxi';

const router = express.Router();

router.put(
  '/api/forum/jiangxi/like/:id',
  requireAuth,
  validateRequest,
  async (req: Request, res: Response) => {
    const jiangxi = await Jiangxi.findById(req.params.id);

    if (!jiangxi) {
      throw new NotFoundError();
    }

    // jiangxi.set({
    //   content: req.body.content,
    // });
    

    const index = jiangxi.likeUsersId.map((userId) => userId.toString()).indexOf(req.currentUser!.id);
    if (index > -1) {
      jiangxi.likeUsersId.splice(index, 1);
    } else {
      jiangxi.likeUsersId.push(req.currentUser!.id);
    }

    await jiangxi.save();

    res.send(jiangxi);
  }
);

export { router as likeJiangxiRouter };
