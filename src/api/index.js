const express = require("express");
const filterRoutes = require("./record.route.js");

const router = express.Router();


filterRoutes(router);

module.exports = router;