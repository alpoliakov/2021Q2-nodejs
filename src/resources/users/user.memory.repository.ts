import { NOT_FOUND_ERROR } from '../../errors/notFoundError';
import { IUser } from '../../ts/interfaces/app_interfaces';
import * as DB from '../../utils/memoryDB';

const ENTITY_NAME = 'Users';

const getAll = async (): Promise<IUser[]> => {
  const users = await DB.getAllEntities(ENTITY_NAME);
  return users;
};

const get = async (id: string): Promise<IUser> => {
  const user = await DB.getEntity(ENTITY_NAME, id);

  if (!user) {
    throw new NOT_FOUND_ERROR(`Couldn't find a user with id: ${id}`);
  }

  return user as IUser;
};

const save = async (user: IUser): Promise<IUser> => {
  const newUser = await DB.saveEntity(ENTITY_NAME, user);
  return newUser;
};

const update = async (id: string, user: IUser): Promise<IUser> => {
  const entity = await DB.updateEntity(ENTITY_NAME, id, user);

  if (!entity) {
    throw new NOT_FOUND_ERROR(`Couldn't find a user with id: ${id}`);
  }

  return entity as IUser;
};

const remove = async (id: string): Promise<void> => {
  if (!(await DB.removeEntity(ENTITY_NAME, id))) {
    throw new NOT_FOUND_ERROR(`Couldn't find a user with id: ${id}`);
  }
};

export { get, getAll, remove, save, update };
