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

  describe("GET /car", () => {
    it("it should get all task done", (done) => {
      chai
        .request(server)
        .get("/car")
        .end((err, res) => {
          res.should.have.status(200);
          res.should.have.be.a("object");
          res.body.length.should.be.eq(15);
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

  describe("GET /car/:id", () => {
    it("it should get by id", (done) => {
      const taskId = "60cb0f88ba904a1cb89685f2";

      chai
        .request(server)
        .get("/car" + taskId)
        .end((err, response) => {
          response.body.should.be.a("object");
          done();
        });
    });

    it("it should not get by id", (done) => {
      const taskId = "123";

      chai
        .request(server)
        .get("/car" + taskId)
        .end((err, response) => {
          response.should.have.status(404);
          done();
        });
    });
  });

  describe("POST /car", () => {
    {
      it("it should post", (done) => {
        const task = {
          name: "Task",
          carBrand: "DSF",
          status: "active",
        };

        chai
          .request(server)
          .post("/car")
          .send("task")
          .end((err, response) => {
            response.body.should.be.a("object");
            done();
          });
      });
    }
  });

  describe("PUT /car", () => {
    {
      it("it should put", (done) => {
        const task = {
          name: "Task",
          carBrand: "DSF",
          status: "active",
        };

        chai
          .request(server)
          .put("/car")
          .send("task")
          .end((err, response) => {
            response.body.should.be.a("object");
            done();
          });
      });
    }
  });

  describe("DELETE /car/:id", () => {
    {
      it("it should delete", (done) => {
        const task = "60cb0f88ba904a1cb89685f2";
        chai
          .request(server)
          .delete("/car/:id" + task)
          .send("task")
          .end((err, response) => {
            response.body.should.be.a("object");
            done();
          });
      });
    }
  });
});
