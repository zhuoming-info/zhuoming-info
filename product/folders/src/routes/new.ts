import express, { Request, Response } from 'express';
import { body } from 'express-validator';
import { requireAuth, validateRequest } from '@sgtickets/common';
import { Folders } from '../models/folders';

const router = express.Router();

router.post(
  '/api/product/folders',
  requireAuth,
  [
    body('name').not().isEmpty().withMessage('Name is required'),
  ],
  validateRequest,
  async (req: Request, res: Response) => {
    const { name } = req.body;

    const folders = Folders.build({
      name,
      userId: req.currentUser!.id,
    });
    await folders.save();

    res.status(201).send(folders);
  }
);

export { router as createFoldersRouter };
