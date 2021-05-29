import { IUser } from '../../ts/interfaces/app_interfaces';
import { IFindAll, IFindOneOrRemove, ISave, IUpdate } from '../../ts/interfaces/layout_interfaces';
import * as usersRepo from './user.memory.repository';
import User from './user.model';

const getAll: IFindAll<IUser> = async () => usersRepo.getAll();

const get: IFindOneOrRemove<string, IUser> = async (id) => usersRepo.get(id);

const save: ISave<IUser> = async (user) => usersRepo.save(User.fromRequest(user));

const update: IUpdate<string, IUser> = async (id, user) => usersRepo.update(id, user);

const remove: IFindOneOrRemove<string, void> = async (id) => usersRepo.remove(id);

export { get, getAll, remove, save, update };
