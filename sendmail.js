const nodemailer = require('nodemailer');
const fs = require('fs');

const sendEmail = async options => {

    // 1) Create a transporter
    const transport = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.NODEMAILER_AUTH,
            pass: process.env.NODEMAILER_PASSWORD
        }
    });

    // 2) Define the email options
    const mailOptions = {
        // from: 'akshay.pranav.kalathil@gmail.com',
        from: 'chatbotusingchatgpt@gmail.com',
        to: options.email,
        // to: 'akshay.kalathil.pranav@gmail.com',
        // to: 'aqibshk28@gmail.com',
        // to: 'aqibshk28@gmail.com',
        subject: "Download Your resume",
        text: "Thank you for choosing us. Here is your resume",
        envelope: {
            from: 'akshay.pranav.kalathil@gmail.com',
            to: 'akshay.kalathil.pranav@gmail.com'
        },
        attachments: [
            {
                filename: 'resume.pdf',
                path: __dirname + "/resume/" + options.filename + ".pdf",
                contentType: 'application/pdf'
            }]
    };

    // 3) Actually send the email
    transport.sendMail(mailOptions, function(error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
};

module.exports = sendEmail;
