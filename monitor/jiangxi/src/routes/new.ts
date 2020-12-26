import express, { Request, Response } from 'express';
import { body } from 'express-validator';
import { requireAuth, validateRequest } from '@sgtickets/common';
import { Jiangxi } from '../models/jiangxi';

const router = express.Router();

router.post(
  '/api/forum/jiangxi',
  requireAuth,
  [
    body('content').not().isEmpty().withMessage('Content is required'),
  ],
  validateRequest,
  async (req: Request, res: Response) => {
    const { content, tag } = req.body;

    const jiangxi = Jiangxi.build({
      content,
      tag,
      userId: req.currentUser!.id,
    });
    await jiangxi.save();

    res.status(201).send(jiangxi);
  }
);

export { router as createJiangxiRouter };
