const DB = require('../../utils/memoryDB');
const { NOT_FOUND_ERROR } = require('../../errors/notFoundError');

const ENTITY_NAME = 'Boards';

const getAll = async () => DB.getAllEntities(ENTITY_NAME);

const get = async (id) => {
  const board = DB.getEntity(ENTITY_NAME, id);

  if (!board) {
    throw new NOT_FOUND_ERROR(`Couldn't find a board with id: ${id}`);
  }

  return board;
};

const save = async (board) => DB.saveEntity(ENTITY_NAME, board);

const remove = async (id) => {
  if (!(await DB.removeEntity(ENTITY_NAME, id))) {
    throw new NOT_FOUND_ERROR(`Couldn't find a board with id: ${id}`);
  }
};

const update = async (id, board) => {
  const entity = await DB.updateEntity(ENTITY_NAME, id, board);

  if (!entity) {
    throw new NOT_FOUND_ERROR(`Couldn't find a board with id: ${id}`);
  }

  return entity;
};

module.exports = { getAll, get, save, remove, update };
