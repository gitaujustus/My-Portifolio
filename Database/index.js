const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer")
require('dotenv').config()
const app = express();
app.use(cors());
app.use(bodyParser.json());

var Name='';
var Email=''
var Message='';
app.post("/message",(req,res)=>{
     Name = req.body.Name;
     Email = req.body.Email;
     Message = req.body.Message;
    console.log(Name, Email, Message);
    // do something with the data, e.g. save it to a database
    
    let transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.EMAIL,
          pass: process.env.PASS,
        },
    });
    try {
        // Send the email using nodemailer
        const emailRes = transporter.sendMail({
          from: { name: Name , address: Email },
          to: process.env.EMAIL,
          replyTo: Email,
          subject: "Message From Your website",
          html: `
          <p>${Message}</p>
          <h4>Message From: ${Name}</h4>
        `,
        });
        console.log("message sent");
        res.send('Received the message and sent email!');
    } catch (error) {
        console.log(error);
        res.status(500).send('Failed to send email');
    }
})

app.listen(3001,(err)=>{
    if(err) console.log(err);
    else console.log('app listening to port 4000');
})
