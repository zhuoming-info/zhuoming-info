import express, { Request, Response } from 'express';
import { body } from 'express-validator';
import { requireAuth, validateRequest } from '@sgtickets/common';
import { Jxsw } from '../models/jxsw';

const router = express.Router();

router.post(
  '/api/forum/jxsw',
  requireAuth,
  [
    body('content').not().isEmpty().withMessage('Content is required'),
  ],
  validateRequest,
  async (req: Request, res: Response) => {
    const { content, tag } = req.body;

    const jxsw = Jxsw.build({
      content,
      tag,
      userId: req.currentUser!.id,
    });
    await jxsw.save();

    res.status(201).send(jxsw);
  }
);

export { router as createJxswRouter };
