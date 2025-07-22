import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import GlobalChatAssistant from "./components/GlobalChatAssistant";
import Sidebar from "./components/Sidebar";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "Nihar Marar | Portfolio",
  description: "Nihar Marar's ChatGPT-style portfolio: experience, projects, skills, blog, and more.",
  metadataBase: new URL("https://niharchat.vercel.app"),
  openGraph: {
    title: "Nihar Marar | Portfolio",
    description: "Nihar Marar's ChatGPT-style portfolio: experience, projects, skills, blog, and more.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nihar Marar | Portfolio",
    description: "Nihar Marar's ChatGPT-style portfolio: experience, projects, skills, blog, and more.",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <head />
      <body className="antialiased bg-[#13151a]">
        <div className="flex min-h-screen">
          <Sidebar />
          <main className="flex-1 p-4 lg:p-8 overflow-y-auto bg-[#1a1d23] min-h-screen lg:ml-0">
            {children}
          </main>
        </div>
        <GlobalChatAssistant />
      </body>
    </html>
  );
}
