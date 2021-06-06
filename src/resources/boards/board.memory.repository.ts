import { NOT_FOUND_ERROR } from '../../errors/notFoundError';
import { IBoard } from '../../ts/interfaces/app_interfaces';
import { IFindAll, IFindOneOrRemove, ISave, IUpdate } from '../../ts/interfaces/layout_interfaces';
import * as DB from '../../utils/memoryDB';

const ENTITY_NAME = 'Boards';

const getAll: IFindAll<IBoard> = async () => {
  const boards = await DB.getAllEntities(ENTITY_NAME);
  return boards as IBoard[];
};

const get: IFindOneOrRemove<string, IBoard> = async (id) => {
  const board = await DB.getEntity(ENTITY_NAME, id);

  if (!board) {
    throw new NOT_FOUND_ERROR(`Couldn't find a board with id: ${id}`);
  }

  return board as IBoard;
};

const save: ISave<IBoard> = async (board) => {
  const newBoard = await DB.saveEntity(ENTITY_NAME, board);
  return newBoard as IBoard;
};

const update: IUpdate<string, IBoard> = async (id, board) => {
  const updatedBoard = await DB.updateEntity(ENTITY_NAME, id, board);

  if (!updatedBoard) {
    throw new NOT_FOUND_ERROR(`Couldn't find a board with id: ${id}`);
  }

  return updatedBoard as IBoard;
};

const remove: IFindOneOrRemove<string, void> = async (id) => {
  if (!(await DB.removeEntity(ENTITY_NAME, id))) {
    throw new NOT_FOUND_ERROR(`Couldn't find a board with id: ${id}`);
  }
};

export { get, getAll, remove, save, update };
