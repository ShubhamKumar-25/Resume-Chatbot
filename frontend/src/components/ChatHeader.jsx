import "../styles/ChatHeader.css";

function ChatHeader() {
  return (
    <div className="chat-header">
      <div className="chat-header-left">
        <div className="avatar">
          <span>SK</span>
          <span className="online-dot"></span>
        </div>
        <div className="header-info">
          <h2>Shubham Kumar</h2>
          <p>Full Stack MERN Developer • Online</p>
        </div>
      </div>

      <a
        href="/resume (1).pdf"
        download="Shubham_Kumar_Resume.pdf"
        className="resume-btn"
        title="Download Resume"
      >
        📄 Resume
      </a>
    </div>
  );
}

export default ChatHeader;
