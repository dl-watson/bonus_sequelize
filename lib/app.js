const express = require("express");
const app = express();

app.use(express.json());

const { Toys } = require("../database/models/Toys");

app.get("/", (req, res, next) => {
  res.send("test route");
});

app.post("/api/v1/toys", (req, res) => {
  return Toys.create({
    color: req.body.color,
    name: req.body.name,
  })
    .then((toy) => res.status(201).send(toy))
    .catch((err) => console.log(err));
});

app.get("/api/v1/toys", (req, res, next) => {
  return Toys.findAll()
    .then((toy) => res.send(toy))
    .catch(next);
});

app.get("/api/v1/toys/:id", (req, res, next) => {
  return Toys.findByPk(req.params.id)
    .then((toy) => res.send(toy))
    .catch(next);
});

app.put("/api/v1/toys/:id", (req, res, next) => {
  return Toys.update(
    {
      color: req.body.color,
      name: req.body.name,
    },
    { where: { id: req.params.id } }
  )
    .then((toy) => res.send(toy))
    .catch(next);
});

app.delete("/api/v1/toys/:id", (req, res, next) => {
  return Toys.destroy({
    where: { id: req.params.id },
    truncate: false,
  })
    .then((num) => {
      if (num === 1) res.send({ message: "toy deleted successfully" });
      else res.send({ message: `cannot delete toy with id: ${req.params.id}` });
    })
    .catch(next);
});

module.exports = app;
