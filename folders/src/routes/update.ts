import express, { Request, Response } from 'express';
import { body } from 'express-validator';
import {
  validateRequest,
  NotFoundError,
  requireAuth,
  NotAuthorizedError
} from '@sgtickets/common';
import { Folders } from '../models/folders';

const router = express.Router();

router.put(
  '/api/folders/:id',
  requireAuth,
  [
    body('name').not().isEmpty().withMessage('Name is required'),
  ],
  validateRequest,
  async (req: Request, res: Response) => {
    const folders = await Folders.findById(req.params.id);

    if (!folders) {
      throw new NotFoundError();
    }

    if (folders.userId !== req.currentUser!.id) {
      throw new NotAuthorizedError();
    }

    folders.set({
      name: req.body.name,
    });
    await folders.save();

    res.send(folders);
  }
);

export { router as updateFoldersRouter };
