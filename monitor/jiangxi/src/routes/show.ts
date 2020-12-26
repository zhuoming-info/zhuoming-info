import express, { Request, Response } from 'express';
import { NotFoundError } from '@sgtickets/common';
import { Jiangxi } from '../models/jiangxi';

const router = express.Router();

router.get('/api/forum/jiangxi/:id', async (req: Request, res: Response) => {
  const jiangxi = await Jiangxi.findById(req.params.id);

  if (!jiangxi) {
    throw new NotFoundError();
  }

  res.send(jiangxi);
});

export { router as showJiangxiRouter };
