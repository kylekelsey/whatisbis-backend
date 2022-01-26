const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create schema for item
const Item = new Schema({
  name: {
    type: String,
    required: [true, 'The name text field is required'],
  },
  wowheadId: {
    required: [true, 'The wowheadId text field is required']
  }
});

// Create model for todo
const Item = mongoose.model('item', ItemSchema);

module.exports = Item;