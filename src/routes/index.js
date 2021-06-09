const express = require("express"), router = express.Router(), controller = require("../controllers/index");

router.get("/", controller.index)
router.get("/home", controller.home)
router.get("/second", controller.second)
router.get("/segunda", controller.segunda)
router.get("/third", controller.third)
router.get("/tercera", controller.tercera)

module.exports = router;