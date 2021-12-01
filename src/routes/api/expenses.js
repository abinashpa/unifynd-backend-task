const router = require("express").Router();
const isAuth = require("../../middlewares/auth");
const expensesController = require("../../controllers/expenses");

router.get("/:pageNumber", isAuth, expensesController.list);

router.post("/", isAuth, expensesController.add);

module.exports = router;
