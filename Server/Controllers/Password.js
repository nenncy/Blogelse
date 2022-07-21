
const express=require('express');
const router=require('express').Router();
const Bcrypt =require('bcrypt');
const crypto=require('crypto');
const nodemailer=require('nodemailer');
var generator = require('generate-password');

const Token=require('../Modals/token.modal');
const User=require('../Modals/User.modal');
const Smtptransport=require('../Common/SmtpTransport')

// Gmail configuration

var smtpTransport = nodemailer.createTransport({
    service: "Gmail",
    auth: {
        user: process.env.EMAIL_USERNAME,
        pass: process.env.AUTH_PASSWORD
    }
});

router.post('/password',async(req,res)=>{
    try{
        User.findOne({Email:req.body.Email},function(err,user){
            if(err){
                res.status(400).send({msg:err});
            }
            else if(!user){
                res.status(400).send({msg:"THis email id is not associated with this website"});
            }
            else{
                   Token.findOne({_userId:user._id}, function(err,token){
                    if(!token){
                      token = new Token({ _userId: user._id, token: crypto.randomBytes(16).toString('hex') });
                        token.save();
                    }

                    //sending password into mail 
                        var password = generator.generate({
                            length: 10,
                            numbers: true
                        });
                      
                      user.Password=Bcrypt.hashSync( password,10);
                      user.save();
                      console.log("password changed!");

                    var mailOptions = { from: 'no-reply@example.com', to: user.Email, subject: 'Password Reset', text: 'Hello '+',\n\n' + 'password :'+password +',\n\n'+ 'Please Reset your password by clicking the link: \nhttp:\/\/' + req.headers.host + '\/passwordreset\/' + token._userId + '\/' + token.token };
                     
                     //mail sending
                    console.log(mailOptions);
                     smtpTransport.sendMail(mailOptions, function (err) {
                        if (err) { 
                            console.log(err);
                        }
                        return res.status(200).send({msg:'Email has been sent to ' + user.Email + '. It will be expire after one day.'});
                    }); 

               });

            }
        })


    }
    catch(error){
        res.send({msg:"An error occured"});
        console.log(error)
    }

});


router.post('/passwordreset/:_id/:token' , async(req,res)=>{
    try{
        const user=await User.findById(req.params._id);
        if(!user){
            return res.status(300).send({msg:"Link is expired!"});
        }
        const token=await Token.findOne({
            _userId:user._id,
            token:req.params.token
        })
        if(!token){
            return res.status(300).send({msg:"Link is expired!"});
        }
        else if(!Bcrypt.compareSync(req.body.Password, user.Password)){
               
            return res.status(401).send({msg:'Wrong Password!'});
        }

        //for changing password manually

        //req.body.Password=Bcrypt.hashSync(req.body.Password,10);
        // user.Password=req.body.Password;

        // await user.save();
        // await token.delete();
        res.status(200).send({msg:"password reset sucessfully."});
    }
    catch(err){
        res.send({msg:"An error occured"});
        console.log(err);
    }
})


module.exports=router;