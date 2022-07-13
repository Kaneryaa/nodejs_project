const assert = require("assert");
const config = require("../config/config");
let chai = require("chai");
let chaiHttp = require("chai-http");
let server = require("../server");
let should = chai.should();
chai.use(chaiHttp);
describe("changePasswordController", function () {
  const changePasswod = {
    otp: "17917",
    newPassword: "Aabza123",
    comfirmPassword: "Aabza123",
  };
  describe(" Change passowrd", function () {
    it("its verify and change Password", (done) => {
      chai
        .request("http://localhost:3000")
        .post("/auth/frgt/v1/changepasswd")
        .set("rp-cuid", "RP_STORE")
        .send(changePasswod)
        .end((err, res) => {
          console.log(res);
          res.should.have.status(200);
          console.log("Response Body:", res.body);
          done();
        });
    });
  });
  /// some other tests we will write here
});
