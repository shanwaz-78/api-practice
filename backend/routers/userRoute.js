const express = require("express");
const userDataController = require("../controllers/userData");
const route = express.Router();

route.post("/userData", userDataController.userData);
route.get("/data", userDataController.storedData);

module.exports = route;
