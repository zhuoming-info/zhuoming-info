import express, { Request, Response } from 'express';
import {
  validateRequest,
  NotFoundError,
  requireAuth,
} from '@sgtickets/common';
import { Folders } from '../models/folders';

const router = express.Router();

router.put(
  '/api/product/folders/like/:id',
  requireAuth,
  validateRequest,
  async (req: Request, res: Response) => {
    const folders = await Folders.findById(req.params.id);

    if (!folders) {
      throw new NotFoundError();
    }

    // folders.set({
    //   name: req.body.name,
    // });
    

    // const index = folders.likeUsersId.map((userId) => userId.toString()).indexOf(req.currentUser!.id);
    // if (index > -1) {
    //   folders.likeUsersId.splice(index, 1);
    // } else {
    //   folders.likeUsersId.push(req.currentUser!.id);
    // }

    await folders.save();

    res.send(folders);
  }
);

export { router as likeFoldersRouter };
