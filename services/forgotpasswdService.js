const constants=require("../config/constant");
const brcypt = require('bcrypt')
const nodemailer = require('nodemailer');
const { forgot_password } = require("../controllers/forgotpasswdController");

const  sendMain = async(email,subject,text) => {
    try {
        const transport = nodemailer.createTransport({
            host:'smtp.gmail.com',
            port:587,
            secure:false,
            requireTLS:true,
            auth:{
                user:email,
                pass: password
            }
        })
            await transport.sendMail ({
            from : config.emailUser,
            to : email,
            subject : subject,
            text : text
        })
        console.log("email sent successfully")

//         transport.sendMail(mailOptions, function(error,info){
//             if(error){
//                 console.log(error)

//             }else{
//                   console.log("mail has been sent successs full :- ", info.response)
//             }
//         })

    }catch (error){
        console.log(error)
    }
}



 
module.exports={
    sendMain
}


// const Mailgun = require('mailgun.js');

// const SimpleMailgunAdapter = mailgunOptions => {
//   if (!mailgunOptions || !mailgunOptions.apiKey || !mailgunOptions.domain || !mailgunOptions.fromAddress) {
//     throw 'SimpleMailgunAdapter requires an API Key, domain, and fromAddress.';
//   }
//   const mailgunClient = Mailgun.client({
//     username: 'api',
//     key: mailgunOptions.apiKey
//   });

//   const sendMail = mail => {
//     const data = Object.assign({}, mail, { from: mailgunOptions.fromAddress });
//     return mailgunClient.messages.create(mailgunOptions.domain, data);
//   }

//   return Object.freeze({
//     sendMail: sendMail
//   });
// }

// module.exports = SimpleMailgunAdapter

