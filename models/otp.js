const { string, number } = require("joi");
const mongoose = require("mongoose");
const custm = require("../models/customlogin");

const otpSchema = new mongoose.Schema(
  {
    customerId: { type: mongoose.Schema.Types.ObjectId, ref: "customlogins" },
    otp: String,
    email: String,
    mobileNumber: String,
    otpType: Number,
    otpSubType: Number,
    expireIn: Date,
  },
  {
    timestamps: true,
    strict: true,
    strictQuery: true, // Turn on strict mode for query filters
  }
);

module.exports = mongoose.model("customerotp", otpSchema);
