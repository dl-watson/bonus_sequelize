const { Sequelize } = require("sequelize/types");
const sequelize = require("../utils/sequelize");

module.exports = (sequelize) => {
  class Toys extends Sequelize.Model {}
  Toys.init(
    {
      name: Sequelize.STRING,
      color: Sequelize.STRING,
    },
    { sequelize }
  );

  async () => {
    // Calling sync issues a CREATE TABLE IF NOT EXISTS statement, which will sync all models and create tables taht do not exist in the database
    // Using the force parameter lets you control the database synchronization (like refreshing your database tables each time you start your app)
    await sequelize.sync({ force: true });
    try {
      // Toys.create() builds a new model isntance, which represents a database row and automatically stores the instance's data
      // It returns a Promise object, which resolves or rejects based on the successful or failed interaction with your database
      const toys = await Toys.create({
        name: "truck",
        color: "red",
      });
      console.log(toys.toJSON());
    } catch (err) {
      console.log(`Error connecting to the database: ${err}`);
    }
  };
  return Toys;
};

//   // INSERT

//   // FIND

//   // FIND BY ID

//   // UPDATE

//   // DELETE
// };
