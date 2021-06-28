let chai = require("chai");
let chaiHttps = require("chai-http");
let server = require("../washers");

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
      const taskId = "60d77f1ef1e75d2fcc19eb42";

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
        .get("/washer" + taskId)
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
          naem: "TAsk",
          address: "Somewher",
          noOfWashes: "5",
          mobile: "321314241",
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

  describe("PUT /customer", () => {
    {
      it("it should put", (done) => {
        const task = {
          car: {
            carname: "task",
            carModelNo: "NewTask",
          },
          noofWashes: 4,
          name: "Newname",
          mobile: 1122321,
          address: "near dk colony",
        };

        chai
          .request(server)
          .put("/customer")
          .send("task")
          .end((err, response) => {
            response.body.should.be.a("object");
            done();
          });
      });
    }
  });

  describe("DELETE /customer/:id", () => {
    {
      it("it should delete", (done) => {
        const task = "60cf4a2148e10e1d2c7b3920";
        chai
          .request(server)
          .delete("/customer/:id" + task)
          .send("task")
          .end((err, response) => {
            response.body.should.be.a("object");
            done();
          });
      });
    }
  });
});
