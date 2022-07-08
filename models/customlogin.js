const mongoose = require("mongoose");

const customloginSchema = new mongoose.Schema(
  {
    fname: {
      type: String,
      require: true,
    },
    lname: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
    },
    profilePic: {
      type: String,
    },
    customerType: {
      type: Boolean,
    },

    isActive: {
      type: Boolean,
    },

    mobileNumber: {
      type: String,
      required: true,
    },

    isEmailVerified: {
      type: Boolean,
    },

    isMobileverified: {},

    address: {
      country: {
        type: String,
      },
      stree1: {
        type: String,
      },
      city: {
        typr: String,
      },
      city: {
        type: String,
      },
      state: {
        type: String,
      },
      state: {
        type: String,
      },
      zip: {
        type: Boolean,
      },
      isDefault: {
        type: String,
      },
      lat: {
        type: Boolean,
      },
      long: {
        type: Boolean,
      },
    },
  },
  {
    // Turn on strict mode for query filters
  }
);

module.exports = mongoose.model("customlogins", customloginSchema);
