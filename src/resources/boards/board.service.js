const boardsRepo = require('./board.memory.repository');
const Board = require('./board.model');

/** @module boardsService */

/**
 * Call the getAll method from the boardsRepo module
 * @returns {Array<Board>} Array of board objects
 */
const getAll = () => boardsRepo.getAll();

/**
 * Call the get method from the boardsRepo module
 * @param {String} id Board id
 * @returns {Board} Board object
 */
const get = (id) => boardsRepo.get(id);

/**
 * Call the save method from the boardsRepo module and create board instance
 * @param {Object} board Board data
 * @returns {Board} Saved board instance
 */
const save = (board) => boardsRepo.save(Board.fromRequest(board));

/**
 * Call the update method from the boardsRepo module and update board instance
 * @param {String} id Board id
 * @param {Object} board Board data
 * @returns {Board} Updated board instance
 */
const update = (id, board) => boardsRepo.update(id, board);

/**
 * Call the remove method from the boardsRepo module and remove board instance
 * @param {String} id Board id
 * @returns void Return nothing if board deletion is successful
 */
const remove = (id) => boardsRepo.remove(id);

module.exports = { getAll, get, save, update, remove };
