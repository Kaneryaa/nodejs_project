const express = require('express');
const custm = require("../controllers/customlogincontroller");
const useRouter = express.Router();


useRouter.post('/v1/customlogin',custm.getlogin);

module.exports = useRouter;