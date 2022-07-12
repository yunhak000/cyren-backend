const mongoose = require("mongoose");

const LocationSchema = new mongoose.Schema({
  userEmail: { type: String, required: true },
  latitude: { type: String, required: true },
  longitude: { type: String, required: true },
  dateTime: { type: String, required: true },
});

module.exports = mongoose.model("Location", LocationSchema);
