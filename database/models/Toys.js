const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../../lib/utils/sequelize");

module.exports = (sequelize) => {
  class Toys extends Sequelize.Model {}
  Toys.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      color: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "red",
        validate: {
          notEmpty: true,
          msg: "Please provide a value for field 'color'",
        },
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "truck",
        validate: {
          notEmpty: true,
          msg: "Please provide a value for field 'name'",
        },
      },
    },
    {
      sequelize,
      modelName: "toys",
    }
  );

  (async () => {
    await sequelize.sync({ force: true });

    try {
      const toy = await Toys.create({
        color: "red",
        name: "truck",
      });
      // eslint-disable-next-line no-console
      console.log(toy.toJSON());
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(`Error connecting to the database: ${error}`);
    }
  })();

  return Toys;
};
