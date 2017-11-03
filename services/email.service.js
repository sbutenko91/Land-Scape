const nodemailer = require('nodemailer');

module.exports.sendEmail = function sendEmail(emailData) {

    let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true, // true for 465, false for other ports
        auth: {
            user: 'westsoundlviv@gmail.com', // generated ethereal user
            pass: 'LvivWestSound'  // generated ethereal password
        }
    });

    var currentdate = new Date(); 
    var datetime = "Заявку відправлено: " 
                + (currentdate.getDate()<10?'0':'') + currentdate.getDate()  + "."
                + (currentdate.getMonth()+1)  + "." 
                + currentdate.getFullYear() + "   "  
                + currentdate.getHours() + ":"  
                + (currentdate.getMinutes()<10?'0':'') + currentdate.getMinutes() + ":" 
                + (currentdate.getSeconds()<10?'0':'') + currentdate.getSeconds();

    // setup email data with unicode symbols
    let mailOptions = {
        from: 'westsoundlviv@gmail.com', // sender address
        to: 'sergiy.buten8@gmail.com', // list of receivers
        subject: 'У вас нова заявка з сайту', // Subject line
        text: 'Hello world?', // plain text body
        html: 
        '<head><style>td{ border: 1px solid black; padding: 5px; color: #000; text-align: center;}th{border: 1px solid black; color: #000; background: #b8b6ec; text-align: center;}</style></head><body style="font-weight: 600; line-height: 1.5"><b>' + datetime + '</b><br/><table style="border-spacing: 0px; min-width: 100%; border: 1px solid black"><thead style="border-bottom: 1px solid black; padding: 5px"><tr><th>Імя</th><th>Email</th><th>Телефон</th><th>Повідомлення</th></tr></thead><tbody><tr><td>' + emailData.name + '</td><td>' + emailData.email + '</td><td>' + emailData.phoneNumber + '</td><td>' + emailData.message + '</td></tr></tbody></table></body>'    
        // html body
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
    });
}
