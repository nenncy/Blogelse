const mongoose =require('mongoose');

const Schema=mongoose.Schema;


const CategorySchema=new Schema({
    icons:{type:String},
    categoryName:{type:String},
    CategoryImage:{type:String},
    active:{type:Boolean , default:true}
}, 
  {timestamps:true}
);

const category=mongoose.model('Category',CategorySchema);

module.exports=category;