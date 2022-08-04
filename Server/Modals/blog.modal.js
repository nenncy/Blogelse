const mongoose=require('mongoose');
const Schema=mongoose.Schema;


const blogSchema=new Schema(
    {
        title: { type: String,trim: true, minlength: 3 },
        body: { type: String, trim: true },
        author: {
            type: String,
         
        },
        date: { type: String,  },
        comments: [String]
    },
    { timestamps: true }
)


const Blog=mongoose.model('Blog',blogSchema);

module.exports=Blog;