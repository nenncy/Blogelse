const router=require('express').Router();
const Blog=require('../Modals/blog.modal');

router.post('/create/blog',async(req,res)=>{
    try{

        const { title,body,author}=req.body;
        const date = Date.parse(req.body.date);

        const comments = [];

        const newBlog=new Blog({
            title,
            body,
            author,
            date,
            comments,
        });

        newBlog.save()
        .then((blog)=>res.send(blog))
        .catch((err)=>res.send(err))
    }
    catch(error){

        console.log(error);
    }
})


router.get('/get/blogs', async(req,res)=>{
  try{
  const allblogs= await Blog.find();
   if(allblogs){
    return res.send(allblogs)
   }
   else{
    return res.send({msg:"something went wrong!"});
   }
  }
  catch(error){
    return res.send(error);
  }
})

module.exports=router;