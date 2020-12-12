const request = require("supertest");
const app = require("../lib/app");
const sequelize = require("../database/utils/sequelize");
const { Toys } = require("../database/models/Toys");

describe("bonus_sequelize routes", () => {
  beforeEach(() => {
    return sequelize.sync({ force: true });
  });

  it("posts a new toy", async () => {
    await Toys.create({
      color: "blue",
      name: "sailboat",
    });

    const res = await request(app).get("/api/v1/toys");

    expect(res.body).toEqual(
      expect.arrayContaining([
        {
          color: "blue",
          createdAt: expect.anything(),
          id: 1,
          name: "sailboat",
          updatedAt: expect.anything(),
        },
      ])
    );
  });

  it("gets all toys", async () => {
    await Promise.all(
      [
        {
          color: "red",
          name: "truck",
        },
        {
          color: "yellow",
          name: "ducky",
        },
        {
          color: "green",
          name: "block",
        },
      ].map((toy) => Toys.create(toy))
    );
    const res = await request(app).get("/api/v1/toys");

    expect(res.body).toEqual(
      expect.arrayContaining([
        {
          color: "red",
          createdAt: expect.anything(),
          id: 1,
          name: "truck",
          updatedAt: expect.anything(),
        },
        {
          color: "yellow",
          createdAt: expect.anything(),
          id: 2,
          name: "ducky",
          updatedAt: expect.anything(),
        },
        {
          color: "green",
          createdAt: expect.anything(),
          id: 3,
          name: "block",
          updatedAt: expect.anything(),
        },
      ])
    );
  });

  it("gets a toy by id", async () => {
    const newToy = await Toys.create({
      color: "red",
      name: "truck",
    });

    const toy = await Toys.findByPk(newToy.id);

    const res = await request(app).get(`/api/v1/toys/${toy.id}`);

    expect(res.body).toEqual(
      expect.objectContaining({
        color: "red",
        createdAt: expect.anything(),
        id: 1,
        name: "truck",
        updatedAt: expect.anything(),
      })
    );
  });

  it("updates a toy by id", async () => {
    const newToy = await Toys.create({
      color: "bred",
      name: "trek",
    });

    await Toys.update(
      {
        color: "red",
        name: "truck",
      },
      { where: { id: newToy.id } }
    );

    const res = await request(app).get(`/api/v1/toys/${newToy.id}`);

    expect(res.body).toEqual(
      expect.objectContaining({
        color: "red",
        name: "truck",
      })
    );
  });

  it("deletes a toy by id", async () => {
    const toy = await Toys.create({
      color: "bred",
      name: "trek",
    });

    await Toys.destroy({
      where: { id: toy.id },
      truncate: false,
    });

    const res = await request(app).get("/api/v1/toys/");

    expect(res.body).toEqual([]);
  });
});
