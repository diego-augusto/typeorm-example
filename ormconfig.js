const path = require('path')

module.exports = [
    {    
        "name" : "development",
        "type": "postgres",
        "host": "localhost",
        "port": 5432,
        "username": "postgres",
        "password": "example",
        "database": "oneplace",
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
        "entitiesDir": "src/entity",
        "migrationsDir": "src/migration",
        "subscribersDir": "src/subscriber"
        },
        "migrationsTableName": "migration"
    },
    {
        "name" : "test",
        "type": "sqlite",
        "database": ":memory:",
        "synchronize": true,
        "logging": false,
        "entities": [
            path.resolve(__dirname, "src/entities/*.ts")
        ],
        "migrations": [
            path.resolve(__dirname, "src/migrations/*.ts")
        ],
        "subscribers": [
            path.resolve(__dirname, "src/subscriber/*.ts")
        ],
        "cli": {
            "entitiesDir": "src/entities",
            "migrationsDir": "src/migration",
            "subscribersDir": "src/subscriber"
        }
    }
 ]