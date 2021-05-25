const express = require('express');
const swaggerUI = require('swagger-ui-express');
const path = require('path');
const YAML = require('yamljs');
const usersRouter = require('./resources/users/user.router');
const boardsRouter = require('./resources/boards/board.router');
const tasksRouter = require('./resources/tasks/task.router');
const startService = require('./utils/startService');
const handlerError = require('./errors/handlerError');
const noPageExistsError = require('./errors/noPageExistsError');

const app = express();
const swaggerDocument = YAML.load(path.join(__dirname, '../doc/api.yaml'));

app.use(express.json());

app.use('/doc', swaggerUI.serve, swaggerUI.setup(swaggerDocument));

app.use('/', startService);

app.use('/users', usersRouter);
app.use('/boards', boardsRouter);
boardsRouter.use('/:boardId/tasks', tasksRouter);
app.use('*', noPageExistsError);
app.use(handlerError);

module.exports = app;
