import express, { Request, Response } from 'express';
import { NotFoundError } from '@sgtickets/common';
import { Folders } from '../models/folders';

const router = express.Router();

router.get('/api/product/folders/:id', async (req: Request, res: Response) => {
  const folders = await Folders.findById(req.params.id);

  if (!folders) {
    throw new NotFoundError();
  }

  res.send(folders);
});

export { router as showFoldersRouter };
