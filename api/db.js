// "use strict";
// const mysql = require("mysql");

// const db = mysql.createConnection({
//   host: process.env.DB_HOST || "localhost",
//   user: process.env.DB_USER || "root",
//   password: process.env.DB_PASS || "",
//   database: process.env.DB_NAME || "nodejs_api",
// });

// module.exports = db;

"use strict";
const mysql = require("mysql");

var pool = mysql.createPool({
  host: "37.59.55.185",
  user: "NrFhfQnJEc",
  password: "MeYA0OwtS9",
  port: 3306,
  database: "NrFhfQnJEc",
});

pool.query("SELECT 1 + 1 AS solution", function (error, results, fields) {
  if (error) throw error;
  console.log("The solution is: ");
});
module.exports = pool;

// const db = mysql.createConnection({
//   host: "37.59.55.185",
//   user: "NrFhfQnJEc",
//   password: "MeYA0OwtS9",
//   port: 3306,
//   database: "NrFhfQnJEc",
// });

// module.exports = db;
