const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create schema for item
const ItemSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  wowheadId: {
    type: String,
    required: true,
  },
  modifiers: {
    type: String,
  },
  class: {
    type: String,
    required: true,
  },
  spec: {
    type: String,
    required: true,
  },
  icon: {
    type: Schema.Types.ObjectId, ref:"icon",
    required: true,
  },
  rarity: {
    type: String,
    required: true,
  },
});

// Create model for todo
const Item = mongoose.model("items", ItemSchema);

module.exports = Item;
