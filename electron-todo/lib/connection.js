const mysql = require('mysql');

const database = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'todo'
});

database.connect();

module.exports = {
    db : database
}