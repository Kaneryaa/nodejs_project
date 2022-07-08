const { string } = require("joi");
const mongoose = require("mongoose");

const FrgtSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },
    password: {
      type: String,
    },

    mobileNumber: {
      type: String,
    },
    token: {
      type: String,
      default: "",
    },
  },
  {
    strict: true,
    strictQuery: true, // Turn on strict mode for query filters
  }
);

module.exports = mongoose.model("ForgotDB", FrgtSchema);
