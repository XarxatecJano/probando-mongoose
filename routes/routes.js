const express = require("express");
const controller = require("../controller");

const router = express.Router();

router.get("/", controller.sendLandingPage);

router.get("/new-user", controller.getNewUserPage);
router.post("/new-user", controller.insertNewUser);

module.exports = router;