import nodemailer from "nodemailer";

function sendMessage(sub, txt) {
    let transporter = nodemailer.createTransport(
        {
           host: process.env.MAIL_HOST,
           port: process.env.MAIL_PORT,
           secure: process.env.MAIL_SECURE,
           auth: {
            user: process.env.MAIL_USERNAME,
            pass: process.env.MAIL_PASSWORD,
           },
           requireTLS: process.env.MAIL_TLS,
        }
    )
        let message = {
            from:,
            to:,
            subject:,
            text:,
        }

}