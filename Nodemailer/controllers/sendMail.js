const nodemailer = require("nodemailer");

const sendMail = async(req, res)=>{
    let testAccount = await nodemailer.createTestAccount();

    // connect with the smtp
    const transporter  = nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        secure: false,
        auth: {
          // TODO: replace `user` and `pass` values from <https://forwardemail.net>
        user: 'abagail.keebler@ethereal.email',
        pass: 'QpnRxveM1tTUFHXkY2',
        },
      })

      const info = await transporter.sendMail({
        from: '"sahil sardar 👻" <sahil@gmail.com>', // sender address
        to: "sardarsahilsiddharth@gmail.com", // list of receivers
        subject: "Hello ✔", // Subject line
        text: "Hello world?", // plain text body
        html: "<b>Hello world?</b>", // html body
      })

    console.log("Message sent: %s", info.messageId);
    res.json(info);

}

module.exports = sendMail;