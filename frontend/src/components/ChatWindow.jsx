// import { useEffect, useRef } from "react";
// import MessageBubble from "./MessageBubble";
// import "../styles/ChatWindow.css";

// function ChatWindow({ messages, isTyping }) {
//   const bottomRef = useRef(null);

//   useEffect(() => {
//     bottomRef.current?.scrollIntoView({ behavior: "smooth" });
//   }, [messages, isTyping]);

//   // Sabse aakhri bot message ka index nikalo
//   const lastBotIndex = messages.map((m) => m.sender).lastIndexOf("bot");

//   return (
//     <div className="chat-window">
//       {messages.map((msg, index) => (
//         <MessageBubble
//           key={index}
//           sender={msg.sender}
//           text={msg.text}
//           animate={msg.sender === "bot" && index === lastBotIndex && msg.isNew}
//         />
//       ))}

//       {isTyping && (
//         <div className="message-row bot-row">
//           <div className="bubble-avatar">SK</div>
//           <div className="message-bubble bot-bubble typing-bubble">
//             <span className="dot"></span>
//             <span className="dot"></span>
//             <span className="dot"></span>
//           </div>
//         </div>
//       )}

//       <div ref={bottomRef}></div>
//     </div>
//   );
// }

// export default ChatWindow;

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

  return (
    <div className="chat-window">
      {messages.length === 0 && !isTyping && (
        <QuickQuestions onSelect={onQuickSelect} />
      )}

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
