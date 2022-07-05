const router = require("express").Router();
const userController = require("../controllers/user");
const { checkCUID } = require("../middleware/headers");

// Register a new User
router.post("/user", checkCUID, userController.register);

module.exports = router;
