import express, { Request, Response } from 'express';
import { body } from 'express-validator';
import {
  validateRequest,
  NotFoundError,
  requireAuth,
  NotAuthorizedError
} from '@sgtickets/common';
import { Jiangxi } from '../models/jiangxi';

const router = express.Router();

router.put(
  '/api/forum/jiangxi/:id',
  requireAuth,
  [
    body('content').not().isEmpty().withMessage('Content is required'),
  ],
  validateRequest,
  async (req: Request, res: Response) => {
    const jiangxi = await Jiangxi.findById(req.params.id);

    if (!jiangxi) {
      throw new NotFoundError();
    }

    if (jiangxi.userId !== req.currentUser!.id) {
      throw new NotAuthorizedError();
    }

    jiangxi.set({
      content: req.body.content,
    });
    await jiangxi.save();

    res.send(jiangxi);
  }
);

export { router as updateJiangxiRouter };
