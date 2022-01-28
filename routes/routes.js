const express = require("express");
const controller = require("../controller");

const router = express.Router();

router.post("/book", controller.insertNewBook);

router.get("/book", controller.findBookByTitle);

router.delete("/book", controller.deleteBookByTitle);

module.exports = router;