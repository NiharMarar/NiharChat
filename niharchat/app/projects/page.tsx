import ChatBubble from "../components/ChatBubble";

export default function Projects() {
  return (
    <div className="flex flex-col gap-4 max-w-2xl mx-auto mt-8">
      <ChatBubble
        sender="user"
        message={<>Can you show me some of Nihar's projects?</>}
      />
      <ChatBubble
        sender="system"
        message={
          <>
            <span className="font-bold">Atomic Archipelago</span> — <span className="italic">OS Concurrency and Scheduling Puzzle</span>
            <ul className="list-disc ml-6 mt-2 text-sm">
              <li>Developed Java-based synchronization primitives (locks, condition variables, semaphores, communicators) to manage concurrency at the OS kernel level.</li>
              <li>Created and tested modules for alarm, condition, and communication handling, including a multi-threaded "Boat" simulation for deadlock-free operation.</li>
              <li><a href="https://github.com/NiharMarar/Atomic-Archipelago" target="_blank" rel="noopener noreferrer" className="underline text-blue-500">View on GitHub</a></li>
            </ul>
          </>
        }
      />
      <ChatBubble
        sender="system"
        message={
          <>
            <span className="font-bold">HealthSync</span> — <span className="italic">Database Application</span>
            <ul className="list-disc ml-6 mt-2 text-sm">
              <li>Implemented a hospital database management system with 7 entity sets and 3 many-to-many relationships using Python and SQL.</li>
              <li>Created a UI for patient record management, appointment scheduling, stocks, and billing.</li>
              <li><a href="https://github.com/NiharMarar/HealthSync-Database-Application" target="_blank" rel="noopener noreferrer" className="underline text-blue-500">View on GitHub</a></li>
            </ul>
          </>
        }
      />
      <ChatBubble
        sender="system"
        message={
          <>
            <span className="font-bold">Eye-Tracking Research Tool</span>
            <ul className="list-disc ml-6 mt-2 text-sm">
              <li>Developed a cost-effective eye-tracking software solution to monitor and analyze user reading behavior.</li>
              <li>Engineered a MATLAB-based PDF tracking tool for capturing and evaluating user reading patterns.</li>
            </ul>
          </>
        }
      />
    </div>
  );
} 