const { v4: uuidv4 } = require('uuid');
const Column = require('../columns/column.model');

/**
 * Board's data structure.
 * @typedef {Object} BoardData
 * @property {String} id - Board's id
 * @property {String} title - Board's title
 * @property {Column[]} columns - Board's columns
 */

/**
 * Class to create board object
 */
class Board {
  /**
   * @param {BoardData} params - Information about the board
   */
  constructor({
    id = uuidv4(),
    title = 'Autotest board',
    columns = [
      Column.fromRequest({ id: uuidv4(), title: 'Backlog', order: 1 }),
    ],
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
     * @property {Array<Column>} columns Array column objects
     */
    this.columns = columns;
  }

  /**
   * @property {Function} fromRequest Create new Board's instance
   * @param {BoardData} body Params (id, title, columns) for create new Board instance
   * @returns {Board} return new Board's object
   */
  static fromRequest(body) {
    return new Board(body);
  }
}

module.exports = Board;
