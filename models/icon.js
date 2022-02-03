const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create schema for item
const IconSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  binary: {
    type: Buffer,
    required: true,
  }
});

// Create model for todo
const Icon = mongoose.model("icon", IconSchema);

module.exports = Icon;
