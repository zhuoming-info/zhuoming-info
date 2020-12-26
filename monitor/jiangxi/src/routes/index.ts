import express, { Request, Response } from 'express';
import { Jiangxi } from '../models/jiangxi';

const router = express.Router();

router.get('/api/forum/jiangxi', async (req: Request, res: Response) => {
  const jiangxi = await Jiangxi.find();

  res.send(jiangxi);
});

export { router as indexJiangxiRouter };
