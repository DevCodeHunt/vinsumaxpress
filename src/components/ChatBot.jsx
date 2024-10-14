import { MessageSquare } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";

const ChatBot = () => {
  const buttonRef = useRef(null);
  const chatbotRef = useRef(null);

  const [show, setShow] = useState("");

  const handleClickOutside = (event) => {
    if (
      chatbotRef.current &&
      !chatbotRef.current.contains(event.target) &&
      !buttonRef.current.contains(event.target)
    ) {
      setShow(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  const toggleChatbot = useCallback(() => setShow((prev) => !prev), []);

  return (
    <div className="fixed bottom-4 right-4 z-[100]">
      <button
        onClick={toggleChatbot}
        ref={buttonRef}
        className="w-[52px] h-[52px] rounded-full flex items-center justify-center bg-primary/90 text-white hover:drop-shadow-xl hover:shadow-xl transition-all duration-300 ease-in-out cursor-pointer"
      >
        <MessageSquare size={26} />
      </button>

      <div
        ref={chatbotRef}
        className={`min-h-40 absolute bottom-14 rounded-xl w-[300px] sm:right-0  -right-4 p-4 bg-white shadow drop-shadow-xl ${
          show ? "opacity-100" : "opacity-0"
        }  transition-all duration-300`}
      >
        Here Chat bot option go there...
      </div>
    </div>
  );
};

export default ChatBot;
