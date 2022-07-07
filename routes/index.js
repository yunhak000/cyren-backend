const express = require("express");
const controller = require("../controllers/images");
const router = express.Router();

router.post("/newPhotos", controller.createPhoto);

module.exports = router;
