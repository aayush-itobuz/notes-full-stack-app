import nodemailer from 'nodemailer';
import jwt from 'jsonwebtoken';
import hbs from 'nodemailer-express-handlebars';

export const sendEmail = (email, id) => {
  console.log("send", id);

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD
    }
  })

  transporter.use('compile', hbs({
    viewEngine: {
      extname: '.hbs',
      layoutsDir: './views',
      defaultLayout: false,
      partialsDir: './views',
    },
    viewPath: './views',
    extName: '.hbs'
  }))

  // token generate
  const token = jwt.sign({ id }, process.env.SECRET_KEY, { expiresIn: '30m' })

  const mailConfigurations = {
    from: 'aayush@itobuz.com',
    to: 'aayush@itobuz.com',

    subject: 'Email Verification',

    template: 'verificationMail',
    context: {
      token: `${token}`
    }
  }

  transporter.sendMail(mailConfigurations, function (error, info) {
    if (error) console.log(error);
    else {
      console.log('Email Sent Successfully');
      console.log(`token : ${token}`);
    }
  })

  return token;
}
