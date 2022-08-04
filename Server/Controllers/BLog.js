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


module.exports=router;