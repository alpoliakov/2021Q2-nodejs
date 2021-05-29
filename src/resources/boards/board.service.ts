import { IBoard } from '../../ts/interfaces/app_interfaces';
import { IFindAll, IFindOneOrRemove, ISave, IUpdate } from '../../ts/interfaces/layout_interfaces';
import * as boardsRepo from './board.memory.repository';
import Board from './board.model';

const getAll: IFindAll<IBoard> = () => boardsRepo.getAll();

const get: IFindOneOrRemove<string, IBoard> = (id) => boardsRepo.get(id);

const save: ISave<IBoard> = (board) => boardsRepo.save(Board.fromRequest(board));

const update: IUpdate<string, IBoard> = (id, board) => boardsRepo.update(id, board);

const remove: IFindOneOrRemove<string, void> = (id) => boardsRepo.remove(id);

module.exports = { getAll, get, save, update, remove };
