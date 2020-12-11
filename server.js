const app = require("./lib/app");
// const pool = require('./lib/utils/pool');
const sequelize = require("./lib/utils/sequelize");

const PORT = process.env.PORT || 7890;

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Started on ${PORT}`);
});

// return models.sequelize.sync().then((result) => {
//   app.listen(PORT, () => {
//     // eslint-disable-next-line no-console
//     console.log(`Started on ${PORT}`);
//   });
// });

// Tests the sequelize connection
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
  sequelize.end();
});
