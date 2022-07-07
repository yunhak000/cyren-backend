const mongoose = require("mongoose");

const ImageSchema = new mongoose.Schema({
  userEmail: { type: String, required: true },
  fileName: { type: String, required: true },
  today: { type: String, required: true },
  dateTime: { type: String, required: true },
});

module.exports = mongoose.model("Image", ImageSchema);
