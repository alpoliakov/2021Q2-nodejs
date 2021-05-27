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

export type TypeFixStructureUsers = (user: IUser) => void;

export type TypeFixStructureBoards = (board: IBoard) => void;

export type TypeFixStructureTasks = () => undefined;

export type TypeValueDB =
  | Array<IUser>
  | Array<IBoard>
  | Array<ITask>
  | TypeFixStructureUsers
  | TypeFixStructureBoards
  | TypeFixStructureTasks
  | any;

export interface IDB {
  [key: string]: TypeValueDB;
  Users: Array<IUser>;
  Boards: Array<IBoard>;
  Tasks: Array<ITask>;
  fixStructureUsers: TypeFixStructureUsers;
  fixStructureBoards: TypeFixStructureBoards;
  fixStructureTasks: TypeFixStructureTasks;
}
