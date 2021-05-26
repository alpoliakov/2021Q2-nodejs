import { IBoard, IUser } from '../interfaces/app_interfaces';

export type TypeFixStructureUsers = (user: IUser) => void;

export type TypeFixStructureBoards = (board: IBoard) => void;

export type TypeFixStructureTasks = () => undefined;
