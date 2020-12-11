const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../../lib/utils/sequelize");

module.exports = (sequelize) => {
  class Toys extends Sequelize.Model {}
  Toys.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      color: {
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      modelName: "Toys",
    }
  );

  (async () => {
    await sequelize.sync({ force: true });

    try {
      const toy = await Toys.create({
        color: "red",
        name: "truck",
      });
      console.log(toy.toJSON());
    } catch (error) {
      console.error("Error connecting to the database: ", error);
    }
  })();

  console.log(Toys === sequelize.models.Toys); // true

  return Toys;
};
