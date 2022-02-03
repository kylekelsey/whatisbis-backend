const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create schema for item
const ClassSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    required: true
  },
  specs: {
    type: Array,
    required: true
  },
});

// Create model for todo
const Class = mongoose.model("classes", ClassSchema);

module.exports = Class;
