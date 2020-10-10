var mysql = require("mysql");

// Set up our connection information

var connection;

if(process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: 'localhost' ,
        user: 'root',
        password: 'Bubbles92',
        database: 'burgers_db'
    });
};

// Export connection
connection.connect();
module.exports = connection;