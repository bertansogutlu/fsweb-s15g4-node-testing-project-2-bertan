// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */

const shareConfig = {

  client: 'sqlite3',

  migrations: {
    directory: "./data/migrations"
  },
  seeds: {
    directory: "./data/seeds"
  },
  useNullAsDefault: true,
  pool: {
    afterCreate: (conn,done)=>{
      conn.run("PRAGMA foreign_keys = ON",done)
    }
  }
}

module.exports = {

  development: {
    ...shareConfig,
    connection: {
      filename: './todo-app.sqlite3'
    },
  },
  testing: {
    ...shareConfig,
    connection: {
      filename: './todo-app-testing.sqlite3'
    },
  }

};
