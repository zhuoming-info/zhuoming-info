import express, { Request, Response } from 'express';
import { NotFoundError } from '../errors/not-found-error';
import { User } from '../models/user';

const router = express.Router();

router.get('/api/user/:id', async (req: Request, res: Response) => {
  const user = await User.findById(req.params.id);

  if (!user) {
    throw new NotFoundError();
  }

  res.send(user);
});

export { router as showUserRouter };
