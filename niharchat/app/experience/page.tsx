import ChatBubble from "../components/ChatBubble";

export default function Experience() {
  return (
    <div className="flex flex-col gap-4 max-w-2xl mx-auto mt-8">
      <ChatBubble
        sender="user"
        message={<>Can you show me Nihar's work experience?</>}
      />
      <ChatBubble
        sender="system"
        message={
          <>
            <span className="font-bold">Machine Learning Engineer Intern</span> @ X10e (Jan 2025 – May 2025)
            <ul className="list-disc ml-6 mt-2 text-sm">
              <li>Developed an end-to-end platform for analyzing genetic (RNA) data related to Traumatic Brain Injury (TBI).</li>
              <li>Created an intuitive web interface for practitioners to explore critical genomic factors and tailor patient treatment strategies.</li>
            </ul>
          </>
        }
      />
      <ChatBubble
        sender="system"
        message={
          <>
            <span className="font-bold">Software Developer</span> @ Avitam Consulting Inc (Jan 2024 – Dec 2024)
            <ul className="list-disc ml-6 mt-2 text-sm">
              <li>Supported development and integration of internal tools for startup clients in early prototype and revenue stages.</li>
              <li>Contributed to backend development tasks for client-facing platforms using JDE, SQL, Python, and ERP-related technologies.</li>
            </ul>
          </>
        }
      />
      <ChatBubble
        sender="system"
        message={
          <>
            <span className="font-bold">Code Instructor</span> @ Code Ninjas (June 2022 – Present)
            <ul className="list-disc ml-6 mt-2 text-sm">
              <li>Teach Data Structures and Algorithms in Python, C++, C#, and JavaScript and help students develop projects.</li>
              <li>Projects range from scratch games to programming Minecraft/Roblox servers to Unity games.</li>
            </ul>
          </>
        }
      />
      <ChatBubble
        sender="system"
        message={
          <>
            <span className="font-bold">Research Assistant</span> @ UC Merced (Feb 2023 – May 2023)
            <ul className="list-disc ml-6 mt-2 text-sm">
              <li>Developed a cost-effective eye-tracking software solution to monitor and analyze user reading behavior.</li>
              <li>Implemented data analysis workflows to extract/visualize cursor positions, dwell times, and text highlighting patterns.</li>
            </ul>
          </>
        }
      />
    </div>
  );
} 