import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, number, propertyType, area, interiorType } = req.body;

    // Validate the input
    if (!name || !number || !propertyType || !area || !interiorType) {
      return res.status(400).json({ error: 'All fields are required.' });
    }

    // Validate the number field for 10 digits and numeric only
    const numberRegex = /^\d{10}$/;
    if (!numberRegex.test(number)) {
      return res.status(400).json({ message: 'Please enter valid Contact No' });
    }

    // Simulate saving to a database (replace with actual DB logic)
    console.log('Form Data Received:', { name, number, propertyType, area, interiorType });

    // Send email with form data
    try {
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
        subject: 'New Contact Form Submission',
        text: `You have a new contact form submission from ${name}
        Name: ${name}
        Contact Number: ${number}
        Property Type: ${propertyType}
        Area: ${area}
        Interior Type: ${interiorType}`,
      };

      await transporter.sendMail(mailOptions);

      // Respond with success
      return res.status(200).json({ message: 'Form submitted successfully!' });
    } catch {
      return res.status(500).json({ message: 'Failed to submit form. Please try again later.' });
    }
  } else {
    // Handle unsupported HTTP methods
    res.setHeader('Allow', ['POST']);
    return res.status(405).json({ error: `Method ${req.method} not allowed.` });
  }
}