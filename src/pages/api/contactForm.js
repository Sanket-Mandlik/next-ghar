export const runtime = 'nodejs';
import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, number, propertyType, interiorBudget, startDate } = req.body;
  if (
    !name?.trim() ||
    !number?.trim() ||
    !propertyType?.trim() ||
    !interiorBudget?.trim() ||
    !startDate?.trim()
  ) {
    return res.status(400).json({ error: 'All fields are required.' });
  }

  const mobileNumberRegex = /^\d{10}$/;
  if (!mobileNumberRegex.test(number)) {
    return res.status(200).json({ message: 'Please enter valid Contact No.' });
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.RECEIVER_EMAIL,
    subject: `New Contact Form Submission From ${name}`,
    text: `
      Name: ${name}
      Number: ${number}
      Property Type: ${propertyType}
      Interior Budget: ${interiorBudget}
      Start Date: ${startDate}
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return res.status(200).json({ message: 'Form submitted successfully' });
  } catch (error) {
    console.error('Email error:', error);
    return res.status(500).json({ error: 'Email failed to send' });
  }
}