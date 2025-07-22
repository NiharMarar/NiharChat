"use client";
import { useState } from "react";
import ChatAssistant from "./ChatAssistant";

export default function GlobalChatAssistant() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Floating Chat Button */}
      <button
        onClick={() => setOpen(true)}
        className="fixed z-50 bottom-6 right-6 bg-blue-500 hover:bg-blue-600 text-white rounded-full shadow-lg w-16 h-16 flex items-center justify-center text-3xl font-bold focus:outline-none focus:ring-2 focus:ring-blue-400"
        aria-label="Open AI Chat Assistant"
      >
        💬
      </button>
      {/* Modal Chat Window */}
      {open && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/40">
          <div className="relative w-full max-w-xl mx-auto sm:rounded-xl sm:shadow-2xl bg-[#23272f] p-0 flex flex-col h-[70vh] sm:h-[600px]">
            <div className="flex items-center justify-between bg-[#343541] px-4 py-3 border-b border-[#23272f]">
              <span className="font-semibold text-white">AI Assistant</span>
              <button
                onClick={() => setOpen(false)}
                className="text-white hover:text-gray-300 text-2xl font-bold px-2"
                aria-label="Close AI Chat Assistant"
              >
                ×
              </button>
            </div>
            <div className="flex-1 overflow-hidden">
              <ChatAssistant />
            </div>
          </div>
        </div>
      )}
    </>
  );
} 