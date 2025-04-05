export default function handler(req, res) {
  if (req.method === 'POST') {
    const { name, number, propertyType, area, interiorType } = req.body;
    debugger;
    // Validate the input
    if (!name || !number || !propertyType || !area || !interiorType) {
      return res.status(400).json({ error: 'All fields are required.' });
    }
    
    // Validate the number field for 10 digits and numeric only
    const numberRegex = /^\d{10}$/;
    if (!numberRegex.test(number)) {
      return res.status(400).json({ error: 'Please enter valid Contact No' });
    }

    // Simulate saving to a database (replace with actual DB logic)
    console.log('Form Data Received:', { name, number, propertyType, area, interiorType });

    // Respond with success
    return res.status(200).json({ message: 'Form submitted successfully!' });
  } else {
    // Handle unsupported HTTP methods
    res.setHeader('Allow', ['POST']);
    return res.status(405).json({ error: `Method ${req.method} not allowed.` });
  }
}