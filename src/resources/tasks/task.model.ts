import { v4 as uuidv4 } from 'uuid';

import { ITask } from '../../ts/interfaces/app_interfaces';

class Task implements ITask {
  id: string;

  title: string;

  order: number;

  description: string;

  userId: null | string;

  boardId: null | string;

  columnId: null | string;

  constructor({
    id = uuidv4(),
    title = 'Task',
    order = 0,
    description = 'task description',
    userId = null,
    boardId = '',
    columnId = '',
  } = {}) {
    this.id = id;
    this.title = title;
    this.order = order;
    this.description = description;
    this.userId = userId;
    this.boardId = boardId;
    this.columnId = columnId;
  }

  static fromRequest<T>(body: T): ITask {
    return new Task(body);
  }
}

export default Task;
