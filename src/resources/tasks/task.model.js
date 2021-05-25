const { v4: uuidv4 } = require('uuid');

/**
 * Data for create instance of Task class.
 * @typedef {Object} TaskData
 * @property {String} id - Task's id
 * @property {String} title - Task's title
 * @property {Number} order - Task's order
 * @property {String} description - Task's description
 * @property {String|null} userId - User's id
 * @property {String|null} boardId - Board's id
 * @property {String|null} columnId - Column's id
 */

/**
 * Class to create task object
 */
class Task {
  /**
   * @param {TaskData} params - Information about the task
   */
  constructor({
    id = uuidv4(),
    title = 'Task',
    order = 0,
    description = 'task description',
    userId = null,
    boardId = null,
    columnId = null,
  } = {}) {
    /**
     * @property {string} id Task id
     */
    this.id = id;
    /**
     * @property {string} title Task title
     */
    this.title = title;
    /**
     * @property {number} order Task order
     */
    this.order = order;
    /**
     * @property {string} description Task description
     */
    this.description = description;
    /**
     * @property {string|null} userId User id for task
     */
    this.userId = userId;
    /**
     * @property {string|null} boardId Board id for task
     */
    this.boardId = boardId;
    /**
     * @property {string|null} columnId Column id for task
     */
    this.columnId = columnId;
  }

  /**
   * @property {Function} fromRequest Create new Task's instance
   * @param {TaskData} body Params (id, title, order, description, userId, boardId, columnId) for create new Task instance
   * @returns {Task} return new Task's object
   */
  static fromRequest(body) {
    return new Task(body);
  }
}

module.exports = Task;
