const express = require("express");
const photoController = require("../controllers/photos");
const locationController = require("../controllers/locations");
const router = express.Router();

router.post("/newPhotos", photoController.createPhoto);
router.post("/photoLists", photoController.getPhotoList);
router.post("/removePhotos", photoController.removePhoto);

router.post("/nowLocations", locationController.nowLocation);
router.post("/lastLocations", locationController.lastLocation);

module.exports = router;
