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

// app configs.
app.use(express.urlencoded({ extended: false }));
app.use(morgan("dev"));
app.use(cors());
app.use("/api", userRoutes);
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerFile));

const db = config.DB_HOST;
mongoose.connect(
  db,
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
