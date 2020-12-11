const fs = require("fs");
const request = require("supertest");
const app = require("../lib/app");
const sequelize = require("../database/utils/sequelize");
const Toys = require("../database/models/Toys");

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
  it("gets all toys", async () => {});
  it("gets a toy by id", async () => {});
  it("updates a toy by id", async () => {});
  it("deletes a toy by id", async () => {});
});
