import { useEffect, useRef } from "react";
import MessageBubble from "./MessageBubble";
import QuickQuestions from "./QuickQuestions";
import "../styles/ChatWindow.css";

function ChatWindow({ messages, isTyping, onQuickSelect }) {
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const lastBotIndex = messages.map((m) => m.sender).lastIndexOf("bot");
  const isEmpty = messages.length === 0 && !isTyping;

  return (
    <div className={`chat-window ${isEmpty ? "chat-window-empty" : ""}`}>
      {isEmpty && <QuickQuestions onSelect={onQuickSelect} />}

      {messages.map((msg, index) => (
        <MessageBubble
          key={index}
          sender={msg.sender}
          text={msg.text}
          animate={msg.sender === "bot" && index === lastBotIndex && msg.isNew}
        />
      ))}

      {isTyping && (
        <div className="message-row bot-row">
          <div className="bubble-avatar">SK</div>
          <div className="message-bubble bot-bubble typing-bubble">
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
          </div>
        </div>
      )}

      <div ref={bottomRef}></div>
    </div>
  );
}

export default ChatWindow;
