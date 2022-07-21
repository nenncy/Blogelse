const express=require('express');
const router=require('express').Router();
const multer=require('multer');
const { v4: uuidv4 } = require('uuid');
let path = require('path');
const Location=require('../Modals/Location.modal');


//multer configuration

const storage=multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,'../public/uploads/LocationImage')
    },
    filename: function(req, file, cb) {   
        cb(null,  file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
})
const fileFilter = (req, file, cb) => {
    const allowedFileTypes = ['image/jpeg', 'image/jpg', 'image/png'];
    if(allowedFileTypes.includes(file.mimetype)) {
        cb(null, true);
    } else {
        cb(null, false);
    }
}


let upload = multer({ storage, fileFilter });


//post data to location 

router.post('/add/listing/location',upload.single('LocationImage'),async(req,res)=>{
    try{
        const LocationName=req.body.LocationName;
        const LocationImage=req.file.path
        .replace('..\\public', '')
        .replace('../public', '')
        .replace('..public', '');

        console.log(LocationImage);

        const location=new Location({
            LocationName,
            LocationImage
        })
       location.save()
       .then(() => res.json('Location Added'))
       .catch(err => res.status(400).json('Error: ' + err));
    }
    catch(err){

    }

})


//get data from location

router.get('/get/alllocations',async(req,res)=>{
    try{
        Location.find((error,data)=>{
            if(error){
                res.send(error);
            }
            else{
                return res.status(200).send({data})

            }
        })

    }
    catch(err){
        console.log(err);
    }
})



module.exports = router;