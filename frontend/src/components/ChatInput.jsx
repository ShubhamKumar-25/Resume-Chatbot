import { useState, useRef, useEffect } from "react";
import "../styles/ChatInput.css";

function ChatInput({ onSend, disabled }) {
  const [text, setText] = useState("");
  const [isListening, setIsListening] = useState(false);
  const recognitionRef = useRef(null);

  // Speech Recognition setup (ek baar hi run hoga)
  useEffect(() => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      console.warn("Speech Recognition is not supported in this browser.");
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.continuous = false; // ek baar bolna, phir apne aap ruk jaye
    recognition.interimResults = true; // bolte-bolte hi text dikhna shuru ho
    recognition.lang = "en-IN"; // Indian English accent ke liye better

    recognition.onresult = (event) => {
      let transcript = "";
      for (let i = 0; i < event.results.length; i++) {
        transcript += event.results[i][0].transcript;
      }
      setText(transcript);
    };

    recognition.onend = () => {
      setIsListening(false);
    };

    recognition.onerror = (event) => {
      console.error("Speech recognition error:", event.error);
      setIsListening(false);
    };

    recognitionRef.current = recognition;
  }, []);

  const toggleListening = () => {
    if (!recognitionRef.current) {
      alert("Voice input is not supported in this browser. Try Chrome.");
      return;
    }

    if (isListening) {
      recognitionRef.current.stop();
      setIsListening(false);
    } else {
      setText(""); // purana text clear karo
      recognitionRef.current.start();
      setIsListening(true);
    }
  };

  const handleSend = () => {
    const trimmed = text.trim();
    if (trimmed === "") return;

    onSend(trimmed);
    setText("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="chat-input-container">
      <button
        className={`mic-btn ${isListening ? "mic-active" : ""}`}
        onClick={toggleListening}
        disabled={disabled}
        type="button"
        title={isListening ? "Stop listening" : "Speak your question"}
      >
        {isListening ? "⏹" : "🎤"}
      </button>

      <textarea
        className="chat-input"
        placeholder={
          isListening ? "Listening..." : "Ask me anything about my resume..."
        }
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={handleKeyDown}
        rows={1}
        disabled={disabled}
      />

      <button
        className="send-btn"
        onClick={handleSend}
        disabled={disabled || text.trim() === ""}
      >
        ➤
      </button>
    </div>
  );
}

export default ChatInput;
