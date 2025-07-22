"use client";
import ChatBubble from "../components/ChatBubble";
import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const res = await fetch('https://formspree.io/f/xpwlwykj', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(form)
    });

    if (res.ok) {
      alert("Message sent! Thank you for reaching out.");
      setForm({ name: "", email: "", message: "" });
    } else {
      alert("There was an error sending your message. Please try again later.");
    }
  }

  return (
    <div className="flex flex-col gap-4 max-w-2xl mx-auto mt-8">
      <ChatBubble
        sender="user"
        message={<>How can I get in touch with Nihar?</>}
      />
      <ChatBubble
        sender="system"
        message={
          <>
            You can reach me via email at <a href="mailto:mararnihar@gmail.com" className="underline text-blue-500">mararnihar@gmail.com</a>, connect with me on <a href="https://www.linkedin.com/in/nihar-marar/" target="_blank" rel="noopener noreferrer" className="underline text-blue-500">LinkedIn</a>, or check out my <a href="https://github.com/NiharMarar" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 underline text-blue-500"><svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' className='w-5 h-5 inline'><path d='M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.339-2.221-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.987 1.029-2.687-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.7 1.028 1.594 1.028 2.687 0 3.847-2.337 4.695-4.566 4.944.359.309.678.919.678 1.852 0 1.336-.012 2.417-.012 2.747 0 .267.18.577.688.48C19.138 20.2 22 16.447 22 12.021 22 6.484 17.523 2 12 2z'/></svg>GitHub</a>.
            <span className="block mt-2">Or, use the contact form below to send me a message directly!</span>
          </>
        }
      />
      <div className="bg-white rounded-xl shadow p-6 mt-2">
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="border rounded px-4 py-2"
            value={form.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="border rounded px-4 py-2"
            value={form.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            className="border rounded px-4 py-2"
            rows={4}
            value={form.message}
            onChange={handleChange}
            required
          />
          <button
            type="submit"
            className="bg-blue-500 text-white rounded px-4 py-2 font-semibold hover:bg-blue-600 transition"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
} 