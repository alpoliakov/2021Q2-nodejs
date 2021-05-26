import { v4 as uuidv4 } from 'uuid';

import { IColumn } from '../../ts/interfaces/app_interfaces';

class Column implements IColumn {
  id: string;

  title: string;

  order: number;

  constructor({ id = uuidv4(), title = 'Test column', order = 1 } = {}) {
    this.id = id;
    this.title = title;
    this.order = order;
  }

  static fromRequest(body: IColumn): IColumn {
    return new Column(body);
  }
}

export default Column;
