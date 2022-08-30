const mongoose=require('mongoose');
const Schema=mongoose.Schema;


const blogSchema=new Schema(
    {
        title: { type: String,trim: true, minlength: 3 },
        body: { type: String, trim: true },
        author: {
            type: String,
         
        },
        date: {type: Date, default: Date.now},
        comments:[{
            text: {type: String},
            postedBy:{type:mongoose.Schema.Types.ObjectId,ref:"User"}
        }],
        postedBy:{

            type:mongoose.Schema.Types.ObjectId,
            ref:"User"
        }
    },
    { timestamps: true }
)


const Blog=mongoose.model('Blog',blogSchema);

module.exports=Blog;