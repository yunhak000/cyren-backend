const Image = require("../models/image");

exports.createPhoto = async (req, res, next) => {
  try {
    const image = new Image({
      userEmail: req.body.userEmail,
      fileName: req.body.fileName,
      s3Url: req.body.s3Url,
      today: req.body.today,
      dateTime: req.body.dateTime,
    });

    await image.save();
  } catch (err) {
    next(err);
  }
};
