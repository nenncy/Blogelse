
const express = require('express');
const router = require('express').Router();
const Category = require('../Modals/category.modal');
const multer =require('multer');
const path=require('path');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, '../public/uploads/CategoryImage')
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
})
const fileFilter = (req, file, cb) => {
    const allowedFileTypes = ['image/jpeg', 'image/jpg', 'image/png'];
    if (allowedFileTypes.includes(file.mimetype)) {
        cb(null, true);
    } else {
        cb(null, false);
    }
}
let upload = multer({ storage, fileFilter });

router.post('/create/category',upload.single('ctimage'), async (req, res) => {
     
    const CategoryImage=req.file.path
    .replace('..\\public', '')
    .replace('../public', '')
    .replace('..public', '');


    try {
        Category.findOne({ categoryName: req.body.ctname }, function (error, category) {
            if (error) {
                return res.send(error);
            }
            else if (category) {
                return res.send({ msg: "category already exist!" });
            }

            category = new Category({
                categoryName: req.body.ctname,
                icons: req.body.icon,
                CategoryImage
            })
            category.save(function (error, category) {
                if (error) {
                    return res.send(error);
                }
                else {
                    return res.send({ msg: "category created succesfully", category })
                }
            })

        })
    }
    catch (err) {

    }
})

//get all category
router.get('/get/category', async (req, res) => {
    try {
        Category.find((error, data) => {
            if (error) {
                return res.send(error);
            }
            else {
                return res.send(data);
            }
        })

    }
    catch (err) {
        return res.send(err)
    }
})

module.exports = router;