const User = require('../resources/users/user.model');
const Board = require('../resources/boards/board.model');
const Task = require('../resources/tasks/task.model');

/**
 * DB module
 * @module DB
 */

/**
 * Data Base object
 * @type {Object.<Array, Array, Array, Function, Function, Function>}
 * @namespace
 */
const DB = {
  /**
   * @property {UserData[]} Users Array user objects
   */
  Users: [],
  /**
   * @property {BoardData[]} Boards Array board objects
   */
  Boards: [],
  /**
   * @property {TaskData[]} Tasks Array task objects
   */
  Tasks: [],
  /**
   * @param {UserData} user - User entity
   * @returns void Filtered the Tasks array, but don't return anything
   */
  fixStructureUsers: (user) => {
    if (user) {
      DB.Tasks = [
        ...DB.Tasks.filter((task) => task).map((task) => {
          const item = { ...task };
          item.userId = task.userId === user.id ? null : task.userId;
          return item;
        }),
      ];
    }
  },
  /**
   * @param {BoardData} board - Board entity
   * @returns void Filtered the Tasks array, but don't return anything
   */
  fixStructureBoards: (board) => {
    if (board) {
      DB.Tasks = [
        ...DB.Tasks.filter((task) => task && task.boardId !== board.id),
      ];
    }
  },
  /**
   * @returns {Object} Return empty object
   */
  fixStructureTasks: () => {},
};

/**
 * Returns an array of all entities with the passed name.
 * @param {string} nameEntity Entity name
 * @returns {Array<Object>} Array of all entities with the passed name
 */
const getAllEntities = (nameEntity) => DB[nameEntity].filter((item) => item);

/**
 * Returns entity from DB with the passed name and id.
 * @param {string} nameEntity Entity name
 * @param {string} id Id entity
 * @returns {Object} Entity object
 */
const getEntity = (nameEntity, id) => {
  const entities = DB[nameEntity]
    .filter((item) => item)
    .filter((item) => item.id === id);

  if (entities.length > 1) {
    console.error(
      `DB data is damaged. Entity: ${nameEntity}. EntityID: ${id}.`
    );
    throw Error('DB data is wrong!');
  }

  return entities[0];
};

/**
 * Returns updated entity from DB with the passed name, id and entity.
 * @param {string} nameEntity - Entity name
 * @param {string} id - Entity id
 * @param {Object} entity - Entity object
 * @returns {Object} - Updated entity
 */
const updateEntity = async (nameEntity, id, entity) => {
  const oldEntity = getEntity(nameEntity, id);

  if (oldEntity) {
    DB[nameEntity][DB[nameEntity].indexOf(oldEntity)] = { id, ...entity };
  }

  return getEntity(nameEntity, id);
};

/**
 * Returns deleted entity from DB with the passed name and id.
 * @param {string} nameEntity Entity name
 * @param {string} id Id entity
 * @returns {Object} Entity object
 */
const removeEntity = (nameEntity, id) => {
  const entity = getEntity(nameEntity, id);

  if (entity) {
    DB[`fixStructure${nameEntity}`](entity);
    DB[nameEntity] = [
      ...DB[nameEntity].filter((item) => item && item.id !== id),
    ];
  }

  return entity;
};

/**
 * Returns saved entity from DB with the passed name entity and entity.
 * @param {string} nameEntity Entity name
 * @param {Object} entity Entity object
 * @returns {Object} Entity object
 */
const saveEntity = (nameEntity, entity) => {
  DB[nameEntity].push(entity);

  return getEntity(nameEntity, entity.id);
};

(() => {
  for (let i = 0; i < 3; i += 1) {
    DB.Users.push(new User());
  }

  const board = new Board();
  DB.Boards.push(board);
  DB.Tasks.push(
    new Task({ boardId: board.id }),
    new Task({ boardId: board.id })
  );
})();

module.exports = {
  getAllEntities,
  getEntity,
  updateEntity,
  saveEntity,
  removeEntity,
};