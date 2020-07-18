// Set up a MYSQL connection
// Set a variable that will serve for requiring the mysql npm package
var mysql = require("mysql");

// Typical set up to run a MYSQL connection from the npm's docs
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "",
    database: "burgers_db"
  });
  
  // Make connection.
  connection.connect(function(err) {
    if (err) {
      console.error("error connecting: " + err.stack);
      return;
    }
    console.log("connected as id " + connection.threadId);
  });
  
  // Export connection for our ORM to use.
  module.exports = connection;
  