const mongoose =require('mongoose');

const Schema=mongoose.Schema;


const ListingSchema=new Schema({
    title:{type:String},
    planid:{type:mongoose.Schema.Types.ObjectId, required: true, ref: 'Plan'},
    content:{type:String},
    slogan:{type:String},
    categoryid:{type:mongoose.Schema.Types.ObjectId,  ref: 'Category' },
    active:{type:Boolean , default:true}
}, 
  {timestamps:true}
);

const Listing=mongoose.model('Listing',ListingSchema);

module.exports=Listing;