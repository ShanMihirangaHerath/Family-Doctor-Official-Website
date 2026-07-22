const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER, 
    pass: process.env.EMAIL_PASS  
  }
});

app.post('/api/contact', async (req, res) => {
  const { firstName, lastName, email, mobile, subject, message } = req.body;

  const mailOptions = {
    from: `"${firstName} ${lastName}" <${process.env.EMAIL_USER}>`, 
    replyTo: email,
    
    to: process.env.RECEIVER_EMAIL,
    subject: `FD Website Contact: ${subject} (From: ${firstName} ${lastName})`,
    
    text: `You have a new message from the FD Website Contact Form.\n\n` +
          `Name: ${firstName} ${lastName}\n` +
          `Email: ${email}\n` +
          `Mobile: ${mobile}\n` +
          `Subject: ${subject}\n\n` +
          `Message:\n${message}\n`
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('Email sent successfully');
    res.status(200).json({ status: 'success', message: 'Email sent successfully!' });
  } catch (error) {
    console.error('Email sending error:', error);
    res.status(500).json({ status: 'error', message: 'Failed to send email.' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});