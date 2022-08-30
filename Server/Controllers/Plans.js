const express = require('express');
const router = express.Router();
const Plan=require('../Modals/Plan.modal');
const PlanFeature=require('../Modals/Planfeature.modal');


router.post('/create/plans', async(req,res)=>{

    try{
      const plan=await Plan.findOne({PlanName:req.body.PlanName})
            
            if(plan){
             return  res.status(400).send({msg:"Plan already exist!"});
            }

            const newplan=new Plan({
                
                PlanName:req.body.PlanName,
                PlanPrize:req.body.PlanPrize,
                Duration:req.body.Duration
            });
            newplan.save(function(err,res){
                if(err){
                    res.status(300).send({msg:err});
                }
               return  res.send({msg:"PLan created successfully."});
            });
    }
    catch(err){
        res.status(500).send({msg:err});

    }
})


module.exports=router;