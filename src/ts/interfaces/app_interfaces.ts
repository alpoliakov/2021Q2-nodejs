export interface IUser {
  id: string;
  name: string;
  login: string;
  password?: string;
}

export interface IBase {
  id: string;
  title: string;
}

export interface IColumn extends IBase {
  order: number;
}

export interface IBoard extends IBase {
  columns: IColumn[];
}

export interface ITask extends IColumn {
  description: string;
  userId: null | string;
  boardId: null | string;
  columnId: null | string;
}

export type TypeFixStructure = (data: { id: string }) => void;

export type TypeFixStructureTasks = () => undefined;

export type TypeMethods = TypeFixStructure | TypeFixStructureTasks;

export type TypeValueDB = IUser[] | IBoard[] | ITask[] | TypeFixStructure | TypeFixStructureTasks;

export interface IDB {
  [key: string]: TypeValueDB;
  Users: Array<IUser>;
  Boards: Array<IBoard>;
  Tasks: Array<ITask>;
  fixStructureUsers: TypeFixStructure;
  fixStructureBoards: TypeFixStructure;
  fixStructureTasks: TypeFixStructureTasks;
}
