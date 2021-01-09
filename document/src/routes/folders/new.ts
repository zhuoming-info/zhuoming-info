import express, { Request, Response } from 'express';
import { body } from 'express-validator';
import { requireAuth, validateRequest } from '@sgtickets/common';
import { Folders } from '../../models/folders';

const router = express.Router();

router.post(
  '/api/document/folders',
  requireAuth,
  [
    body('name').not().isEmpty().withMessage('Name is required'),
  ],
  validateRequest,
  async (req: Request, res: Response) => {
    const { name, level } = req.body;

    const folders = Folders.build({
      name,
      userId: req.currentUser!.id,
      level
    });
    await folders.save();

    res.status(201).send(folders);
  }
);

export { router as createFoldersRouter };
