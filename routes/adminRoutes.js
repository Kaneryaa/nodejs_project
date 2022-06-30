const express = require('express');
const admin = require("../controllers/adminController");
const adminservice = require('../services/adminService')
const useRouter = express.Router();


useRouter.post('/v1/login',admin.login);
// useRouter.post('/logout',logout);
// useRouter.post('/v1/login',adminservice.getloginProfile);
module.exports = useRouter;