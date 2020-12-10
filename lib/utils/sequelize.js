const { Sequelize } = require("sequelize");

const DATABASE_URL = process.env.DATABASE_URL;
const PORT = process.env.PORT || 7890;

const sequelize = new Sequelize(DATABASE_URL, {
  host: "localhost",
  dialect: "postgres",
  port: PORT,
  pool: {
    max: 5,
    min: 0,
    idle: 10000,
  },
});

// Establishes a connection using a connection uri
// const sequelize = new Sequelize(process.env.DATABASE_URL);

module.exports = sequelize;
