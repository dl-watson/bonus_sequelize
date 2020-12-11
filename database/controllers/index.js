const { Toys } = require("../models/Toys");
// const db = require("../models/index");
// const { Sequelize } = require("sequelize");

// Creates a toy
const createToy = async (req, res) => {
  try {
    const toy = await Toys.create(
      {
        color: req.body.color,
        name: req.body.name,
      },
      { transaction: t }
    );
    console.log(toy.toJSON());

    res.send(toy);
  } catch (err) {
    console.log(`Error: ${err}`);
  }
};

console.log(
  createToy({
    name: "blue",
    color: "sailboat",
  })
);

module.exports = {
  createToy,
};
