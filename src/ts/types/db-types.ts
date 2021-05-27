import { IBoard, ITask, IUser } from '../interfaces/app_interfaces';

export type TypeEntities = IUser | IBoard | ITask;

export type TypeAllEntities = (data: string) => [];

export type TypeGetRemoveEntity = (name: string, id: string) => Promise<TypeEntities>;

export type TypeUpdateEntity = (
  name: string,
  id: string,
  entity: TypeEntities,
) => Promise<TypeEntities>;
