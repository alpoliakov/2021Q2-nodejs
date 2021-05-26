import User from './user.model';

const usersRepo = require('./user.memory.repository');

const getAll = () => usersRepo.getAll();

const get = (id: string) => usersRepo.get(id);

const save = (user: User) => usersRepo.save(User.fromRequest(user));

const update = (id: string, user: User) => usersRepo.update(id, user);

const remove = (id: string) => usersRepo.remove(id);

export { get, getAll, remove, save, update };
