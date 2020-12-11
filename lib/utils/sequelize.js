const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  "postgres://qfwfq:begaydocrime@localhost:5432/postgres",
  {
    host: "localhost",
    dialect: "postgres",
    port: process.env.PORT || 7890,
    pool: {
      max: 5,
      min: 0,
      idle: 10000,
    },
  }
);

module.exports = sequelize;
