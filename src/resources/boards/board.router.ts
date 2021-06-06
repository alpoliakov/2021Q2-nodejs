import express from 'express';
import { StatusCodes } from 'http-status-codes';

import { NOT_FOUND_ERROR } from '../../errors/notFoundError';
import wrapAsyncFunc from '../../utils/wrapAsyncFunc';

const boardsService = require('./board.service');

const router = express.Router();

router
  .route('/')
  .get(
    wrapAsyncFunc(async (_req, res) => {
      const boards = await boardsService.getAll();
      await res.json(boards);
    }),
  )
  .post(
    wrapAsyncFunc(async (req, res) => {
      const board = await boardsService.save(req.body);
      res.status(StatusCodes.CREATED).send(board);
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

      const board = await boardsService.get(id);
      res.status(StatusCodes.OK).send(board);
    }),
  )
  .put(
    wrapAsyncFunc(async (req, res) => {
      const { id } = req.params;

      if (!id) {
        throw new NOT_FOUND_ERROR('Missing Id');
      }

      const board = await boardsService.update(id, req.body);
      res.status(StatusCodes.OK).send(board);
    }),
  )
  .delete(
    wrapAsyncFunc(async (req, res) => {
      const { id } = req.params;

      if (!id) {
        throw new NOT_FOUND_ERROR('Missing Id');
      }

      await boardsService.remove(id);
      res.sendStatus(StatusCodes.NO_CONTENT);
    }),
  );

export { router as boardsRouter };
