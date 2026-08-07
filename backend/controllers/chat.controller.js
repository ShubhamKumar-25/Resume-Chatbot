const { getChatResponse } = require("../services/groq.service");

// POST /api/chat handle karne wala controller
async function handleChat(req, res) {
  try {
    const { message } = req.body;

    // Validation: message empty na ho
    if (!message || message.trim() === "") {
      return res.status(400).json({
        success: false,
        error: "Message is required",
      });
    }

    // Service call karo jo Groq se response leke aayegi
    const reply = await getChatResponse(message);

    return res.status(200).json({
      success: true,
      reply,
    });
  } catch (error) {
    console.error("Chat Controller Error:", error.message);
    return res.status(500).json({
      success: false,
      error: "Something went wrong while generating response",
    });
  }
}

module.exports = { handleChat };