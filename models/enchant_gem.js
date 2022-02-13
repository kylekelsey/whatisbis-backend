const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create schema for item
const EnchantGemSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  icon: {
    type: Buffer,
    required: true,
  },
  wowheadId: {
    type: String,
    required: true,
  },
  enchantSpell: {
    type: String,
  },
});

// Create model for todo
const EnchantGem = mongoose.model("enchant_gem", EnchantGemSchema);

module.exports = EnchantGem;
