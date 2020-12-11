const fs = require("fs");
const request = require("supertest");
const app = require("../lib/app");
const sequelize = require("../database/utils/sequelize");
const { Toys } = require("../database/models/Toys");

describe("bonus_sequelize routes", () => {
  beforeEach(() => {
    return sequelize.sync({ force: true });
  });

  afterAll(() => {
    return sequelize.end();
  });

  it("posts a new toy", async () => {
    const res = await request(app)
      .post("/api/v1/toys")
      .send({ color: "blue", name: "sailboat" });

    expect(res.body).toEqual(
      expect.objectContaining({
        color: "blue",
        name: "sailboat",
      })
    );
  });

  it("gets all toys", async () => {
    const toys = await Promise.all(
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

    // oh my god, the fucking updatedAt is returning as a date datatype, where jest is expecting a string datatype
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
  it("updates a toy by id", async () => {});
  it("deletes a toy by id", async () => {});
});
