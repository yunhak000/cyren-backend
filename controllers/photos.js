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

    return res.status(200).end();
  } catch (err) {
    next(err);
  }
};

exports.getPhotoList = async (req, res, next) => {
  try {
    const photos = await Photo.find({ userEmail: req.body.userEmail, date: req.body.date }).exec();

    return res.status(200).send(photos);
  } catch (err) {
    next(err);
  }
};

exports.removePhoto = (req, res, next) => {
  try {
    req.body.photoIds.map(async (photo) => {
      await Photo.deleteOne({ fileName: photo.Key });
    });

    return res.status(200).end();
  } catch (err) {
    next(err);
  }
};
