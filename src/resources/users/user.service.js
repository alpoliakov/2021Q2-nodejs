const usersRepo = require('./user.memory.repository');
const User = require('./user.model');

const getAll = () => usersRepo.getAll();

const save = (user) => usersRepo.save(new User(user));

module.exports = { getAll, save };
