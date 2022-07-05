const dotenv = require("dotenv");
dotenv.config();

module.exports = {
  DB_HOST: process.env.MONGO_DB || "mongodb://localhost:27017/auth",
  TOKEN_SECRET:
    process.env.TOKEN_SECRET || "thats-the-secret-not-to-be-disclose",
  PORT: process.env.PORT || 3000,
  APP_HOST: process.env.APP_HOST || "http://localhost:3000",
  RP_CUID: process.env.RP_CUID || "RP_STORE",
};
