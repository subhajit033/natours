const nodemailer = require('nodemailer');
const fs = require('fs');
const htmlToText = require('html-to-text');
class sendEmail {
  constructor(user, url) {
    this.to = user.email;
    this.firstName = user.name.split('')[0];
    this.url = url;
    this.from = 'Subhajit Kundu <kundusubhajit73@gmail.com>';
  }
  newTransport() {
    if (process.env.NODE_ENV === 'production') {
      return 1;
    }
    return nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: process.env.EMAIL_PORT,
      auth: {
        user: process.env.EMAIL_USERNAME,
        pass: process.env.EMAIL_PASSWORD,
      },
    });
  }

  async send(template, subject) {
    //this is actual email
    const html = fs.readFileSync(`../views/${template}.html`, 'utf-8');
    const mailOptions = {
      from: this.from,
      to: this.to,
      subject,
      html,
      text: htmlToText.fromString(html),
    };
    await this.newTransport.sendEmail(mailOptions);
  }
  async sendWelcome() {
    await this.send('welcome', 'Welcome To Natours');
  }
}

// const sendEmail = async (options) => {
//   //1) create a transporter (we are using mailtrap as a servoce)

//   const transporter = nodemailer.createTransport({
//     host: process.env.EMAIL_HOST,
//     port: process.env.EMAIL_PORT,
//     auth: {
//       user: process.env.EMAIL_USERNAME,
//       pass: process.env.EMAIL_PASSWORD,
//     },
//   });
//   //less secure development
//   //2) define email options
//   const mailOptions = {
//     from: 'kundusubhajit72@gmail.com',
//     to: options.email,
//     subject: options.subject,
//     text: options.message,
//     //html: options.html
//   };
//   //3) Actually send mail

//   await transporter.sendMail(mailOptions);
// };

module.exports = sendEmail;
