
import React, { useEffect, useState } from "react";
import ChatbotIcon from "../components/chatbotIcon.jsx/ChatbotIcon.jsx";
import ChatForm from "../components/chatbotIcon.jsx/ChatForm.jsx";
import ChatMessage  from "../components/chatbotIcon.jsx/ChatMessage.jsx";
import { companyInfo } from "../components/chatbotIcon.jsx/companyInfo.js";
import { useRef } from "react";
const ChatBot = () => {

     const chatBodyRef = useRef();
      const [chatHistory,setChatHistory] = useState([{
        hideInChat:true,
        role:"model",
        text: companyInfo
      }])
      const [showChatbot,setShowChatbot] = useState(false)
      const generateBotResponse = async (history) => {
       
       const updateHistory =(text , isError = false)=>{
        setChatHistory(prev => [...prev.filter(msg=>msg.text !== "Thinking..."),{role:"model",text}])
       }
      
        history = history.map(({ role, text }) => ({ role, parts: [{ text }] }));
      
        const requestOptions = {
          method: "POST",
          headers: { "Content-Type": "application/json" }, // Fixed typo
          body: JSON.stringify({ contents: history }),
        };
      
        try {
          
          const response = await fetch(import.meta.env.VITE_API_URL, requestOptions);
      
        
          const text = await response.text();
          const data = text ? JSON.parse(text) : {};
      
          if (!response.ok) throw new Error(data?.error?.message || "Something went wrong");
      
        
         const apiResponseText = data.candidates[0].content.parts[0].text.replace(/\*\*(.*?)\*\*/g,"$1").trim(); 
         updateHistory(apiResponseText);
        } catch (error) {
          updateHistory(error.message, true);
        }

       
        

      };
      



useEffect(()=>{
  // Auto-scroll whenever chat history updates
  if (chatBodyRef.current) {
    chatBodyRef.current.scrollTo({ top: chatBodyRef.current.scrollHeight, behavior: "smooth" });
  }
}, [chatHistory]);


  return (
    <div className={`container ${showChatbot ? "show-chatbot":""}`}>
      <button onClick={()=> setShowChatbot(prev => !prev)} id="chatbot-toggler">
        <span class="material-symbols-rounded">mode_comment</span>
        <span class="material-symbols-rounded">close</span>
      </button>
      <div className="chatbot-popup">
        {/*chatbot header */}
        <div className="chat-header">
          <div className="header-info">
            <ChatbotIcon />
            <h2 className="logo-text">Chatbot</h2>
          </div>
          <button onClick={()=> setShowChatbot(prev => !prev)} class="material-symbols-rounded">keyboard_arrow_down</button>
        </div>

        {/*chatbot body */}
        <div ref={chatBodyRef} className="chat-body">
          <div className="message bot-message">
            <ChatbotIcon />
            <p className="message-text">
              Hey There 👋 <br /> How are you Today
            </p>
          </div>
          

         

          {/* render chat history dynamically  */}
         {chatHistory.map((chat,index) => (
          <ChatMessage key={index} chat={chat}/>
         ))}


         
        </div>

        
        {/*chatbot footer */}
        <div className="chat-footer">
          <ChatForm chatHistory={chatHistory} setChatHistory={setChatHistory} generateBotResponse={generateBotResponse}/>
        </div>
      </div>
    </div>
  );
};

export default ChatBot;  
