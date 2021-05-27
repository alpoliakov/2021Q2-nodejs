import express from 'express';
import { StatusCodes } from 'http-status-codes';

import { NOT_FOUND_ERROR } from '../../errors/notFoundError';
import wrapAsyncFunc from '../../utils/wrapAsyncFunc';
import * as taskService from './task.service';

const router = express.Router({ mergeParams: true });

router
  .route('/')
  .get(
    wrapAsyncFunc(async (req, res) => {
      const { boardId } = req.params;
      const tasks = await taskService.getAll(boardId);
      await res.json(tasks);
    }),
  )
  .post(
    wrapAsyncFunc(async (req, res) => {
      const { boardId } = req.params;
      const task = await taskService.save({
        ...req.body,
        boardId,
      });
      res.status(StatusCodes.CREATED).send(task);
    }),
  );

router
  .route('/:id')
  .get(
    wrapAsyncFunc(async (req, res) => {
      const { id, boardId } = req.params;

      if (!id || !boardId) {
        throw new NOT_FOUND_ERROR(`Missing Id or boardId`);
      }

      const task = await taskService.get(boardId, id);
      res.status(StatusCodes.OK).send(task);
    }),
  )
  .put(
    wrapAsyncFunc(async (req, res) => {
      const { id, boardId } = req.params;

      if (!id || !boardId) {
        throw new NOT_FOUND_ERROR(`Missing Id or boardId`);
      }

      const updatedTask = await taskService.update({
        ...req.body,
        id,
        boardId,
      });
      res.status(StatusCodes.OK).send(updatedTask);
    }),
  )
  .delete(
    wrapAsyncFunc(async (req, res) => {
      const { id, boardId } = req.params;

      if (!id || !boardId) {
        throw new NOT_FOUND_ERROR(`Missing Id or boardId`);
      }

      await taskService.remove(boardId, id);
      res.sendStatus(StatusCodes.NO_CONTENT);
    }),
  );

export { router as tasksRouter };
