// const { Toys } = require("../models/Toys");

// // Creates a toy
// const createToy = (req, res) => {
//   // console.log(Toys === sequelize.models.Toys); // returns true
//   return Toys.create({
//     color: req.body.color,
//     name: req.body.name,
//   })
//     .then((toy) => res.status(201).send(toy))
//     .catch((err) => console.log(err));
// };

// console.log(
//   createToy({
//     name: "blue",
//     color: "sailboat",
//   })
// );

// module.exports = {
//   createToy,
// };
