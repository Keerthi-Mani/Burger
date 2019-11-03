// Set up MySQL connection.

//code borrowed from week 14 activity 18 catsapp
var mysql = require("mysql");

var connection;

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {

  connection = mysql.createConnection({
    port: 3306,
    host: "edo4plet5mhv93s3.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    user: "v0jz75xm0u39e7yv",
    password: "mrzqr6gjwf306e0i",
    database: "uol6taz3y0irsiig"
  });

}

// Make connection.
connection.connect(function (err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;