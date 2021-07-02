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

  describe("GET /serviceplan", () => {
    it("it should get all task done", (done) => {
      chai
        .request(server)
        .get("/serviceplan")
        // .set(
        //   "headers",
        //   "jwt =eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwZGVlY2UwNDFiYTQ0NDJlY2YxMjdmMyIsImlhdCI6MTYyNTIyMzExNCwiZXhwIjoxNjI1Mzk1OTE0fQ.fLwYa62A_yht9O_TK2pReocTpa15HKlWO9V_D5QnWX4"
        // )
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

  describe("GET /serviceplan/:id", () => {
    it("it should get by id", (done) => {
      const taskId = "60cf4356609cbc0bb80f2453";

      chai
        .request(server)
        .get("/serviceplan" + taskId)
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

  describe("POST /serviceplan", () => {
    {
      it("it should post", (done) => {
        const task = {
          name: "fullTask",
          time: "28 hr",
          cost: 4000,
          description: "adadabaud",
          status: "active",
        };

        chai
          .request(server)
          .post("/serviceplan")
          .send("task")
          .end((err, response) => {
            response.body.should.be.a("object");
            done();
          });
      });
    }
  });

  describe("PUT /serviceplan", () => {
    {
      it("it should put", (done) => {
        const task = {
          name: "fullTask",
          time: "28 hr",
          cost: 4000,
          description: "adadabaud",
          status: "active",
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

  describe("DELETE /serviceplan/:id", () => {
    {
      it("it should delete", (done) => {
        const task = "60cf4a2148e10e1d2c7b3920";
        chai
          .request(server)
          .delete("/serviceplan/:id" + task)
          .send("task")
          .end((err, response) => {
            response.body.should.be.a("object");
            done();
          });
      });
    }
  });
});
