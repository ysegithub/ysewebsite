// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import nodemailer from "nodemailer";
export default function handler(req, res) {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_EMAIL_ADDRESS,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
    secure: false,
    authMethod: "PLAIN",
    tls: {
      rejectUnauthorized: false,
    },
  });

  const mailData = {
    from: process.env.GMAIL_EMAIL_ADDRESS,
    to: ["fatimajubary@gmail.com"],
    subject: `Message From ${req.body.personName}`,
    // text: `${req.body.companyName}`,
    html: `
    <p> 
    <span>اسم الشركة: </span>
    <h3>${req.body.companyName}</h3>
    `,
  };

  transporter.sendMail(mailData, (err, info) => {
    if (err) {
      console.log("Error: ", err);
      res.status(500).json({ error: "Error sending message" });
      return;
    }
    console.log(`Message delivered to ${info.accepted}`);
    res.status(200).json({ message: "Message sent" });
  });

}
