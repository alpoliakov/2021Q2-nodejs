import { v4 as uuidv4 } from 'uuid';

import { IBoard, IColumn } from '../../ts/interfaces/app_interfaces';
import Column from '../columns/column.model';

class Board {
  id: string;

  title: string;

  columns: IColumn[];

  constructor({
    id = uuidv4(),
    title = 'Autotest board',
    columns = [Column.fromRequest({ id: uuidv4(), title: 'Backlog', order: 1 })],
  } = {}) {
    this.id = id;
    this.title = title;
    this.columns = columns;
  }

  static fromRequest(body: IBoard): IBoard {
    return new Board(body);
  }
}

export default Board;
