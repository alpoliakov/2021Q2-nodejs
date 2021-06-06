import { NOT_FOUND_ERROR } from '../../errors/notFoundError';
import { IUser } from '../../ts/interfaces/app_interfaces';
import { IFindAll, IFindOneOrRemove, ISave, IUpdate } from '../../ts/interfaces/layout_interfaces';
import * as DB from '../../utils/memoryDB';

const ENTITY_NAME = 'Users';

const getAll: IFindAll<IUser> = async () => {
  const users = await DB.getAllEntities(ENTITY_NAME);
  return users as IUser[];
};

const get: IFindOneOrRemove<string, IUser> = async (id) => {
  const user = await DB.getEntity(ENTITY_NAME, id);

  if (!user) {
    throw new NOT_FOUND_ERROR(`Couldn't find a user with id: ${id}`);
  }

  return <IUser>user;
};

const save: ISave<IUser> = async (user) => {
  const newUser = await DB.saveEntity(ENTITY_NAME, user);
  return newUser as IUser;
};

const update: IUpdate<string, IUser> = async (id, user) => {
  const entity = await DB.updateEntity(ENTITY_NAME, id, user);

  if (!entity) {
    throw new NOT_FOUND_ERROR(`Couldn't find a user with id: ${id}`);
  }

  return entity as IUser;
};

const remove: IFindOneOrRemove<string, void> = async (id) => {
  if (!(await DB.removeEntity(ENTITY_NAME, id))) {
    throw new NOT_FOUND_ERROR(`Couldn't find a user with id: ${id}`);
  }
};

export { get, getAll, remove, save, update };
