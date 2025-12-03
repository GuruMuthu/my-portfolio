import emailjs from "emailjs-com";
import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_5m5abc",
        "template_1xyz89",
        e.target,
        "GkWm8pAbcDf123"
      )
      .then(
        () => {
          setStatus("Message sent successfully!");
        },
        (error) => {
          console.log(error.text);
          setStatus("Failed to send message");
        }
      );
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
