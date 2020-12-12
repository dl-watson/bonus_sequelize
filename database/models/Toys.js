"use strict";
const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../utils/sequelize");

class Toys extends Sequelize.Model {}
Toys.init(
  {
    color: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "red",
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "truck",
    },
  },
  {
    sequelize,
    modelName: "toys",
  }
);

module.exports = { Toys };
