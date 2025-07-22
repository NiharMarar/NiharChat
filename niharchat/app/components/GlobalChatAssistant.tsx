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
        className="fixed z-50 bottom-4 right-4 lg:bottom-6 lg:right-6 bg-blue-500 hover:bg-blue-600 text-white rounded-full shadow-lg w-14 h-14 lg:w-16 lg:h-16 flex items-center justify-center text-2xl lg:text-3xl font-bold focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-200 hover:scale-105"
        aria-label="Open AI Chat Assistant"
      >
        💬
      </button>

      {/* Modal Chat Window */}
      {open && (
        <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/50 backdrop-blur-sm p-2 lg:p-4">
          <div className="relative w-full max-w-4xl mx-auto bg-[#343541] border border-[#565869] flex flex-col h-[90vh] lg:h-[700px] rounded-t-xl lg:rounded-xl shadow-2xl">
            {/* Header */}
            <div className="flex items-center justify-between bg-[#202123] px-4 lg:px-6 py-3 lg:py-4 border-b border-[#565869] rounded-t-xl">
              <div className="flex items-center space-x-3">
                <div className="w-7 h-7 lg:w-8 lg:h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xs lg:text-sm">
                  AI
                </div>
                <div>
                  <h3 className="font-semibold text-white text-sm lg:text-base">AI Assistant</h3>
                  <p className="text-xs text-gray-400 hidden sm:block">Ask me anything about Nihar</p>
                </div>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="text-gray-400 hover:text-white text-xl lg:text-2xl font-bold px-2 py-1 rounded hover:bg-[#343541] transition-colors duration-200"
                aria-label="Close AI Chat Assistant"
              >
                ×
              </button>
            </div>

            {/* Chat Content */}
            <div className="flex-1 overflow-hidden">
              <ChatAssistant />
            </div>
          </div>
        </div>
      )}
    </>
  );
} 