const nodemailer = require("nodemailer");

const sendEmail = async (contact) => {

  const transporter = nodemailer.createTransport({
    service: "gmail",

    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,

    to: process.env.EMAIL_USER,

    subject: "New Contact Message",

    html: `
      <h2>New Contact Message</h2>

      <p><b>Name:</b> ${contact.name}</p>
      <p><b>Email:</b> ${contact.email}</p>
      <p><b>Company:</b> ${contact.company}</p>
      <p><b>Message:</b> ${contact.message}</p>
    `
  };

  await transporter.sendMail(mailOptions);
};

module.exports = sendEmail;
