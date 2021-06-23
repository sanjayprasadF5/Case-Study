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

  describe("GET /promocode", () => {
    it("it should get all task done", (done) => {
      chai
        .request(server)
        .get("/promocode")
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

  describe("GET /promocode/:id", () => {
    it("it should get by id", (done) => {
      const taskId = "60cf4356609cbc0bb80f2453";

      chai
        .request(server)
        .get("/promocode" + taskId)
        .end((err, response) => {
          response.body.should.be.a("object");
          done();
        });
    });

    it("it should not get by id", (done) => {
      const taskId = "123";

      chai
        .request(server)
        .get("/promocode" + taskId)
        .end((err, response) => {
          response.should.have.status(404);
          done();
        });
    });
  });

  describe("POST /promocode", () => {
    {
      it("it should post", (done) => {
        const task = {
          name: "Task",
          discount: 50,
          forService: "adacsfaccadfa",
          expireOn: "true",
          status: "active",
        };

        chai
          .request(server)
          .post("/promocode")
          .send("task")
          .end((err, response) => {
            response.body.should.be.a("object");
            done();
          });
      });
    }
  });

  describe("PUT /promocode", () => {
    {
      it("it should put", (done) => {
        const task = {
          name: "Task",
          discount: 50,
          forService: "adacsfaccadfa",
          expireOn: "true",
          status: "active",
        };

        chai
          .request(server)
          .put("/promocode")
          .send("task")
          .end((err, response) => {
            response.body.should.be.a("object");
            done();
          });
      });
    }
  });

  describe("DELETE /promocode/:id", () => {
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
