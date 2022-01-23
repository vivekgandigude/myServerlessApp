const mySqlConfig = require("../config/mysqlconfig");
const mysql2 = require("mysql2");

const mySqlcon = mysql2.createConnection({
  host: mySqlConfig.host,
  user: mySqlConfig.USER,
  password: mySqlConfig.PASSWORD,
  database: mySqlConfig.DB,
});

module.exports = mySqlcon;
