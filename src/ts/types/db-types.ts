import { IBoard, ITask, IUser } from '../interfaces/app_interfaces';

export type TypeEntities = IUser | IBoard | ITask;

export type TypeAllEntities = (data: string) => Array<TypeEntities>;

export type TypeGetOrRemoveEntity = (name: string, id: string) => Promise<TypeEntities | undefined>;

export type TypeUpdateEntity = (
  name: string,
  id: string,
  entity: TypeEntities,
) => Promise<TypeEntities | undefined>;

export enum TestEnum {
  FirstIndex,
}
