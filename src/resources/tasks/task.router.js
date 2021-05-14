const router = require('express').Router({ mergeParams: true });
const taskService = require('./task.service');
const wrapAsyncFunc = require('../../utils/wrapAsyncFunc');

router
  .route('/')
  .get(
    wrapAsyncFunc(async (req, res) => {
      const tasks = await taskService.getAll(req.params.boardId);
      await res.json(tasks);
    })
  )
  .post(
    wrapAsyncFunc(async (req, res) => {
      const task = await taskService.save({
        ...req.body,
        boardId: req.params.boardId,
      });
      res.status(201).send(task);
    })
  );

router
  .route('/:id')
  .get(
    wrapAsyncFunc(async (req, res) => {
      const task = await taskService.get(req.params.boardId, req.params.id);
      res.status(200).send(task);
    })
  )
  .put(
    wrapAsyncFunc(async (req, res) => {
      const updatedTask = await taskService.update({
        ...req.body,
        id: req.params.id,
        boardId: req.params.boardId,
      });
      res.status(200).send(updatedTask);
    })
  )
  .delete(
    wrapAsyncFunc(async (req, res) => {
      await taskService.remove(req.params.boardId, req.params.id);
      res.sendStatus(204);
    })
  );

module.exports = router;
