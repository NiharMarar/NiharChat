import ChatBubble from "../components/ChatBubble";

export default function Blog() {
  return (
    <div className="flex flex-col gap-4 max-w-2xl mx-auto mt-8">
      <ChatBubble
        sender="user"
        message={<>Does Nihar write about tech?</>}
      />
      <ChatBubble
        sender="system"
        message={
          <>
            Absolutely! Here are some sample blog posts. More coming soon!
          </>
        }
      />
      <ChatBubble
        sender="system"
        message={
          <>
            <span className="font-bold">How I Built a ChatGPT-Style Portfolio</span>
            <div className="text-sm text-gray-200 mt-1">July 2024</div>
            <div className="mt-2">A behind-the-scenes look at designing and developing this interactive, AI-inspired portfolio using Next.js and Tailwind CSS.</div>
          </>
        }
      />
      <ChatBubble
        sender="system"
        message={
          <>
            <span className="font-bold">Lessons from Teaching Code to Kids</span>
            <div className="text-sm text-gray-200 mt-1">May 2024</div>
            <div className="mt-2">Reflections on my experience as a Code Instructor, and what teaching young students taught me about learning, patience, and creativity.</div>
          </>
        }
      />
    </div>
  );
} 