const { Toy } = require("../models/Toys");

const createToy = async (req, res) => {
  try {
    const toy = await Toy.create(req.body);
    return res.status(201).json({
      toy,
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
module.exports = {
  createToy,
};
