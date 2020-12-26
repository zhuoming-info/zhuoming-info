import express, { Request, Response } from 'express';
import { body } from 'express-validator';
import {
  validateRequest,
  NotFoundError,
  requireAuth,
  NotAuthorizedError
} from '@sgtickets/common';
import { Jxsw } from '../models/jxsw';

const router = express.Router();

router.put(
  '/api/forum/jxsw/:id',
  requireAuth,
  [
    body('content').not().isEmpty().withMessage('Content is required'),
  ],
  validateRequest,
  async (req: Request, res: Response) => {
    const jxsw = await Jxsw.findById(req.params.id);

    if (!jxsw) {
      throw new NotFoundError();
    }

    if (jxsw.userId !== req.currentUser!.id) {
      throw new NotAuthorizedError();
    }

    jxsw.set({
      content: req.body.content,
    });
    await jxsw.save();

    res.send(jxsw);
  }
);

export { router as updateJxswRouter };
