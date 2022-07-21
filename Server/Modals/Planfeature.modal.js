const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const featureSchema = new Schema({

   _featureId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'Plan' },
   Featurename: { type: String , trim:true },
   active: {type: Boolean, default: true }

}, {
  timestamps: true,
});

const PlanFeature = mongoose.model('PlanFeature', featureSchema);

module.exports = PlanFeature;