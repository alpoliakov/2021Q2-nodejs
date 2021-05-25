const DB = require('../../utils/memoryDB');
const { NOT_FOUND_ERROR } = require('../../errors/notFoundError');

const ENTITY_NAME = 'Boards';

/** @module boardsRepo */

/**
 * Getting an array of all boards from DB
 * @returns {Array<Board>} Array of board objects
 */
const getAll = async () => DB.getAllEntities(ENTITY_NAME);

/**
 * Getting a board by his id from DB
 * @param {string} id Board id
 * @returns {Board} Board's object
 */
const get = async (id) => {
  const board = DB.getEntity(ENTITY_NAME, id);

  if (!board) {
    throw new NOT_FOUND_ERROR(`Couldn't find a board with id: ${id}`);
  }

  return board;
};

/**
 * Save item board in DB
 * @param {Object} board Data for create board
 * @returns {Board} Saved board's object
 */
const save = async (board) => DB.saveEntity(ENTITY_NAME, board);

/**
 * Update board's data in DB
 * @param {string} id Board id
 * @param {Object} board Data for update board
 * @returns {Board} Updated board's object
 */
const update = async (id, board) => {
  const updatedBoard = await DB.updateEntity(ENTITY_NAME, id, board);

  if (!updatedBoard) {
    throw new NOT_FOUND_ERROR(`Couldn't find a board with id: ${id}`);
  }

  return updatedBoard;
};

/**
 * Remove board item from DB
 * @param {string} id Board id
 * @returns void Return nothing if board deletion is successful
 */
const remove = async (id) => {
  if (!(await DB.removeEntity(ENTITY_NAME, id))) {
    throw new NOT_FOUND_ERROR(`Couldn't find a board with id: ${id}`);
  }
};

module.exports = { getAll, get, save, remove, update };
