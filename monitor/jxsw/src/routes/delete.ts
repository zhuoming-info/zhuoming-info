import express, { Request, Response } from 'express';
import { requireAuth, validateRequest } from '@sgtickets/common';
import { Jxsw } from '../models/jxsw';

const router = express.Router();

router.delete(
  '/api/forum/jxsw/:id',
  requireAuth,
  validateRequest,
  async (req: Request, res: Response) => {
    const jxsw = await Jxsw.findByIdAndDelete(req.params.id);
    res.status(204).send(jxsw);
  }
);

export { router as deleteJxswRouter };
