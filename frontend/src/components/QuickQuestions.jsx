import "../styles/QuickQuestions.css";

const questions = [
  "Tell me about yourself",
  "What are your technical skills?",
  "Explain your best project",
  "Why should we hire you?",
  "What is your CGPA?",
  "Share your GitHub and LinkedIn",
];

function QuickQuestions({ onSelect }) {
  return (
    <div className="quick-questions">
      <p className="quick-title">Quick questions to get started 👇</p>
      <div className="quick-buttons">
        {questions.map((q, index) => (
          <button key={index} className="quick-btn" onClick={() => onSelect(q)}>
            {q}
          </button>
        ))}
      </div>
    </div>
  );
}

export default QuickQuestions;
