import Board from '../resources/boards/board.model';
import Task from '../resources/tasks/task.model';
import User from '../resources/users/user.model';
import { IBoard, IDB, IUser, TypeFixStructure } from '../ts/interfaces/app_interfaces';
import {
  TestEnum,
  TypeAllEntities,
  TypeEntities,
  TypeGetOrRemoveEntity,
  TypeUpdateEntity,
} from '../ts/types/db-types';

const DB: IDB = {
  Users: [],
  Boards: [],
  Tasks: [],
  fixStructureUsers: (user) => {
    if (user) {
      DB.Tasks.forEach((task) => {
        task.userId = task.userId === user.id ? null : task.userId;
      });
    }
  },
  fixStructureBoards: (board) => {
    if (board) {
      DB.Tasks = DB.Tasks.filter((task) => task && task.boardId !== board.id);
    }
  },
  fixStructureTasks: () => undefined,
};

const getAllEntities: TypeAllEntities = (nameEntity) => DB[nameEntity] as Array<TypeEntities>;

const getEntity: TypeGetOrRemoveEntity = async (nameEntity, id) => {
  const entities = await (DB[nameEntity] as Array<TypeEntities>).filter(
    (item: { id: string }) => item.id === id,
  );

  if (entities.length > 1) {
    console.error(`DB data is damaged. Entity: ${nameEntity}. EntityID: ${id}.`);
    throw Error('DB data is wrong!');
  }

  return entities[TestEnum.FirstIndex];
};

const saveEntity = (nameEntity: string, entity: TypeEntities): TypeEntities => {
  (<Array<TypeEntities>>DB[nameEntity]).push(entity);

  return entity;
};

const updateEntity: TypeUpdateEntity = async (nameEntity, id, entity) => {
  const oldEntity = await getEntity(nameEntity, id);

  if (oldEntity) {
    (DB[nameEntity] as Array<TypeEntities>)[
      (DB[nameEntity] as Array<TypeEntities>).indexOf(oldEntity)
    ] = { ...oldEntity, ...entity };
  }

  return getEntity(nameEntity, id);
};

const removeEntity: TypeGetOrRemoveEntity = async (nameEntity, id) => {
  const entity = await getEntity(nameEntity, id);

  if (entity) {
    const result: IUser | IBoard = nameEntity === 'Users' ? <IUser>entity : <IBoard>entity;

    (DB[`fixStructure${nameEntity}`] as TypeFixStructure)(result);
    (DB[nameEntity] as Array<TypeEntities>) = [
      ...(DB[nameEntity] as Array<TypeEntities>).filter(
        (item: { id: string }) => item && item.id !== id,
      ),
    ];
  }

  return entity;
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
