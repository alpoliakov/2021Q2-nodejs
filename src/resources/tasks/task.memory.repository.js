const DB = require('../../utils/memoryDB');

const ENTITY_NAME = 'Tasks';
const { NOT_FOUND_ERROR } = require('../../errors/notFoundError');

const getAll = async (boardId) =>
  DB.getAllEntities(ENTITY_NAME).filter((task) => task.boardId === boardId);

const get = async (boardId, id) => {
  const task = await DB.getEntity(ENTITY_NAME, id);

  if (!task || task.boardId !== boardId) {
    throw new NOT_FOUND_ERROR(
      `Couldn't find a task with id: ${id} and boardId: ${boardId}`
    );
  }

  return task;
};

const save = async (task) => DB.saveEntity(ENTITY_NAME, task);

const remove = async (boardId, id) => {
  if (!(await DB.removeEntity(ENTITY_NAME, id))) {
    throw new NOT_FOUND_ERROR(
      `Couldn't find a task with id: ${id} and boardId: ${boardId}`
    );
  }
};

const update = async (task) => {
  const entity = await DB.updateEntity(ENTITY_NAME, task.id, task);

  if (!entity) {
    throw new NOT_FOUND_ERROR(`Couldn't find a task with id: ${task.id}`);
  }

  return entity;
};

module.exports = { getAll, save, get, remove, update };
