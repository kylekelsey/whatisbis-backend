const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const enchantGemSchema = require("./enchant_gem").schema;

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
  class: {
    type: String,
    required: true,
  },
  spec: {
    type: String,
    required: true,
  },
  icon: {
    type: Buffer,
    required: true,
  },
  rarity: {
    type: String,
    required: true,
  },
  setPieces: {
    type: Array,
  },
  enchant: {
    type: enchantGemSchema,
  },
  gems: {
    type: [enchantGemSchema],
  },
});

// Create model for todo
const Item = mongoose.model("items", ItemSchema);

module.exports = Item;
