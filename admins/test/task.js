let chai = require("chai");
let chaiHttps = require("chai-http");
let server = require("../admins");

//Assertion sty;e

chai.should();

chai.use(chaiHttps);

describe("Task Apis", () => {
  /**
   * Test the Get operations
   *
   *
   */

  describe("GET /api/task", () => {
    it("should get all task done", (done) => {
      chai
        .request(server)
        .get("/api/task")
        .end((err, res) => {
          res.should.have.status(200);
          res.should.have.be.a("array");
          done();
        });
    });
  });
});
