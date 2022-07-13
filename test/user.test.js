const assert = require("assert");
const config = require("../config/config");
let chai = require("chai");
let chaiHttp = require("chai-http");
let server = require("../server");
let should = chai.should();
chai.use(chaiHttp);
describe("User", function () {
  const user = {
    email: "mayur.t@boppotechnologies.com",
    password: "12456789",
    name: "Mayur thosar",
  };
  describe("Register User", async () => {
    it("should register a user", (done) => {
      chai
        .request("http://localhost:3000")
        .post("/api/user/")
        .set("rp-cuid", "RP_STORE")
        .send(user)
        .end((err, res) => {
          console.log(err);
          res.should.have.status(200);
          console.log("Response Body:", res.body);
          done();
        });
    });
  });
  /// some other tests we will write here
});
