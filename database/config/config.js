require("dotenv").config();

module.exports = {
  toys: {
    url: process.env.DATABASE_URL,
    dialect: "postgres",
    dialectOptions: {
      ssl: true,
    },
    port: process.env.PORT || 7890,
  },
};
