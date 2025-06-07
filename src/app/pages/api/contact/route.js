// Api Routes 

export default function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    // Simple validation
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Missing fields' });
    }

    // Here you can add email sending logic or store data somewhere
    // For demo, just log the data to console
    console.log('Contact form submission:', { name, email, message });

    return res.status(200).json({ message: 'Message received' });
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}


export async function POST(req) {
  const body = await req.json();
  console.log('Contact form data:', body);

  // Here you would handle the form (e.g., send email, save to DB)

  return new Response(JSON.stringify({ success: true }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}
