const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const DashboardSchema = new Schema({

      DisplayName: { type: String , trim:true },
      ProfileImage: { type: String },
      Username:{type:String,trim:true},
      Firstname:{type:String,trime:true},
      Lastname:{typr:String,trim:true},
      Email:{type:String,trim:true},
      Phone:{type:Number},
      Website:{type:String,trim:true},
      Address:{type:String,trim:true},
      NewPassword:{type:String,trim:true},
      cinformPassword:{type:String,trim:true},
      AboutAuthor:{type:String,trim:true},
      active : { type: Boolean , default:true},
   

}, {
  timestamps: true,
});

const Dashboard = mongoose.model('Dashboard', DashboardSchema);

module.exports =  Dashboard;