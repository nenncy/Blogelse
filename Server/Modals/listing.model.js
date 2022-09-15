const mongoose =require('mongoose');

const Schema=mongoose.Schema;


const ListingSchema=new Schema({
    title:{type:String},
    price:{type:Number},
    pricerange:{type:String},
    planid:{type:mongoose.Schema.Types.ObjectId, required: true, ref: 'Plan'},
    content:{type:String},
    slogan:{type:String},
    features:[String],
    sociallist:[{
      name:{type:String},
      url:{type:String}
    }],
    tags:[{type:mongoose.Schema.Types.ObjectId,  ref: 'Tag' }],
    categoryid:{type:mongoose.Schema.Types.ObjectId,  ref: 'Category' },
    locationid:{type:mongoose.Schema.Types.ObjectId,  ref: 'Location' },
    postcode:{type:String},
    phone1:{type:Number},
    phone2:{type:Number},
    fax:{type:String},
    email:{type:String},
    website:{type:String},
    active:{type:Boolean , default:true}
}, 
  {timestamps:true}
);

const Listing=mongoose.model('Listing',ListingSchema);

module.exports=Listing;