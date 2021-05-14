const tasksRepo = require('./task.memory.repository');
const Task = require('./task.model');

const getAll = (boardId) => tasksRepo.getAll(boardId);
const save = (task) => tasksRepo.save(Task.fromRequest(task));
const get = (boardId, id) => tasksRepo.get(boardId, id);
const update = (task) => tasksRepo.update(task);
const remove = (boardId, id) => tasksRepo.remove(boardId, id);

module.exports = { getAll, save, get, remove, update };
