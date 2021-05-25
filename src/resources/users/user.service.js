const usersRepo = require('./user.memory.repository');
const User = require('./user.model');

/** @module usersService */

/**
 * Call the getAll method from the usersRepo module
 * @returns {Array<UserData>} Array of user objects
 */
const getAll = () => usersRepo.getAll();

/**
 * Call the get method from the usersRepo module
 * @param {String} id User id
 * @returns {UserData} User's object
 */
const get = (id) => usersRepo.get(id);

/**
 * Call the save method from the usersRepo module and create user instance
 * @param {UserData} user Data for create user
 * @returns {UserData} Saved user instance
 */
const save = (user) => usersRepo.save(User.fromRequest(user));

/**
 * Call the update method from the usersRepo module and update User instance
 * @param {String} id User id
 * @param {UserData} user Data for update user
 * @returns {UserData} Updated user instance
 */
const update = (id, user) => usersRepo.update(id, user);

/**
 * Call the remove method from the usersRepo module
 * @param {String} id User id
 * @returns void Return nothing if user deletion is successful
 */
const remove = (id) => usersRepo.remove(id);

module.exports = { getAll, get, save, remove, update };
