"use client";
import { useState, useRef, useEffect } from "react";
import ChatBubble from "./ChatBubble";

interface Message {
  sender: "user" | "ai";
  text: string;
}

export default function ChatAssistant() {
  const [messages, setMessages] = useState<Message[]>([
    { sender: "ai", text: "Hi! I'm your AI assistant. Ask me anything about Nihar or this site!" },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  async function handleSend(e: React.FormEvent) {
    e.preventDefault();
    if (!input.trim() || loading) return;
    const userMsg = { sender: "user" as const, text: input };
    setMessages(prev => [...prev, userMsg]);
    setInput("");
    setLoading(true);
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input }),
      });
      const data = await res.json();
      if (res.ok) {
        setMessages(prev => [...prev, { sender: "ai", text: data.message }]);
      } else {
        setMessages(prev => [...prev, { sender: "ai", text: "Sorry, there was an error: " + (data.error || "Unknown error.") }]);
      }
    } catch (err) {
      setMessages(prev => [...prev, { sender: "ai", text: "Sorry, there was a network error." }]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex flex-col h-[500px] max-w-xl mx-auto bg-[#23272f] rounded-xl shadow-lg overflow-hidden">
      <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-2">
        {messages.map((msg, i) => (
          <ChatBubble
            key={i}
            sender={msg.sender === "ai" ? "system" : "user"}
            message={msg.text}
          />
        ))}
        {loading && (
          <ChatBubble sender="system" message={<span className="italic text-gray-400">Thinking...</span>} />
        )}
        <div ref={messagesEndRef} />
      </div>
      <form onSubmit={handleSend} className="flex gap-2 p-4 bg-[#343541]">
        <input
          className="flex-1 rounded px-4 py-2 bg-[#23272f] text-white border border-[#444] focus:outline-none"
          type="text"
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="Type your question..."
          disabled={loading}
        />
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded font-semibold disabled:opacity-60"
          disabled={loading}
        >
          {loading ? "..." : "Send"}
        </button>
      </form>
    </div>
  );
} 