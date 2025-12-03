import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      message: e.target.message.value,
    };

    // 👉 This is where you paste the fetch code
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const result = await response.json();
    setStatus(result.message);
  };

  return (
    <form className="bg-gray-800 p-6 rounded-lg space-y-4" onSubmit={handleSubmit}>
      <input
        name="name"
        required
        className="w-full p-3 rounded bg-gray-900 border border-gray-700"
        placeholder="Your Name"
      />

      <input
        name="email"
        type="email"
        required
        className="w-full p-3 rounded bg-gray-900 border border-gray-700"
        placeholder="Your Email"
      />

      <textarea
        name="message"
        required
        rows="4"
        className="w-full p-3 rounded bg-gray-900 border border-gray-700"
        placeholder="Message"
      />

      <button className="bg-cyan-500 px-4 py-2 rounded hover:bg-cyan-600 transition">
        Send Message
      </button>

      {status && <p className="text-green-400 mt-2">{status}</p>}
    </form>
  );
}
