// import { ITask } from '../interfaces/app_interfaces';
import { TypeEntities } from './db-types';

export type TypeUserOrBoardFunc = (
  id?: string,
  data?: TypeEntities,
) => Promise<Array<TypeEntities> | TypeEntities | void>;
