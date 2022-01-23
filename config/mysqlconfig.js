const mySqlConfig = {
  HOST: "localhost",
  USER: "root",
  PASSWORD: "123456",
  DB: "employees",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
module.exports = mySqlConfig;
