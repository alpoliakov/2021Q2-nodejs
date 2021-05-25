const DB = require('../../utils/memoryDB');

const ENTITY_NAME = 'Tasks';
const { NOT_FOUND_ERROR } = require('../../errors/notFoundError');

/** @module tasksRepo */

/**
 * Getting an array of all tasks on the board from DB
 * @param {String} boardId Board id
 * @returns {Array<Task>} Array of tasks objects
 */
const getAll = async (boardId) =>
  DB.getAllEntities(ENTITY_NAME).filter((task) => task.boardId === boardId);

/**
 * Getting a task by his id and board id from DB
 * @param {string} boardId Board id
 * @param {string} id Task id
 * @returns {Task} Task's object
 */
const get = async (boardId, id) => {
  const task = await DB.getEntity(ENTITY_NAME, id);

  if (!task || task.boardId !== boardId) {
    throw new NOT_FOUND_ERROR(
      `Couldn't find a task with id: ${id} and boardId: ${boardId}`
    );
  }

  return task;
};

/**
 * Save task in DB
 * @param {Object} task Data for create task
 * @returns {Task} Saved task's object
 */
const save = async (task) => DB.saveEntity(ENTITY_NAME, task);

/**
 * Update task's data in DB
 * @param {Object} task Data for update task
 * @returns {Task} Updated task's object
 */
const update = async (task) => {
  const updatedTask = await DB.updateEntity(ENTITY_NAME, task.id, task);

  if (!updatedTask) {
    throw new NOT_FOUND_ERROR(
      `Couldn't find a task with id: ${task.id} and boardId: ${task.boardId}`
    );
  }

  return updatedTask;
};

/**
 * Remove tasks's data from DB
 * @param {string} boardId Board id
 * @param {string} id Task id
 * @returns void Return nothing if task deletion is successful
 */
const remove = async (boardId, id) => {
  if (!(await DB.removeEntity(ENTITY_NAME, id))) {
    throw new NOT_FOUND_ERROR(
      `Couldn't find a task with id: ${id} and boardId: ${boardId}`
    );
  }
};

module.exports = { getAll, save, get, remove, update };
