const { v4: uuidv4 } = require('uuid');

/**
 * Class to create user object
 */
class User {
  /**
   * @param {Object} params - Information about the user
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
   * @param {{id: string, name: string, login: string, password: string}} user User's object
   * @returns {{id: string, name: string, login: string}} return destructuring the user object without password
   */
  static toResponse(user) {
    const { id, name, login } = user;
    return { id, name, login };
  }

  /**
   * @property {Function} fromRequest Create new User's instance
   * @param {Object} body Params (id, name, login, password) for create new User instance
   * @returns {User} return new User's object
   */
  static fromRequest(body) {
    return new User(body);
  }
}

module.exports = User;
