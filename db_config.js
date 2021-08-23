const mysql = require('mysql');
require('dotenv').config();

const db = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.DATABASE_USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    multipleStatements: true,
});

db.connect((e) => {
    if (e) throw e;
    console.log("mysql connected");
});

module.exports = db;