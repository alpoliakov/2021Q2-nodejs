const usersRepo = require('./user.memory.repository');
const User = require('./user.model');

/** @module userService */

/**
 * Call the getAll method from the userRepo module
 * @returns {Array<User>} Array of user objects
 */
const getAll = () => usersRepo.getAll();

/**
 * Call the get method from the userRepo module
 * @param {String} id User id
 * @returns {User} User object
 */
const get = (id) => usersRepo.get(id);

/**
 * Call the save method from the userRepo module and create User instance
 * @param {Object} user User data
 * @returns {User} Saved User instance
 */
const save = (user) => usersRepo.save(User.fromRequest(user));

/**
 * Call the remove method from the userRepo module
 * @param {String} id User id
 * @returns void Return nothing if user deletion is successful
 */
const remove = (id) => usersRepo.remove(id);

/**
 * Call the update method from the userRepo module and update User instance
 * @param {String} id User id
 * @param {Object} user User data
 * @returns {User} Updated User instance
 */
const update = (id, user) => usersRepo.update(id, user);

module.exports = { getAll, get, save, remove, update };
