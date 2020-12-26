import express, { Request, Response } from 'express';
import { Jxsw } from '../models/jxsw';

const router = express.Router();

router.get('/api/forum/jxsw', async (req: Request, res: Response) => {
  const jxsw = await Jxsw.find();

  res.send(jxsw);
});

export { router as indexJxswRouter };
