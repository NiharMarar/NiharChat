import ChatBubble from "../components/ChatBubble";

export default function Skills() {
  return (
    <div className="flex flex-col gap-4 max-w-2xl mx-auto mt-8">
      <ChatBubble
        sender="user"
        message={<>What programming languages and tools does Nihar know?</>}
      />
      <ChatBubble
        sender="system"
        message={
          <>
            <span className="font-bold">Programming Languages & Libraries</span>
            <ul className="list-disc ml-6 mt-2 text-sm">
              <li>Python, Java, JavaScript, TypeScript, SQL, C, C++, C#, Gradio</li>
              <li>NumPy, Pandas, OpenGL, React</li>
            </ul>
            <span className="font-bold block mt-4">Software & Tools</span>
            <ul className="list-disc ml-6 mt-2 text-sm">
              <li>AWS (SageMaker, S3)</li>
              <li>MATLAB, Microsoft Excel</li>
              <li>MIPS Assembly, Godot (GDScript)</li>
            </ul>
          </>
        }
      />
    </div>
  );
} 