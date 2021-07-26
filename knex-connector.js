const knex = require('knex')

// knex connector
const connectedKnex = knex({
    client: "sqlite3",
    connection: {
        filename: "hw5.db"
    }
})

module.exports = connectedKnex;

