import Board from '../resources/boards/board.model';
import Task from '../resources/tasks/task.model';
import User from '../resources/users/user.model';
import { IBoard, IDB, ITask, IUser } from '../ts/interfaces/app_interfaces';

const DB: IDB = {
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
      DB.Tasks = [...DB.Tasks.filter((task) => task && task.boardId !== board.id)];
    }
  },
  fixStructureTasks: () => undefined,
};

const getAllEntities = (nameEntity: string) => DB[nameEntity].filter(<T>(item: T) => item);

const getEntity = (nameEntity: string, id: string) => {
  const entities = DB[nameEntity]
    .filter(<T>(item: T) => item)
    .filter((item: { id: string }) => item.id === id);

  if (entities.length > 1) {
    console.error(`DB data is damaged. Entity: ${nameEntity}. EntityID: ${id}.`);
    throw Error('DB data is wrong!');
  }

  return entities[0];
};

const updateEntity = async <T>(nameEntity: string, id: string, entity: T): Promise<T> => {
  const oldEntity = await getEntity(nameEntity, id);

  if (oldEntity) {
    DB[nameEntity][DB[nameEntity].indexOf(oldEntity)] = { id, ...entity };
  }

  return getEntity(nameEntity, id);
};

const removeEntity = async (nameEntity: string, id: string) => {
  const entity = await getEntity(nameEntity, id);

  if (entity) {
    DB[`fixStructure${nameEntity}`](entity);
    DB[nameEntity] = [...DB[nameEntity].filter((item: { id: string }) => item && item.id !== id)];
  }

  return entity;
};

const saveEntity = (nameEntity: string, entity: IUser | IBoard | ITask) => {
  DB[nameEntity].push(entity);

  return getEntity(nameEntity, entity.id);
};

(() => {
  for (let i = 0; i < 3; i += 1) {
    DB.Users.push(new User());
  }

  const board = new Board();
  DB.Boards.push(board);
  DB.Tasks.push(new Task({ boardId: board.id }), new Task({ boardId: board.id }));
})();

export { getAllEntities, getEntity, removeEntity, saveEntity, updateEntity };
