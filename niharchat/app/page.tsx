import ChatBubble from "./components/ChatBubble";
import ChatAssistant from "./components/ChatAssistant";

export default function Home() {
  return (
    <div className="flex flex-col gap-6 lg:gap-8 max-w-2xl mx-auto mt-4 lg:mt-8">
      <a 
        href="/NiharMarar_Resume.pdf" 
        download 
        className="inline-block self-end mb-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 lg:px-6 py-2 rounded shadow transition text-sm lg:text-base"
      >
        Download Resume
      </a>
      
      <div className="relative h-[500px] lg:h-[600px] flex flex-col bg-[#23272f] rounded-xl shadow overflow-hidden">
        <div className="flex-1 overflow-y-auto p-4 lg:p-6 flex flex-col gap-3 lg:gap-4">
          <ChatBubble 
            sender="system" 
            message={
              <>
                👋 Hi there! Welcome to <span className="font-bold">NiharChat</span> — the interactive portfolio of Nihar Marar.
              </>
            } 
          />
          
          <ChatBubble 
            sender="user" 
            message={<>Who is Nihar Marar?</>} 
          />
          
          <ChatBubble 
            sender="system" 
            message={
              <>
                <span className="font-bold">Nihar Marar</span> is a passionate software engineer and AI enthusiast, currently pursuing a Master of Computer Science at UC Irvine. He has a strong background in full stack development, machine learning, and teaching, with experience at X10e, Avitam Consulting, and Code Ninjas.
                <br className="hidden sm:inline" />
                <span className="block mt-2">Feel free to explore my experience, projects, skills, and more using the sidebar!</span>
              </>
            } 
          />
          
          <ChatBubble 
            sender="user" 
            message={<>Where did Nihar study?</>} 
          />
          
          <ChatBubble 
            sender="system" 
            message={
              <div>
                <h2 className="text-lg lg:text-xl font-bold mb-2">Education</h2>
                <div className="space-y-2">
                  <div className="bg-[#2a2b32] p-3 rounded-lg">
                    <h3 className="font-semibold text-blue-400">Master of Computer Science</h3>
                    <p className="text-sm text-gray-300">University of California, Irvine</p>
                    <p className="text-xs text-gray-400">2023 - Present</p>
                  </div>
                  <div className="bg-[#2a2b32] p-3 rounded-lg">
                    <h3 className="font-semibold text-blue-400">Bachelor of Science in Computer Science</h3>
                    <p className="text-sm text-gray-300">University of California, Irvine</p>
                    <p className="text-xs text-gray-400">2019 - 2023</p>
                  </div>
                </div>
              </div>
            } 
          />
          
          <ChatBubble 
            sender="user" 
            message={<>Tell me a fun fact about you!</>} 
          />
          
          <ChatBubble 
            sender="system" 
            message={
              <>
                I once engineered an eye-tracking solution to analyze user reading behavior and built a multi-threaded boat simulation for OS concurrency! 🚤👀
              </>
            } 
          />
        </div>
      </div>
      <div>
        <h2 className="text-lg font-semibold text-center text-gray-300 mb-2">Try the AI Assistant</h2>
        <ChatAssistant />
      </div>
    </div>
  );
}
