const mysql = require("mysql");

let pool = mysql.createPool({
  port: 3306,
  host: "localhost",
  user: "root",
  password: "",
  database: "burgers_db"
});

// Export connection for our ORM to use.
module.exports = pool;