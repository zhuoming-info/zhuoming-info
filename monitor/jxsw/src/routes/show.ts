import express, { Request, Response } from 'express';
import { NotFoundError } from '@sgtickets/common';
import { Jxsw } from '../models/jxsw';

const router = express.Router();

router.get('/api/forum/jxsw/:id', async (req: Request, res: Response) => {
  const jxsw = await Jxsw.findById(req.params.id);

  if (!jxsw) {
    throw new NotFoundError();
  }

  res.send(jxsw);
});

export { router as showJxswRouter };
