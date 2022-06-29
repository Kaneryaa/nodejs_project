const express = require('express');
var router = express();
const customer = require("../controllers/customerController");


router.post("/profile",customer.getprofile);

module.exports = router