const router = require("express").Router();
const userControllers = require("../../controllers/users");

/* GET users listing. */
router.post("/login", userControllers.login);

module.exports = router;
