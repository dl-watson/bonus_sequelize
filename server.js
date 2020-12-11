const app = require("./lib/app");
const sequelize = require("./database/utils/sequelize");

const PORT = process.env.PORT || 7890;

sequelize.sync().then(() => {
  app.listen(PORT, () => {
    // eslint-disable-next-line no-console
    console.log(`Started on ${PORT}`);
  });
});

// Tests the sequelize connection
sequelize
  .authenticate()
  .then((err) => {
    // eslint-disable-next-line no-console
    console.log("Connection has been established successfully.");
  })
  .catch((err) => {
    // eslint-disable-next-line no-console
    console.log("Unable to connect to the database:", err);
  });

process.on("exit", () => {
  // eslint-disable-next-line no-console
  console.log("Goodbye!");
  sequelize.end();
});
