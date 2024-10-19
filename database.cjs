mysql = require('mysql');

function dbconnect(){

    //make a db connection string
    const connection = mysql.createConnection({

        host: process.env.DB_SERVER,
        user: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DATABASE
    });
    
    connection.connect();
    return connection;

}

exports.db = dbconnect;