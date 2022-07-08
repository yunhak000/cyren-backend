const express = require("express");
const controller = require("../controllers/photos");
const router = express.Router();

router.post("/newPhotos", controller.createPhoto);
router.post("/photoLists", controller.getPhotoList);
router.post("/removePhotos", controller.removePhoto);

module.exports = router;
