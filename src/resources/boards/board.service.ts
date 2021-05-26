import { IBoard } from '../../ts/interfaces/app_interfaces';
import * as boardsRepo from './board.memory.repository';
import Board from './board.model';

const getAll = (): Promise<IBoard[]> => boardsRepo.getAll();

const get = (id: string): Promise<IBoard> => boardsRepo.get(id);

const save = (board: IBoard): Promise<IBoard> => boardsRepo.save(Board.fromRequest(board));

const update = (id: string, board: IBoard): Promise<IBoard> => boardsRepo.update(id, board);

const remove = (id: string): Promise<void> => boardsRepo.remove(id);

module.exports = { getAll, get, save, update, remove };
