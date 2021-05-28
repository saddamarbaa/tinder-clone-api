/** @format */

const express = require("express");
const router = express.Router();

const tinderCardController = require("../api/controllers/card");

router.post("/", tinderCardController.addTinderCards);
router.get("/", tinderCardController.getTinderCards);

module.exports = router;
