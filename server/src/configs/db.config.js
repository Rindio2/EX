const mysql= require("mysql2");

const pool = mysql.createPool({
    database: "databasebook",
    host: "localhost",
    password: "",
    port: "3306",
    user:"root"
})

const database= pool.promise();
module.exports=database;

// DB_HOST="localhost",
// DB_USER="root",
// DB_PASSWORD="",
// DB_NAME="databasebook",
// DB_PORT="3306",

// PORT= "8080";

// const pool = mysql.createPool({
//     database: process.env.DB_NAME,
//     host:process.env.DB_HOST,
//     password: process.env.DB_PASSWORD,
//     port: process.env.DB_PORT,
//     user:process.env.DB_USER,
// })