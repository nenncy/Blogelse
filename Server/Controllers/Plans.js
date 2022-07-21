const express = require('express');
const router = express.Router();
const Plan=require('../Modals/Plan.modal');
const PlanFeature=require('../Modals/Planfeature.modal');


router.post('/create/plans', async(req,res)=>{

    try{
        Plan.findOne({PlanName:req.body.PlanName},function(error,plan){
            if(error){
                return res.send(error)
            }
            else if(plan){
             return  res.status(400).send({msg:"Plan already exist!"});
            }

             plan=new Plan({
                
                PlanName:req.body.PlanName,
                PlanPrize:req.body.PlanPrize,
                Duration:req.body.Duration
            });
            plan.save(function(err,res){
                if(err){
                    res.status(300).send({msg:err});
                }
               return  res.status(200).send({msg:"PLan created successfully."});
            });


            
        })



    }
    catch(err){
        res.status(500).send({msg:err});

    }
})


module.exports=router;