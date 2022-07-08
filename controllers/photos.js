const Photo = require("../models/photo");

exports.createPhoto = async (req, res, next) => {
  try {
    const photo = new Photo({
      userEmail: req.body.userEmail,
      fileName: req.body.fileName,
      s3Url: req.body.s3Url,
      date: req.body.date,
      dateTime: req.body.dateTime,
    });

    await photo.save();

    res.send("success");
  } catch (err) {
    next(err);
  }
};

exports.getPhotoList = async (req, res, next) => {
  try {
    const photos = await Photo.find({ userEmail: req.body.userEmail, date: req.body.date }).exec();

    res.json(photos);
  } catch (err) {
    next(err);
  }
};

exports.removePhoto = (req, res, next) => {
  try {
    req.body.photoIds.map(async (photo) => {
      await Photo.deleteOne({ fileName: photo.Key });
    });

    res.send("success");
  } catch (err) {
    next(err);
  }
};
