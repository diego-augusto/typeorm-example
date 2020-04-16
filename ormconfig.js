const path = require('path')

module.exports = {
    "type": "sqlite",
    "database": "database.sqlite",
    "synchronize": true,
    "logging": false,
    "entities": [
        path.resolve(__dirname, "dest/entity/*.js")
    ],
    "migrations": [
        path.resolve(__dirname, "dest/migration/*.js")
    ],
    "subscribers": [
        path.resolve(__dirname, "dest/subscriber/*.js")
    ],
    "cli": {
       "entitiesDir": path.resolve(__dirname, "dest/entity"),
       "migrationsDir": path.resolve(__dirname, "dest/migration"),
       "subscribersDir": path.resolve(__dirname, "dest/subscriber")
    }
 }