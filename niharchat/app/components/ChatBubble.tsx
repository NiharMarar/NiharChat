import React from "react";

interface ChatBubbleProps {
  message: React.ReactNode;
  sender: "system" | "user";
  className?: string;
}

export default function ChatBubble({ message, sender, className = "" }: ChatBubbleProps) {
  const isSystem = sender === "system";
  return (
    <div
      className={`max-w-[80%] px-6 py-4 rounded-xl shadow chat-bubble mb-2 ${
        isSystem
          ? "self-start bg-[#343541] text-white"
          : "self-end bg-[#ececf1] text-black"
      } ${className}`}
    >
      {message}
    </div>
  );
} 