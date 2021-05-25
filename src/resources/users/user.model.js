const { v4: uuidv4 } = require('uuid');

/**
 * User's data structure.
 * @typedef {Object} UserData
 * @property {String} id - User's id
 * @property {String} name - User's name
 * @property {String} login - User's login
 * @property {String} password - User's password
 */

/**
 * Destructuring the user object.
 * @typedef {Object} DestructuringUserData
 * @property {String} id - User's id
 * @property {String} name - User's name
 * @property {String} login - User's login
 */

/**
 * Class to create user object
 */
class User {
  /**
   * @param {UserData} params - Information about the user
   */
  constructor({
    id = uuidv4(),
    name = 'USER',
    login = 'user',
    password = 'P@55w0rd',
  } = {}) {
    /**
     * @property {string} id User id
     */
    this.id = id;
    /**
     * @property {string} name User name
     */
    this.name = name;
    /**
     * @property {string} password User password
     */
    this.login = login;
    /**
     * @property {string} login User login
     */
    this.password = password;
  }

  /**
   * @property {Function} toResponse Destructuring the user object
   * @param {UserData} user User's object
   * @returns {DestructuringUserData} return destructuring the user object without password
   */
  static toResponse(user) {
    const { id, name, login } = user;
    return { id, name, login };
  }

  /**
   * @property {Function} fromRequest Create new User's instance
   * @param {UserData} body Params (id, name, login, password) for create new User instance
   * @returns {User} return new User's object
   */
  static fromRequest(body) {
    return new User(body);
  }
}

module.exports = User;
