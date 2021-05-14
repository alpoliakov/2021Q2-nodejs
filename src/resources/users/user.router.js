const router = require('express').Router();
const { StatusCodes } = require('http-status-codes');
const User = require('./user.model');
const usersService = require('./user.service');
const wrapAsyncFunc = require('../../utils/wrapAsyncFunc');

router
  .route('/')
  .get(
    wrapAsyncFunc(async (req, res) => {
      const users = await usersService.getAll();
      await res.json(users.map(User.toResponse));
    })
  )
  .post(
    wrapAsyncFunc(async (req, res) => {
      const user = await usersService.save(req.body);
      res.status(StatusCodes.CREATED).send(User.toResponse(user));
    })
  );

router
  .route('/:id')
  .get(
    wrapAsyncFunc(async (req, res) => {
      const user = await usersService.get(req.params.id);
      res.status(StatusCodes.OK).send(User.toResponse(user));
    })
  )
  .put(
    wrapAsyncFunc(async (req, res) => {
      const user = await usersService.update(req.params.id, req.body);
      res.status(StatusCodes.OK).send(User.toResponse(user));
    })
  )
  .delete(
    wrapAsyncFunc(async (req, res) => {
      await usersService.remove(req.params.id);
      res.sendStatus(StatusCodes.NO_CONTENT);
    })
  );

module.exports = router;
