const { v4: uuidv4 } = require('uuid');

/**
 * Class to create task object
 */
class Task {
  /**
   * @param {Object} params - Information about the task
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
   * @param {Object} body Params (id, title, order, description, userId, boardId, columnId) for create new Task instance
   * @returns {Task} return new Task's object
   */
  static fromRequest(body) {
    return new Task(body);
  }
}

module.exports = Task;
