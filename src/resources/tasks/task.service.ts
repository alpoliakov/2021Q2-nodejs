import { ITask } from '../../ts/interfaces/app_interfaces';
import * as tasksRepo from './task.memory.repository';
import Task from './task.model';

const getAll = (boardId: string): Promise<ITask[]> => tasksRepo.getAll(boardId);

const get = (boardId: string, id: string): Promise<ITask> => tasksRepo.get(boardId, id);

const save = (task: ITask): Promise<ITask> => tasksRepo.save(Task.fromRequest(task));

const update = (task: ITask): Promise<ITask> => tasksRepo.update(task);

const remove = (boardId: string, id: string): Promise<void> => tasksRepo.remove(boardId, id);

export { get, getAll, remove, save, update };
