export interface IUser {
  id: string;
  name: string;
  login: string;
  password?: string;
}

export interface IColumn {
  id: string;
  title: string;
  order: number;
}

export interface IBoard {
  id: string;
  title: string;
  columns: IColumn[];
}

export interface ITask {
  id: string;
  title: string;
  order: number;
  description: string;
  userId: null | string;
  boardId: null | string;
  columnId: null | string;
}

export type TypeFixStructureUsers = (user: IUser) => void;

export type TypeFixStructureBoards = (board: IBoard) => void;

export type TypeFixStructureTasks = () => undefined;

export interface IDB {
  [key: string]:
    | Array<IUser>
    | Array<IBoard>
    | Array<ITask>
    | TypeFixStructureUsers
    | TypeFixStructureBoards
    | TypeFixStructureTasks
    | any;
  Users: IUser[];
  Boards: IBoard[];
  Tasks: ITask[];
  fixStructureUsers: TypeFixStructureUsers;
  fixStructureBoards: TypeFixStructureBoards;
  fixStructureTasks: TypeFixStructureTasks;
}
