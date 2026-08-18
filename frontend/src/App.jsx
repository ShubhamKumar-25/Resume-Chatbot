import { useState } from "react";
import axios from "axios";
import ChatHeader from "./components/ChatHeader";
import ChatWindow from "./components/ChatWindow";
import ChatInput from "./components/ChatInput";
import "./styles/App.css";

// Path ke sath full URL setup karein
const API_URL = "https://resume-chatbot-5bsr.onrender.com/api/chat";
// const API_URL = "http://localhost:5000/api/chat";

// Text-to-Speech helper
function speakText(text) {
  if (!window.speechSynthesis) return;
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "en-IN";
  utterance.rate = 1;
  utterance.pitch = 1;
  window.speechSynthesis.speak(utterance);
}

function App() {
  const [messages, setMessages] = useState([]);
  const [isTyping, setIsTyping] = useState(false);

  // Message bhejne ka main function (typing ya quick-question dono se yahi call hoga)
  const sendMessage = async (text) => {
    // 1. User ka message turant UI me add karo
    const userMessage = { sender: "user", text };
    setMessages((prev) => [...prev, userMessage]);

    // 2. "typing..." indicator on karo
    setIsTyping(true);

    try {
      // 3. Backend ko call karo
      const response = await axios.post(API_URL, { message: text });
      const botReply = response.data.reply;

      // 4. Bot ka reply add karo
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: botReply, isNew: true },
      ]);

      // 5. Reply ko awaaz me bhi bol do
      speakText(botReply);
    } catch (error) {
      console.error("Error fetching response:", error);
      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          text: "Sorry, something went wrong. Please try again later.",
        },
      ]);
    } finally {
      // 6. Typing indicator band karo (success ho ya error)
      setIsTyping(false);
    }
  };

  return (
    <div className="app-container">
      <div className="chat-card">
        <ChatHeader />

        <ChatWindow
          messages={messages}
          isTyping={isTyping}
          onQuickSelect={sendMessage}
        />

        <ChatInput onSend={sendMessage} disabled={isTyping} />
      </div>
    </div>
  );
}

export default App;
