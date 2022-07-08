const assert = require("assert");
const config = require("../config/config");
let chai = require("chai");
let chaiHttp = require("chai-http");
let server = require("../server");
let should = chai.should();
chai.use(chaiHttp);
describe("forgotpasswdController", function () {
  const forgotPassOTP = {
    email: "kanerya7@gmail.com",
    mobileNumber: "8789251112",
  };
  describe("Forgot passowrd", function () {
    it("should forgot password and generate OTP", (done) => {
      chai
        .request("http://localhost:3000")
        .post("/auth/frgt/v1/forgotPass")
        .set("rp-cuid", "RP_STORE")
        .send(forgotPassOTP)
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
