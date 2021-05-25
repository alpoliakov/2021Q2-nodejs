const { v4: uuidv4 } = require('uuid');

/**
 * Class to create column objects
 */
class Column {
  /**
   * @param {Object} params - Information about the column
   */
  constructor({ id = uuidv4(), title = 'Test column', order = 1 } = {}) {
    this.id = id;
    this.title = title;
    this.order = order;
  }

  static fromRequest(body) {
    return new Column(body);
  }
}

module.exports = Column;
