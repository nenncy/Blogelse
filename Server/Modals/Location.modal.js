const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const LocationSchema = new Schema({

      LocationName: { type: String , trim:true },
      LocationImage: { type: String },
      active : { type: Boolean , default:true},
   

}, {
  timestamps: true,
});

const Location = mongoose.model('Location', LocationSchema);

module.exports = Location;