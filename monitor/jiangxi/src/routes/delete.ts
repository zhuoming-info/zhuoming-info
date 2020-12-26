import express, { Request, Response } from 'express';
import { requireAuth, validateRequest } from '@sgtickets/common';
import { Jiangxi } from '../models/jiangxi';

const router = express.Router();

router.delete(
  '/api/forum/jiangxi/:id',
  requireAuth,
  validateRequest,
  async (req: Request, res: Response) => {
    const jiangxi = await Jiangxi.findByIdAndDelete(req.params.id);
    res.status(204).send(jiangxi);
  }
);

export { router as deleteJiangxiRouter };
