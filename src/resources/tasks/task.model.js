const { v4: uuidv4 } = require('uuid');

/**
 * Task's data structure.
 * @typedef {Object} TaskData
 * @property {string} id - Task's id
 * @property {string} title - Task's title
 * @property {number} order - Task's order
 * @property {string} description - Task's description
 * @property {?string} userId - User's id
 * @property {?string} boardId - Board's id
 * @property {?string} columnId - Column's id
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
     * @property {?string} userId User id for task
     */
    this.userId = userId;
    /**
     * @property {?string} boardId Board id for task
     */
    this.boardId = boardId;
    /**
     * @property {?string} columnId Column id for task
     */
    this.columnId = columnId;
  }

  /**
   * @property {Function} fromRequest Create new Task's instance
   * @param {TaskData} body Params (id, title, order, description, userId, boardId, columnId) for create new Task instance
   * @returns {TaskData} return new Task's object
   */
  static fromRequest(body) {
    return new Task(body);
  }
}

module.exports = Task;
