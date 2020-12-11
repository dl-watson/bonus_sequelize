const app = require("./lib/app");
const sequelize = require("./database/utils/sequelize");

const PORT = process.env.PORT || 7890;

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

app.on("close", () => {
  console.log("Goodbye!");
  sequelize.close();
});
