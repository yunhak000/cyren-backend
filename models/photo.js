const mongoose = require("mongoose");

const PhotoSchema = new mongoose.Schema({
  userEmail: { type: String, required: true },
  fileName: { type: String, required: true },
  s3Url: { type: String, required: true },
  date: { type: String, required: true },
  dateTime: { type: String, required: true },
});

module.exports = mongoose.model("Photo", PhotoSchema);
