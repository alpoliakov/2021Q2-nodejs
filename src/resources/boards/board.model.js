const { v4: uuidv4 } = require('uuid');

class Board {
  constructor({
    id = uuidv4(),
    title = 'Autotest board',
    columns = [{ title: 'Backlog', order: 1 }],
  } = {}) {
    this.id = id;
    this.title = title;
    this.columns = columns;
  }

  static fromRequest(body) {
    return new Board(body);
  }
}

module.exports = Board;
