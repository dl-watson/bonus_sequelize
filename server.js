const app = require("./lib/app");
const sequelize = require("./database/utils/sequelize");

const PORT = process.env.PORT || 5432;

sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Started on ${PORT}`);
  });
});

sequelize
  .authenticate()
  .then((err) => {
    console.log("Connection has been established successfully.");
  })
  .catch((err) => {
    console.log("Unable to connect to the database:", err);
  });

process.on("exit", () => {
  console.log("Goodbye!");
  sequelize.close();
});
