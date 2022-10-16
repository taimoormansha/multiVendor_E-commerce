const nodeMailer = require("nodemailer");

const sendEmail = async (options) => {
  const transporter = nodeMailer.createTransport({
    host: process.env.REACT_APP_SMPT_HOST,
    port: process.env.REACT_APP_SMPT_PORT,
    service: process.env.REACT_APP_SMPT_SERVICE,
    auth: {
      user: process.env.REACT_APP_SMPT_MAIL,
      pass: process.env.REACT_APP_SMPT_PASSWORD,
    },
  });

  const mailOptions = {
    from: process.env.REACT_APP_SMPT_MAIL,
    to: options.email,
    subject: options.subject,
    text: options.message,
  };

  await transporter.sendMail(mailOptions);
};

module.exports = sendEmail;
