export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Only POST method allowed" });
  }

  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  console.log("📩 New Contact Form Message:");
  console.log("Name:", name);
  console.log("Email:", email);
  console.log("Message:", message);

  return res.status(200).json({ success: true, message: "Message received successfully!" });
}
