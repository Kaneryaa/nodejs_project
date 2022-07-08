const express = require("express");
const { join } = require("path");
const morgan = require("morgan");
const cors = require("cors");
const swaggerUI = require("swagger-ui-express");
const swaggerFile = require("./swagger_output.json");
const config = require("./config/config");
const mongoose = require("mongoose");

const app = express();
const PORT = config.PORT;
const bodyParser = require("body-parser");

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());
// Import Routes
const userRoutes = require("./routes/user");
const admnroutes = require("./routes/adminRoutes");
const customroutes = require("./models/customerModel");
const frgtPasswd = require("./routes/forgotpasswdRouter");
// app configs.
app.use(express.urlencoded({ extended: false }));
app.use(morgan("dev"));
app.use(cors());
app.use("/api", userRoutes);

app.get("/auth", function (req, res) {
  res.send("hello world");
});

app.use("/auth/admin", admnroutes);
app.use("/auth/custom", customroutes);
app.use("/auth/frgt", frgtPasswd);
// app.use("/auth/ForgotPswd",)
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerFile));

const db = config.DB_HOST;
mongoose.connect(
  "mongodb+srv://Danish12:Danish@cluster0.vma7rgk.mongodb.net/RangePlus",
  { useNewUrlParser: true, useUnifiedTopology: true },
  function (err) {
    if (err) {
      console.error("Error! " + err);
    } else {
      console.log("Connected to mongodb");
    }
  }
);

//initialize the app.
async function initialize() {
  app.listen(PORT);
}
initialize().finally(() => console.log(`app started on PORT:${PORT}`));
