const Contact = require("../models/Contact");
const nodemailer = require("nodemailer");

const sendMessage = async (req, res) => {

  try {

    const { name, email, subject, message } = req.body;

    if (!name || !email || !subject || !message) {
      return res.status(400).json({
        message: "All fields are required"
      });
    }

    const newContact = await Contact.create({
      name,
      email,
      subject,
      message
    });

    const transporter = nodemailer.createTransport({
      service: "gmail",

      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    await transporter.sendMail({
      from: email,

      to: process.env.EMAIL_USER,

      subject: `Portfolio Contact: ${subject}`,

      html: `
      <h2>New Contact Message</h2>

      <p><strong>Name:</strong> ${name}</p>

      <p><strong>Email:</strong> ${email}</p>

      <p><strong>Subject:</strong> ${subject}</p>

      <p><strong>Message:</strong> ${message}</p>
      `
    });

    res.status(201).json({
      success: true,
      message: "Message Sent Successfully",
      data: newContact
    });

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
};

module.exports = {
  sendMessage
};