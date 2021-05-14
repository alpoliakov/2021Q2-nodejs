const User = require('../resources/users/user.model');
const Board = require('../resources/boards/board.model');
const Task = require('../resources/tasks/task.model');

const DB = {
  Users: [],
  Boards: [],
  Tasks: [],
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
  fixStructureBoards: (board) => {
    if (board) {
      DB.Tasks = [
        ...DB.Tasks.filter((task) => task && task.boardId !== board.id),
      ];
    }
  },
  fixStructureTasks: () => {},
};

const getAllEntities = (entityName) => DB[entityName].filter((item) => item);

const getEntity = (entityName, id) => {
  const entities = DB[entityName]
    .filter((item) => item)
    .filter((item) => item.id === id);

  if (entities.length > 1) {
    console.error(
      `DB data is damaged. Entity: ${entityName}. EntityID: ${id}.`
    );
    throw Error('DB data is wrong!');
  }

  return entities[0];
};

const updateEntity = async (nameEntity, id, entity) => {
  const oldEntity = getEntity(nameEntity, id);

  if (oldEntity) {
    DB[nameEntity][DB[nameEntity].indexOf(oldEntity)] = { id, ...entity };
  }

  return getEntity(nameEntity, id);
};

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
