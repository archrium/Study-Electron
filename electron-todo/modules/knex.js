const knex = require('knex')({
    client: 'sqlite3',
    connection: {
      filename: './database/todo.sqlite',
    },
    "useNullAsDefault": true
  });


module.exports = {
    knex : knex
};

