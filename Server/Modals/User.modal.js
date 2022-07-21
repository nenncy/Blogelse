const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
   Username: { type: String , trim:true },
   Email: { type: String , trim:true , unique:true},
   Password: { type: String}, 
   Firstname: { type: String , trim:true},
   Lastname: { type: String , trim:true},
   Website: { type: String , trim:true},
   Bio: { type: String , trim:true},
   cinform:{type:Boolean, default:false},
   active: {type: Boolean, default: true }
}, {
  timestamps: true,
});

const User = mongoose.model('User', userSchema);

module.exports = User;