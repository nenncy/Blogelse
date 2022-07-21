const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const planSchema = new Schema({

      PlanName: { type: String , trim:true },
      PlanPrize: { type: String , trim:true , unique:true},
      Duration : { type: String},
   

}, {
  timestamps: true,
});

const Plan = mongoose.model('Plan', planSchema);

module.exports = Plan;