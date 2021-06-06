import 'reflect-metadata';

import cors from 'cors';
import express from 'express';
import helmet from 'helmet';
import createError from 'http-errors';
import { StatusCodes } from 'http-status-codes';
import path from 'path';
import swaggerUI from 'swagger-ui-express';
import * as YAML from 'yamljs';

import handlerError from './errors/handlerError';
import noPageExistsError from './errors/noPageExistsError';
import { boardsRouter } from './resources/boards/board.router';
import { tasksRouter } from './resources/tasks/task.router';
import { usersRouter } from './resources/users/user.router';
import logMiddleware from './utils/logMiddleware';
import startService from './utils/startService';

const app = express();
app.use(cors());
app.use(helmet());
const swaggerDocument = YAML.load(path.join(__dirname, '../doc/api.yaml'));

app.use(express.json());

app.use('/doc', swaggerUI.serve, swaggerUI.setup(swaggerDocument));

app.use('/', startService);

app.use(logMiddleware);

app.use('/users', usersRouter);
app.use('/boards', boardsRouter);
boardsRouter.use('/:boardId/tasks', tasksRouter);

app.use('*', noPageExistsError);
app.use((_req, _res, next) => next(createError(StatusCodes.NOT_FOUND)));
app.use(handlerError);

export default app;
