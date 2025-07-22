import ChatBubble from "../components/ChatBubble";

export default function Testimonials() {
  return (
    <div className="flex flex-col gap-4 max-w-2xl mx-auto mt-8">
      <ChatBubble
        sender="user"
        message={<>What do people say about Nihar?</>}
      />
      <ChatBubble
        sender="system"
        message={
          <>
            <span className="italic">"Nihar is a quick learner and a fantastic team player. He brought innovative solutions to our toughest problems."</span>
            <div className="text-right mt-2 text-xs text-gray-400">— Placeholder, Colleague</div>
          </>
        }
      />
      <ChatBubble
        sender="system"
        message={
          <>
            <span className="italic">"His passion for teaching and mentoring is unmatched. Students love his energy and clarity!"</span>
            <div className="text-right mt-2 text-xs text-gray-400">— Placeholder, Student</div>
          </>
        }
      />
      <ChatBubble
        sender="system"
        message={
          <>
            <span className="italic">"Nihar's technical depth and creativity made a real impact on our project."</span>
            <div className="text-right mt-2 text-xs text-gray-400">— Placeholder, Supervisor</div>
          </>
        }
      />
    </div>
  );
} 