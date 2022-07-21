const express = require('express');
const router = express.Router();
const Bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const crypto = require('crypto');

const User = require('../Modals/User.modal');
const Token = require('../Modals/token.modal');



//sign up method
router.post('/createuser', async (req, res) => {
    try {
        User.findOne({ Email: req.body.Email }, function (error, user) {
            if (error) {
                res.send(error)
            }
            else if (user) {
                res.status(400).send({ msg: "user already exist!" });
            }
            else {
                console.log(req.body);
                
                req.body.Password = Bcrypt.hashSync(req.body.Password, 10);

                const user = new User({
                    Username: req.body.Username,
                    Email: req.body.Email,
                    Password: req.body.Password,
                    Firstname: req.body.Firstname,
                    Lastname: req.body.Lastname,
                    Website: req.body.Website,
                    Bio: req.body.Bio


                })
                user.save(function (err) {
                    if (err) {
                        console.log(err);
                    }
                    else {
                        //generate token 
                        var token = new Token({ _userId: user._id, token: crypto.randomBytes(16).toString('hex') });
                        token.save(function (err, data) {
                            if (err) {
                                console.log(err);
                            }
                            else {
                                res.send(data);
                            }
                        })
                    }
                })
            }
        })
    }
    catch (err) {
        console.log(err);
    }
})



//signin method
router.post('/users/login', async (req, res) => {

    var email=req.body.Email;
    var password=req.body.Password;
    var username=req.body.Username;
    

    var data;
    try{

        if (email && password) {
            data = {
                Email: email
             
            };
        }
         else if (username && password) {
            data = {
                Username:username
               
            };
            // console.log(data);
        }
        else {
            res.json({
                status: 500,
                message: err
            });
        }
        User.findOne(data, function(err,user){

            // console.log(user);
            if(err){
                return res.status(500).send({msg: err.message});
            }
          
            // user is not found in database i.e. user is not registered yet.
            else if (!user){
                return res.status(401).send({ msg:'The email address ' + req.body.email + ' is not associated with any account. please check and try again!'});
            }
            // comapre user's password if user is find in above step
            else if(!Bcrypt.compareSync(req.body.Password, user.Password)){
               
                return res.status(401).send({msg:'Wrong Password!'});
            }
       
           
            // user successfully logged in
            else{
                return res.status(200).send({code:'6',msg: 'User successfully logged in.'});
            }
        })
       

    }
    catch(err){
        console.log(err);
    }
})



//get user

router.get('/get/users/:id',async(req,res)=>{

    try{
        User.findById({_id:req.params.id},function(error,user){
            if(error){
                console.log(error);

            }
            else{
                res.send(user);

            }
        })

    }
    catch(err){

        console.log(err);

    }
})



module.exports = router;
