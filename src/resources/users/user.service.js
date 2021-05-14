const usersRepo = require('./user.memory.repository');
const User = require('./user.model');

const getAll = () => usersRepo.getAll();

const get = (id) => usersRepo.get(id);

const save = (user) => usersRepo.save(User.fromRequest(user));

const remove = (id) => usersRepo.remove(id);

const update = (id, user) => usersRepo.update(id, user);

module.exports = { getAll, get, save, remove, update };
