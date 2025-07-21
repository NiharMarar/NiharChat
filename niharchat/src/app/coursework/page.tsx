import ChatBubble from "../components/ChatBubble";

export default function Coursework() {
  return (
    <div className="flex flex-col gap-4 max-w-2xl mx-auto mt-8">
      <ChatBubble
        sender="user"
        message={<>What relevant coursework has Nihar completed?</>}
      />
      <ChatBubble
        sender="system"
        message={
          <>
            <span className="font-bold">Master of Computer Science (UC Irvine)</span> — In Progress
            <ul className="list-disc ml-6 mt-2 text-sm">
              <li>Advanced Machine Learning</li>
              <li>Full Stack Web Development</li>
              <li>Software Engineering</li>
              <li>Database Systems</li>
              <li>Algorithm Design and Analysis</li>
            </ul>
            <span className="font-bold block mt-4">B.S. Computer Science & Engineering (UC Merced)</span>
            <ul className="list-disc ml-6 mt-2 text-sm">
              <li>Data Structures</li>
              <li>Operating Systems</li>
              <li>Computer Graphics</li>
              <li>Statistics</li>
              <li>Cognitive Engineering</li>
              <li>Linear Algebra, Calculus 1-3</li>
            </ul>
            <span className="font-bold block mt-4">Yonsei University, Seoul</span>
            <ul className="list-disc ml-6 mt-2 text-sm">
              <li>Computer Networks</li>
              <li>Human Computer Interaction</li>
            </ul>
          </>
        }
      />
    </div>
  );
} 