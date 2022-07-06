const swaggerAutogen = require("swagger-autogen")();

const dotenv = require("dotenv");
dotenv.config();
const outputFile = "./swagger_output.json";
const endpointsFiles = ["./routes/index.js", "./routes/user.js"];

const doc = {
  info: {
    version: "1.0.0", // by default: '1.0.0'
    title: "Authentication Service REST APIS", // by default: 'REST API'
    description: "Authentication Service REST APIS", // by default: ''
  },
  host: process.env.APP_HOST_WITHOUT_PROTOCOL || "localhost:3000", // by default: localhost:3000
  basePath: "/api", // by default: '/'
  schemes: [], // by default: ['http']
  consumes: ["application/json"], // by default: ['application/json']
  produces: ["application/json"], // by default: ['application/json']
  tags: [
    // by default: empty Array
    {
      name: "Authentication", // Tag name
      description: "", // Tag description
    },
    // { ... }
  ],
  securityDefinitions: {
    apiKeyAuth: {
      type: "apiKey",
      in: "header", // can be 'header', 'query' or 'cookie'
      name: "RP-CUID", // name of the header, query parameter or cookie
      description: "Range Plus Auth Header",
    },
  },
};

swaggerAutogen(outputFile, endpointsFiles, doc);
