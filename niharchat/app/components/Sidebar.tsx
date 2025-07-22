"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const sidebarLinks = [
  { href: "/", label: "About" },
  { href: "/experience", label: "Experience" },
  { href: "/projects", label: "Projects" },
  { href: "/coursework", label: "Coursework" },
  { href: "/skills", label: "Skills" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function Sidebar() {
  const pathname = usePathname();
  return (
    <aside className="w-64 bg-[#202123] text-white flex flex-col p-4 border-r border-[#23272f] min-h-screen rounded-r-2xl shadow-lg">
      <div className="text-2xl font-bold mb-8 tracking-tight px-2">NiharChat</div>
      <nav className="flex flex-col gap-1">
        {sidebarLinks.map(link => {
          const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`flex items-center gap-2 py-2 px-4 rounded-lg transition-all font-medium
                ${isActive ? "bg-[#353740] border-l-4 border-blue-500 text-white" : "hover:bg-[#353740] hover:text-blue-400 border-l-4 border-transparent text-gray-200"}
              `}
            >
              {link.label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
} 