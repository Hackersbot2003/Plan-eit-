import React, { useEffect, useState, useRef } from "react";
import ChatbotIcon from "../components/ChatbotIcon/ChatbotIcon.jsx";
import ChatForm from "../components/ChatbotIcon/ChatForm.jsx";
import ChatMessage from "../components/ChatbotIcon/ChatMessage.jsx";
import { companyInfo } from "../components/ChatbotIcon/companyInfo.js";

const ChatBot = () => {
  const chatBodyRef = useRef();
  const [chatHistory, setChatHistory] = useState([
    {
      hideInChat: true,
      role: "model",
      text: companyInfo,
    },
  ]);
  const [showChatbot, setShowChatbot] = useState(false);

  const generateBotResponse = async (history) => {
    const updateHistory = (text, isError = false) => {
      setChatHistory((prev) => [
        ...prev.filter((msg) => msg.text !== "Thinking..."),
        { role: "model", text },
      ]);
    };

    history = history.map(({ role, text }) => ({ role, parts: [{ text }] }));

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ contents: history }),
    };

    try {
      const response = await fetch(import.meta.env.VITE_API_URL, requestOptions);
      const text = await response.text();
      const data = text ? JSON.parse(text) : {};

      if (!response.ok) throw new Error(data?.error?.message || "Something went wrong");

      const apiResponseText = data.candidates[0].content.parts[0].text.replace(/\*\*(.*?)\*\*/g, "$1").trim();
      updateHistory(apiResponseText);
    } catch (error) {
      updateHistory(error.message, true);
    }
  };

  useEffect(() => {
    if (chatBodyRef.current) {
      chatBodyRef.current.scrollTo({ top: chatBodyRef.current.scrollHeight, behavior: "smooth" });
    }
  }, [chatHistory]);

  return (
    <div className={`container ${showChatbot ? "show-chatbot" : ""}`}>
      {/* Chatbot Toggler Button */}
      <button
        onClick={() => setShowChatbot((prev) => !prev)}
        id="chatbot-toggler"
        className="fixed bottom-8 right-8 h-12 w-12 flex items-center justify-center rounded-full bg-[#6d4fc2] cursor-pointer transition-all duration-200 ease-in-out z-50"
      >
        <span className="material-symbols-rounded text-white">mode_comment</span>
        <span className="material-symbols-rounded text-white">close</span>
      </button>

      {/* Chatbot Popup */}
      <div
        className={`chatbot-popup fixed bottom-24 right-8 w-[420px] bg-white rounded-lg shadow-lg transition-all duration-200 ease-in-out ${
          showChatbot ? "opacity-100 scale-100 pointer-events-auto" : "opacity-0 scale-50 pointer-events-none"
        } z-40`}
      >
        {/* Chatbot Header */}
        <div className="chat-header flex items-center justify-between p-4 bg-[#6d4fc2]">
          <div className="header-info flex items-center gap-2">
            <ChatbotIcon />
            <h2 className="logo-text text-white text-xl font-semibold">Chatbot</h2>
          </div>
          <button
            onClick={() => setShowChatbot((prev) => !prev)}
            className="material-symbols-rounded text-white text-2xl p-1 rounded-full hover:bg-[#593bab] transition-colors duration-200 ease-in-out"
          >
            keyboard_arrow_down
          </button>
        </div>

        {/* Chatbot Body */}
        <div
          ref={chatBodyRef}
          className="chat-body h-[460px] overflow-y-auto p-6 flex flex-col gap-5"
        >
          <div className="message bot-message flex items-center gap-3">
            <ChatbotIcon />
            <p className="message-text bg-[#f6f2ff] rounded-lg rounded-bl-none p-3 max-w-[75%]">
              Hey There 👋 <br /> How are you Today
            </p>
          </div>

          {/* Render Chat History Dynamically */}
          {chatHistory.map((chat, index) => (
            <ChatMessage key={index} chat={chat} />
          ))}
        </div>

        {/* Chatbot Footer */}
        <div className="chat-footer absolute bottom-0 w-full bg-white p-5">
          <ChatForm
            chatHistory={chatHistory}
            setChatHistory={setChatHistory}
            generateBotResponse={generateBotResponse}
          />
        </div>
      </div>
    </div>
  );
};

export default ChatBot;