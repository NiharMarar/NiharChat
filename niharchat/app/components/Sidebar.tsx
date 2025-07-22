"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const sidebarLinks = [
  { href: "/", label: "About", icon: "👋" },
  { href: "/experience", label: "Experience", icon: "💼" },
  { href: "/projects", label: "Projects", icon: "🚀" },
  { href: "/coursework", label: "Coursework", icon: "📚" },
  { href: "/skills", label: "Skills", icon: "⚡" },
  { href: "/testimonials", label: "Testimonials", icon: "💬" },
  { href: "/blog", label: "Blog", icon: "✍️" },
  { href: "/contact", label: "Contact", icon: "📧" },
];

export default function Sidebar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Mobile Hamburger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 bg-[#202123] text-white p-2 rounded-lg shadow-lg"
        aria-label="Toggle menu"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black/50 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={`
        fixed lg:relative z-40
        w-64 bg-[#202123] text-white flex flex-col p-4 border-r border-[#23272f] 
        min-h-screen rounded-r-2xl shadow-lg
        transform transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-xl font-bold text-white">NiharChat</h1>
          <p className="text-sm text-gray-400">Portfolio & AI Assistant</p>
        </div>

        {/* Navigation Links */}
        <nav className="flex-1">
          <ul className="space-y-1">
            {sidebarLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)} // Close mobile menu when link clicked
                    className={`flex items-center space-x-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 group ${
                      isActive
                        ? "bg-[#343541] text-white shadow-sm"
                        : "text-gray-300 hover:bg-[#2a2b32] hover:text-white"
                    }`}
                  >
                    <span className="text-lg">{link.icon}</span>
                    <span>{link.label}</span>
                    {isActive && (
                      <div className="ml-auto w-1 h-1 bg-blue-500 rounded-full"></div>
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Footer */}
        <div className="mt-auto pt-4 border-t border-[#23272f]">
          <div className="flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-[#2a2b32] transition-colors duration-200 cursor-pointer group">
            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
              N
            </div>
            <div className="flex-1">
              <div className="text-sm font-medium text-white">Nihar Marar</div>
              <div className="text-xs text-gray-400">Portfolio</div>
            </div>
            <svg className="w-4 h-4 text-gray-400 group-hover:text-gray-300 transition-colors" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </div>
        </div>
      </aside>
    </>
  );
} 