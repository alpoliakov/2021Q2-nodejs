const tasksRepo = require('./task.memory.repository');
const Task = require('./task.model');

/** @module tasksService */

/**
 * Call the getAll method from the tasksRepo module
 * @param {String} boardId Board id
 * @returns {Array<Task>} Array of tasks objects
 */
const getAll = (boardId) => tasksRepo.getAll(boardId);

/**
 * Call the get method from the tasksRepo module
 * @param {String} boardId Board id
 * @param {String} id Task id
 * @returns {Task} Task's object
 */
const get = (boardId, id) => tasksRepo.get(boardId, id);

/**
 * Call the save method from the tasksRepo module and create task instance
 * @param {Object} task Data for create task
 * @returns {Task} Saved task's object
 */
const save = (task) => tasksRepo.save(Task.fromRequest(task));

/**
 * Call the update method from the tasksRepo module and update task instance
 * @param {Object} task Data for update task
 * @returns {Task} Updated task's object
 */
const update = (task) => tasksRepo.update(task);

/**
 * Call the remove method from the tasksRepo module and remove task instance
 * @param {String} boardId Board id
 * @param {String} id Task id
 * @returns void Return nothing if task deletion is successful
 */
const remove = (boardId, id) => tasksRepo.remove(boardId, id);

module.exports = { getAll, save, get, remove, update };
