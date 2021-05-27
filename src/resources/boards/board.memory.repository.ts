import { NOT_FOUND_ERROR } from '../../errors/notFoundError';
import { IBoard } from '../../ts/interfaces/app_interfaces';
import * as DB from '../../utils/memoryDB';

const ENTITY_NAME = 'Boards';

const getAll = async (): Promise<IBoard[]> => {
  const boards = await DB.getAllEntities(ENTITY_NAME);
  return boards as IBoard[];
};

const get = async (id: string): Promise<IBoard> => {
  const board = await DB.getEntity(ENTITY_NAME, id);

  if (!board) {
    throw new NOT_FOUND_ERROR(`Couldn't find a board with id: ${id}`);
  }

  return board as IBoard;
};

const save = async (board: IBoard): Promise<IBoard> => {
  const newBoard = await DB.saveEntity(ENTITY_NAME, board);
  return newBoard as IBoard;
};

const update = async (id: string, board: IBoard): Promise<IBoard> => {
  const updatedBoard = await DB.updateEntity(ENTITY_NAME, id, board);

  if (!updatedBoard) {
    throw new NOT_FOUND_ERROR(`Couldn't find a board with id: ${id}`);
  }

  return updatedBoard as IBoard;
};

const remove = async (id: string): Promise<void> => {
  if (!(await DB.removeEntity(ENTITY_NAME, id))) {
    throw new NOT_FOUND_ERROR(`Couldn't find a board with id: ${id}`);
  }
};

export { get, getAll, remove, save, update };
