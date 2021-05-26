import 'reflect-metadata';

import dotenv from 'dotenv';
import express from 'express';
import path from 'path';
import swaggerUI from 'swagger-ui-express';
import YAML from 'yamljs';

import handlerError from './errors/handlerError';
import noPageExistsError from './errors/noPageExistsError';
import { usersRouter } from './resources/users/user.router';
import startService from './utils/startService';

dotenv.config();

const boardsRouter = require('./resources/boards/board.router');
const tasksRouter = require('./resources/tasks/task.router');

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

export default app;
