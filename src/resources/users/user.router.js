const router = require('express').Router();
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
      const user = await usersService.save(User.fromRequest(req.body));
      res.status(201).send(User.toResponse(user));
    })
  );

module.exports = router;
