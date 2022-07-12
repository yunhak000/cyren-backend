const Location = require("../models/location");

exports.nowLocation = async (req, res, next) => {
  try {
    await Location.findOneAndUpdate(
      {
        userEmail: req.body.userEmail,
      },
      {
        latitude: req.body.latitude,
        longitude: req.body.longitude,
        dateTime: req.body.dateTime,
      },
      {
        upsert: true,
      }
    );

    return res.status(200).end();
  } catch (err) {
    next(err);
  }
};

exports.lastLocation = async (req, res, next) => {
  try {
    const location = await Location.find({ userEmail: req.body.userEmail });

    return res.status(200).send(location);
  } catch (err) {
    next(err);
  }
};
