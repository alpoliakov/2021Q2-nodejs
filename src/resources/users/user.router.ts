import express from 'express';
import { StatusCodes } from 'http-status-codes';

import { NOT_FOUND_ERROR } from '../../errors/notFoundError';
import { IUser } from '../../ts/interfaces/app_interfaces';
import wrapAsyncFunc from '../../utils/wrapAsyncFunc';
import User from './user.model';
import * as usersService from './user.service';

const router = express.Router();

router
  .route('/')
  .get(
    wrapAsyncFunc(async (_req, res) => {
      const users = await usersService.getAll();
      await res.json((users as IUser[]).map(User.toResponse));
    }),
  )
  .post(
    wrapAsyncFunc(async (req, res) => {
      const user = await usersService.save(req.body);
      res.status(StatusCodes.CREATED).send(User.toResponse(user));
    }),
  );

router
  .route('/:id')
  .get(
    wrapAsyncFunc(async (req, res) => {
      const { id } = req.params;

      if (!id) {
        throw new NOT_FOUND_ERROR('Missing Id');
      }

      const user = await usersService.get(id);
      res.status(StatusCodes.OK).send(User.toResponse(user));
    }),
  )
  .put(
    wrapAsyncFunc(async (req, res) => {
      const { id } = req.params;

      if (!id) {
        throw new NOT_FOUND_ERROR('Missing Id');
      }

      const user = await usersService.update(id, req.body);
      res.status(StatusCodes.OK).send(User.toResponse(user));
    }),
  )
  .delete(
    wrapAsyncFunc(async (req, res) => {
      const { id } = req.params;

      if (!id) {
        throw new NOT_FOUND_ERROR('Missing Id');
      }

      await usersService.remove(id);
      res.sendStatus(StatusCodes.NO_CONTENT);
    }),
  );

export { router as usersRouter };
