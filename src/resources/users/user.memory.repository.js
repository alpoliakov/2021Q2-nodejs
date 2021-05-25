const DB = require('../../utils/memoryDB');
const { NOT_FOUND_ERROR } = require('../../errors/notFoundError');

const ENTITY_NAME = 'Users';

/** @module usersRepo */

/**
 * Getting an array of all users from DB
 * @returns {Array<User>} Array of user objects
 */
const getAll = async () => DB.getAllEntities(ENTITY_NAME);

/**
 * Getting a user by his id from DB
 * @param {string} id User id
 * @returns {User} User's object
 */
const get = async (id) => {
  const user = DB.getEntity(ENTITY_NAME, id);

  if (!user) {
    throw new NOT_FOUND_ERROR(`Couldn't find a user with id: ${id}`);
  }

  return user;
};

/**
 * Save user in DB
 * @param {Object} user Data for create user
 * @returns {User} Saved user's object
 */
const save = async (user) => DB.saveEntity(ENTITY_NAME, user);

/**
 * Update user's data in DB
 * @param {string} id User id
 * @param {Object} user Data for update user
 * @returns {User} Updated user's object
 */
const update = async (id, user) => {
  const entity = await DB.updateEntity(ENTITY_NAME, id, user);

  if (!entity) {
    throw new NOT_FOUND_ERROR(`Couldn't find a user with id: ${id}`);
  }

  return entity;
};

/**
 * Remove user's data from DB
 * @param {string} id User id
 * @returns void Return nothing if user deletion is successful
 */
const remove = async (id) => {
  if (!(await DB.removeEntity(ENTITY_NAME, id))) {
    throw new NOT_FOUND_ERROR(`Couldn't find a user with id: ${id}`);
  }
};

module.exports = { getAll, get, save, update, remove };
