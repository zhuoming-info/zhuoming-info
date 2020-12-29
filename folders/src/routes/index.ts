import express, { Request, Response } from 'express';
import { Folders } from '../models/folders';

const router = express.Router();

router.get('/api/folders', async (req: Request, res: Response) => {
  const folders = await Folders.find();

  res.send(folders);
});

export { router as indexFoldersRouter };
