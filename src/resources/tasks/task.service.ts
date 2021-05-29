import { ITask } from '../../ts/interfaces/app_interfaces';
import { IFindAllTasks, IFindOneOrRemoveTasks, ISave } from '../../ts/interfaces/layout_interfaces';
import * as tasksRepo from './task.memory.repository';
import Task from './task.model';

const getAll: IFindAllTasks<string, ITask> = (boardId) => tasksRepo.getAll(boardId);

const get: IFindOneOrRemoveTasks<string, ITask> = (boardId, id) => tasksRepo.get(boardId, id);

const save: ISave<ITask> = (task) => tasksRepo.save(Task.fromRequest(task));

const update: ISave<ITask> = (task) => tasksRepo.update(task);

const remove: IFindOneOrRemoveTasks<string, void> = (boardId, id) => tasksRepo.remove(boardId, id);

export { get, getAll, remove, save, update };
