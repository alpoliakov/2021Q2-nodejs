const DB = require('../../utils/memoryDB');

const ENTITY_NAME = 'Users';

const getAll = async () => DB.getAllEntities(ENTITY_NAME);

const save = async (user) => DB.saveEntity(ENTITY_NAME, user);

module.exports = { getAll, save };
