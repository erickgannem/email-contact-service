import nodemailer from 'nodemailer';

class ContactController {
  async send(request, response) {
    console.log(process.env)
    // const auth = {
    //   user: 'informaticasgcv@gmail.com',
    //   pass: 'InformaticaSG82B.',
    // }
    // const transporter = nodemailer.createTransport({
    //   host: 'smtp.gmail.com',
    //   port: 587,
    //   secure: false,
    //   auth
    // })
    // try {
      // const { name, email, message }  = request.body;
      // if(!name || !email || !message) {
      //   throw new Error("Please fill all the fields")
      // }
      // return response.status(200).json({
      //   name, email, message
      // })
      // const info = await transporter.sendMail({
      //   from: `Contact@InformaticaSGCV <informaticasgcv@gmail.com>`,
      //   to: `informaticasgcv@gmail.com`,
      //   subject: 'TEST NODEMAILER',
      //   text: 'TEST NODEMAILER TEXT',
      //   html: `<b>Hello World</b>`
      // });
      
      // return response.status(400).json(nodemailer.getTestMessageUrl(info));
    // } catch(err) {
    //   process.stdout.write("\n" + err.message);
    //   return response.status(400).json({
    //     error: {
    //       message: err.message
    //     }
    //   })
    // }
  }
}

export default new ContactController();