const tasksRepo = require('./task.memory.repository');
const Task = require('./task.model');

const getAll = (boardId) => tasksRepo.getAll(boardId);
const save = (task) => tasksRepo.save(Task.fromRequest(task));
const get = (boardId, id) => tasksRepo.get(boardId, id);
const remove = (boardId, id) => tasksRepo.remove(boardId, id);
const update = (task) => tasksRepo.update(Task.fromRequest(task));

module.exports = { getAll, save, get, remove, update };
