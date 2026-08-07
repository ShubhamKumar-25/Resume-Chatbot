import { useState, useEffect } from "react";
import "../styles/MessageBubble.css";

function speakText(text) {
  if (!window.speechSynthesis) return;
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "en-IN";
  utterance.rate = 1;
  utterance.pitch = 1;
  window.speechSynthesis.speak(utterance);
}

function MessageBubble({ sender, text, animate }) {
  const isUser = sender === "user";
  const [displayedText, setDisplayedText] = useState(animate ? "" : text);

  useEffect(() => {
    // Agar animate false hai (purana message), to poora text ek saath dikhao
    if (!animate) {
      setDisplayedText(text);
      return;
    }

    // Word by word reveal
    const words = text.split(" ");
    let index = 0;
    setDisplayedText("");

    const interval = setInterval(() => {
      index++;
      setDisplayedText(words.slice(0, index).join(" "));

      if (index >= words.length) {
        clearInterval(interval);
      }
    }, 60); // har word ke beech 60ms gap

    return () => clearInterval(interval);
  }, [text, animate]);

  return (
    <div className={`message-row ${isUser ? "user-row" : "bot-row"}`}>
      {!isUser && <div className="bubble-avatar">SK</div>}

      <div
        className={`message-bubble ${isUser ? "user-bubble" : "bot-bubble"}`}
      >
        <p>{displayedText}</p>

        {!isUser && (
          <button
            className="speak-btn"
            onClick={() => speakText(text)}
            title="Listen to this answer"
          >
            🔊
          </button>
        )}
      </div>
    </div>
  );
}

export default MessageBubble;
