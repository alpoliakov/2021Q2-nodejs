const router = require('express').Router();
const { StatusCodes } = require('http-status-codes');
const boardsService = require('./board.service');
const wrapAsyncFunc = require('../../utils/wrapAsyncFunc');

router
  .route('/')
  .get(
    wrapAsyncFunc(async (req, res) => {
      const boards = await boardsService.getAll();
      await res.json(boards);
    })
  )
  .post(
    wrapAsyncFunc(async (req, res) => {
      const board = await boardsService.save(req.body);
      res.status(StatusCodes.CREATED).send(board);
    })
  );

router
  .route('/:id')
  .get(
    wrapAsyncFunc(async (req, res) => {
      const board = await boardsService.get(req.params.id);
      res.status(StatusCodes.OK).send(board);
    })
  )
  .put(
    wrapAsyncFunc(async (req, res) => {
      const board = await boardsService.update(req.params.id, req.body);
      res.status(StatusCodes.OK).send(board);
    })
  )
  .delete(
    wrapAsyncFunc(async (req, res) => {
      await boardsService.remove(req.params.id);
      res.sendStatus(StatusCodes.NO_CONTENT);
    })
  );

module.exports = router;
