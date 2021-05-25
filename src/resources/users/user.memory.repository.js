const DB = require('../../utils/memoryDB');
const { NOT_FOUND_ERROR } = require('../../errors/notFoundError');

const ENTITY_NAME = 'Users';

/** @module usersRepo */

/**
 * Getting an array of all users from DB
 * @returns {Array<UserData>} Array of user objects
 */
const getAll = async () => {
  const users = await DB.getAllEntities(ENTITY_NAME);
  return users;
};

/**
 * Getting a user by his id from DB
 * @param {string} id User id
 * @returns {UserData} User's object
 */
const get = async (id) => {
  const user = await DB.getEntity(ENTITY_NAME, id);

  if (!user) {
    throw new NOT_FOUND_ERROR(`Couldn't find a user with id: ${id}`);
  }

  return user;
};

/**
 * Save user in DB
 * @param {UserData} user Data for create user
 * @returns {UserData} Saved user's object
 */
const save = async (user) => {
  const newUser = await DB.saveEntity(ENTITY_NAME, user);
  return newUser;
};

/**
 * Update user's data in DB
 * @param {string} id User id
 * @param {UserData} user Data for update user
 * @returns {UserData} Updated user's object
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
