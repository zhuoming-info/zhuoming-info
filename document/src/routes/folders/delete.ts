import express, { Request, Response } from 'express';
import { requireAuth, validateRequest } from '@sgtickets/common';
import { Folders } from '../../models/folders';

const router = express.Router();

router.delete(
  '/api/document/folders/:id',
  requireAuth,
  validateRequest,
  async (req: Request, res: Response) => {
    const folders = await Folders.findByIdAndDelete(req.params.id);
    res.status(204).send(folders);
  }
);

export { router as deleteFoldersRouter };
