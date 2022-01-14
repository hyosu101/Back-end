"use strict";

var mysql = require('mysql');

var db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PSWORD,
    database: process.env.DB_DATABASE
});

db.connect();

module.exports = db;