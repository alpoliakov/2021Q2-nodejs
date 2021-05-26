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

export interface IDB {
  [key: string]: Array<IUser> | Array<IBoard> | Array<ITask> | any;
  Users: IUser[];
  Boards: IBoard[];
  Tasks: ITask[];
  fixStructureUsers: (user: IUser) => void;
  fixStructureBoards: (board: IBoard) => void;
  fixStructureTasks: () => void;
}
