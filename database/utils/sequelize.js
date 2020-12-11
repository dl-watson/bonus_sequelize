const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  `postgres://${process.env.USERNAME}:${process.env.PASSWORD}@127.0.0.1:5432/postgres`
  // {
  //   host: "127.0.0.1",
  //   dialect: "postgres",
  //   port: process.env.PORT || 5432,
  //   pool: {
  //     max: 5,
  //     min: 0,
  //     idle: 10000,
  //   },
  // }
);

module.exports = sequelize;
