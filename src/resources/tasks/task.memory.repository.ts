import { NOT_FOUND_ERROR } from '../../errors/notFoundError';
import { ITask } from '../../ts/interfaces/app_interfaces';
import * as DB from '../../utils/memoryDB';

const ENTITY_NAME = 'Tasks';

const getAll = async (boardId: string): Promise<ITask[]> => {
  const tasks = await DB.getAllEntities(ENTITY_NAME);
  const result = (tasks as ITask[]).filter((task) => task.boardId === boardId);

  return result as ITask[];
};

const get = async (boardId: string, id: string): Promise<ITask> => {
  const task = await DB.getEntity(ENTITY_NAME, id);

  if (!task || (task as ITask).boardId !== boardId) {
    throw new NOT_FOUND_ERROR(`Couldn't find a task with id: ${id} and boardId: ${boardId}`);
  }

  return task as ITask;
};

const save = async (task: ITask): Promise<ITask> => {
  const newTask = await DB.saveEntity(ENTITY_NAME, task);
  return newTask as ITask;
};

const update = async (task: ITask): Promise<ITask> => {
  const updatedTask = await DB.updateEntity(ENTITY_NAME, task.id, task);

  if (!updatedTask) {
    throw new NOT_FOUND_ERROR(
      `Couldn't find a task with id: ${task.id} and boardId: ${task.boardId}`,
    );
  }

  return updatedTask as ITask;
};

const remove = async (boardId: string, id: string): Promise<void> => {
  if (!(await DB.removeEntity(ENTITY_NAME, id))) {
    throw new NOT_FOUND_ERROR(`Couldn't find a task with id: ${id} and boardId: ${boardId}`);
  }
};

export { get, getAll, remove, save, update };
