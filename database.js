// Run in terminal:
//      mongod                  --> to start MongoDB and listen for connections
//      mongo < database.js     --> to start MongoDB and listen for connections
//      mongo                   --> to open mongo and manipulate the database

// use pluginStore
// db.dropDatabase()

use pluginstore

db.createCollection("user")
db.createCollection("plugin")

db.user.createIndex({
    username: 1
}, {
    unique: true
})