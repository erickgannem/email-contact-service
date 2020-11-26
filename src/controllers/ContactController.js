import nodemailer from 'nodemailer';

class ContactController {
  async send(req, res) {
    const { EMAIL_USER, EMAIL_PASS }  = process.env;
    const auth = {
      user: EMAIL_USER,
      pass: EMAIL_PASS
    }
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth
    })
    try {
      const { name, email, message }  = req.body;
      if(!name || !email || !message) {
        throw new Error("Please fill all the fields")
      }

      const info = await transporter.sendMail({
        from: `contact@${EMAIL_USER} <${EMAIL_USER}>`,
        to: EMAIL_USER,
        subject: `${EMAIL_USER.split('@')[0]} - from: ${email}`,
        text: message,
        html: `
          <div>
            <h3>Reply to: ${name} [${email}]</h3> 
            <p>${message}</p>
          </div>
        `
      });
      return res.status(200).json(nodemailer.getTestMessageUrl(info));
    } catch(err) {
      process.stdout.write("\n" + err.message);
      return res.status(400).json({
        error: {
          message: err.message
        }
      })
    }
  }
}

export default new ContactController();