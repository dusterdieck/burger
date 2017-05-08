const mysql = require("mysql");

let pool = mysql.createPool({
  port: 3306,
  host: "192.168.1.235",
  user: "timothy",
  password: "g#Jye3@V7",
  database: "burgers_db"
});

// Export connection for our ORM to use.
module.exports = pool;