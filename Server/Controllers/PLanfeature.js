const express = require('express');
const router = express.Router();
const Plan=require('../Modals/Plan.modal');
const PlanFeature=require('../Modals/Planfeature.modal');

router.post('/plans/add/feature/:planid',async(req,res)=>{
    try{
          console.log(req.params.planid)
        const plan= await Plan.findOne({_id:req.params.planid});
          
           if(!plan){
                return res.send({msg:"Plan doesn't exist.Something error happend !"});
            }
            else{
               
                  //PlanFeature.findOne({Featurename:req.body.Featurename},function(err, feature){

                    // if(err){
                    //     return res.send(err);
                    // }
                    // else if(feature){
                    //     return res.status(400).send({msg:"already exist"});
                    // }
             
                  const feature=new PlanFeature({
                    _featureId:plan._id,
                    Featurename:req.body.Featurename
                   })

                   feature.save(function(err){
                    if(err){
                        console.log(err);
                    }
                    else{

                        return res.status(200).send({msg:"added feature!"});
                    }
                   })
                
            }
      

    }
    catch(err){
        console.log(err);
    }


})


router.get('/get/plans/features', async(req,res)=>{
    
    try{
        Plan.aggregate([
            {
                $lookup:{
                    from:'planfeatures',
                    localField:'_id',
                    foreignField:'_featureId',
                    as:'features'
                    
                }
            }],function(err,data){
                if(err){
                    console.log(err);
                }
                else{
                    res.send(data);
                }

            })

    }
    catch(err){
        console.log(err);
    }
})

module.exports=router;