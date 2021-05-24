const { v4: uuidv4 } = require('uuid');

/**
 * Class to create board object
 */
class Board {
  /**
   * @param {Object} params - Information about the board
   */
  constructor({
    id = uuidv4(),
    title = 'Autotest board',
    columns = [{ title: 'Backlog', order: 1 }],
  } = {}) {
    /**
     * @property {string} id Board id
     */
    this.id = id;
    /**
     * @property {string} title Board title
     */
    this.title = title;
    /**
     * @property {Array<Object>} columns Array column objects
     */
    this.columns = columns;
  }

  /**
   * @property {Function} fromRequest Create new Board's instance
   * @param {Object} body Params (id, title, columns) for create new Board instance
   * @returns {Board} return new Board's object
   */
  static fromRequest(body) {
    return new Board(body);
  }
}

module.exports = Board;
