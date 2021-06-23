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

  describe("GET /washer", () => {
    it("it should get all task done", (done) => {
      chai
        .request(server)
        .get("/washer")
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

  describe("GET /washer/:id", () => {
    it("it should get by id", (done) => {
      const taskId = "60cf4356609cbc0bb80f2453";

      chai
        .request(server)
        .get("/washer" + taskId)
        .end((err, response) => {
          response.body.should.be.a("object");
          done();
        });
    });

    it("it should not get by id", (done) => {
      const taskId = "123";

      chai
        .request(server)
        .get("/serviceplan" + taskId)
        .end((err, response) => {
          response.should.have.status(404);
          done();
        });
    });
  });

  describe("POST /washer", () => {
    {
      it("it should post", (done) => {
        const task = {
          name: "task",
          emailID: "dsjadba@bjdba",
          password: "xabdsbd",
          isApprove: true,
        };

        chai
          .request(server)
          .post("/washer")
          .send("task")
          .end((err, response) => {
            response.body.should.be.a("object");
            done();
          });
      });
    }
  });

  describe("PUT /washer/:id", () => {
    {
      it("it should put", (done) => {
        const task = {
          name: "task",
          emailID: "dsjadba@bjdba",
          password: "xabdsbd",
          isApprove: true,
        };

        chai
          .request(server)
          .put("/serviceplan")
          .send("task")
          .end((err, response) => {
            response.body.should.be.a("object");
            done();
          });
      });
    }
  });

  describe("DELETE /washer/:id", () => {
    {
      it("it should delete", (done) => {
        const task = "60cc72eaa30f030d94b49e59";
        chai
          .request(server)
          .delete("/washer/:id" + task)
          .send("task")
          .end((err, response) => {
            response.body.should.be.a("object");
            done();
          });
      });
    }
  });
});
