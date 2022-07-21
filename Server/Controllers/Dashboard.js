const router = require('express').Router();
const multer = require('multer');
const { v4: uuidv4 } = require('uuid');
let path = require('path');

const Dashboard = require('../Modals/Dashboard.modal');
const User=require('../Modals/User.modal');

//multer configuration

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, '../public/uploads/LocationImage')
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


router.post('/add/mydashboard', upload.single('ProfileImage'), async (req, res) => {
    try {
    
        const user=User.findOne({Username:req.body.Username},function(error,user){
            if(error){
                console.log(error);
            }
            else{
                console.log(user.Password);
            }
        });
       ;
        const DisplayName = req.body.DisplayName;
        const ProfileImage = req.file.path
            .replace('..\\public', '')
            .replace('../public', '')
            .replace('..public', '');

        const Username = req.body.Username;
        const Firstname = req.body.Firstname;
        const Lastname = req.body.Lastname;
        const Email = req.body.Email;
        const Phone = req.body.Phone;
        const Website = req.body.Website;
        const Address = req.body.Address;
        const NewPassword =Bcrypt.hashSync(req.body.NewPassword,10) ;
        const cinformPassword =Bcrypt.hashSync(req.body.cinformPassword,10);
        const AboutAuthor = req.body.AboutAuthor;


        Dashboard.findOne({ DisplayName: req.body.DisplayName }, function (error, dashboard) {
            if (error) {
                return res.send(error);
            }
            else if (dashboard) {
                return res.send({ msg: "Displayname already exist" });
            }
            else if(!Bcrypt.compareSync(req.body.NewPassword, req.body.cinformPassword)){
                console.log("wrong")
                return res.status(401).send({msg:'Wrong Password!'});
            }
            

            dashboard = new Dashboard({

                DisplayName,
                ProfileImage,
                Username,
                Firstname,
                Lastname,
                Email,
                Phone,
                Website,
                Address,
                NewPassword,
                cinformPassword,
                AboutAuthor
            })
            dashboard.save()
                .then(() => res.json('Dashboard changed'))
                .catch(err => res.status(400).json('Error: ' + err));
        })



    }
    catch (err) {
        res.send(err)
    }
})




module.exports = router;