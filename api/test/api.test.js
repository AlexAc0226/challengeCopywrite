const request = require("supertest");
const app = require("../src/app");

/**
 * Testing user endpoint by giving an existing user
 */
describe("GET - Endpoint iecho", () => {
  it("Responder con un json si el texto pasado por query es 'text'", (done) => {
    request(app)
      .get("/iecho?text=text")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect({ text: "text" })
      .expect(200, done);
  });

  it("Responder con un json si el texto pasado por query NO es 'text'", (done) => {
    request(app)
      .get("/iecho")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(400)
      .expect({ error: "No text" })
      .end((err) => {
        if (err) return done(err);
        done();
      })
  });
});
