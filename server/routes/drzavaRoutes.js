const express = require("express");
const router = express.Router();
const { getDrzava } = require("../controllers/drzavaController");

router.get("/", getDrzava);

module.exports = router;
