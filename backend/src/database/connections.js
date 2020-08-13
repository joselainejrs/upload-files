const knex = require('knex');
const configuration = require('../../knexfile');

const connetions = knex(configuration.development);

module.exports = connetions;