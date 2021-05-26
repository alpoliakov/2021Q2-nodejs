import { IUser } from '../../ts/interfaces/app_interfaces';
import * as usersRepo from './user.memory.repository';
import User from './user.model';

const getAll = async (): Promise<IUser[]> => usersRepo.getAll();

const get = async (id: string): Promise<IUser> => usersRepo.get(id);

const save = async (user: IUser): Promise<IUser> => usersRepo.save(User.fromRequest(user));

const update = async (id: string, user: IUser): Promise<IUser> => usersRepo.update(id, user);

const remove = async (id: string): Promise<void> => usersRepo.remove(id);

export { get, getAll, remove, save, update };
