const User = require("../models/user.js");
const mongoose = require("mongoose");
const register = async (userData) => {
  // Create an user object
  let user = new User({
    email: userData.email,
    name: userData.name,
    password: userData.hashPassword,
  });

  return user.save();
};
module.exports = { register };
