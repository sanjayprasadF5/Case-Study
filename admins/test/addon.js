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

  describe("GET /addon", () => {
    it("it should get all task done", (done) => {
      chai
        .request(server)
        .get("/addon")
        .end((err, res) => {
          res.should.have.status(200);
          res.should.have.be.a("object");
          done();
        });
    });

    it("it should get not all task done", (done) => {
      chai
        .request(server)
        .get("/api/ffdt")
        .end((err, res) => {
          res.should.have.status(404);
          done();
        });
    });
  });

  describe("GET /addon/:id", () => {
    it("it should get by id", (done) => {
      const taskId = "60cf4356609cbc0bb80f2453";

      chai
        .request(server)
        .get("/addon" + taskId)
        .end((err, response) => {
          response.body.should.be.a("object");
          done();
        });
    });

    it("it should not get by id", (done) => {
      const taskId = "123";

      chai
        .request(server)
        .get("/addon" + taskId)
        .end((err, response) => {
          response.should.have.status(404);
          done();
        });
    });
  });

  describe("POST /addon", () => {
    {
      it("it should post", (done) => {
        const task = {
          name: "Task",
          discount: 50,
          forService: "adacsfaccadfa",
          cost: 8087,
          status: "active",
        };

        chai
          .request(server)
          .post("/addon")
          .send("task")
          .end((err, response) => {
            response.body.should.be.a("object");
            done();
          });
      });
    }
  });

  describe("PUT /addon", () => {
    {
      it("it should put", (done) => {
        const task = {
          name: "Task",
          discount: 50,
          forService: "adacsfaccadfa",
          cost: 8087,
          status: "active",
        };

        chai
          .request(server)
          .put("/addon")
          .send("task")
          .end((err, response) => {
            response.body.should.be.a("object");
            done();
          });
      });
    }
  });

  describe("DELETE /addon/:id", () => {
    {
      it("it should delete", (done) => {
        const task = "60cf4a2148e10e1d2c7b3920";
        chai
          .request(server)
          .delete("/promocode/:id" + task)
          .send("task")
          .end((err, response) => {
            response.body.should.be.a("object");
            done();
          });
      });
    }
  });
});
