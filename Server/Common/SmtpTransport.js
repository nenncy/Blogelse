
const nodemailer=require('nodemailer');

const Smtptransport=()=>{
    var transport=nodemailer.createTransport({
        service:'gmail',
        auth:{
            user:process.env.EMAIL_USERNAME,
            pass:process.env.AUTH_PASSWORD
    
        }
    })
}


module.exports={Smtptransport}