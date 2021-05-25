const { v4: uuidv4 } = require('uuid');

/**
 * Data for create instance of Column class.
 * @typedef {Object} ColumnData
 * @property {String} id - Column's id
 * @property {String} title - Column's title
 * @property {Number} order - Column's order
 */

/**
 * Class to create column objects
 */
class Column {
  /**
   * @param {ColumnData} params - Information about the column
   */
  constructor({ id = uuidv4(), title = 'Test column', order = 1 } = {}) {
    /**
     * @property {string} id Column id
     */
    this.id = id;
    /**
     * @property {string} title Column title
     */
    this.title = title;
    /**
     * @property {number} order Column order
     */
    this.order = order;
  }

  /**
   * @property {Function} fromRequest Create new Column's instance
   * @param {ColumnData} body Params (id, title, order) for create new Column instance
   * @returns {Column} return new Column's object
   */
  static fromRequest(body) {
    return new Column(body);
  }
}

module.exports = Column;
