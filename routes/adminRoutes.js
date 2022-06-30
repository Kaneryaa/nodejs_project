const express = require('express');
const admin = require("../controllers/adminController")
const useRouter = express.Router();


useRouter.post('/v1/login',admin.login);
// useRouter.post('/logout',logout);

module.exports = useRouter;