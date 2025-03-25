const request = require("supertest");
const app = require("../index"); // Import the Express app

describe("GET /", () => {
  it("should return a success message", async () => {
    const res = await request(app).get("/");
    expect(res.statusCode).toEqual(200);
    expect(res.text).toBe("Hello, Node.js App is Running! 🚀");
  });
});
