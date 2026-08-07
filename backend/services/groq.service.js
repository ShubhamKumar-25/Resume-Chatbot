const Groq = require("groq-sdk");
const { ProfileModel } = require("../models/profile.model");

// Groq client initialize karo (API key .env se aayegi)
const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

// System prompt banane wala function
function buildSystemPrompt() {
  const profile = ProfileModel.getProfile();

  return `
You are an AI chatbot representing ${profile.personal.name}, a ${profile.personal.role}.

Here is the complete profile information you must use to answer questions:

${JSON.stringify(profile, null, 2)}

Rules you must follow:
- ${profile.chatbotRules.personality}
- ${profile.chatbotRules.responseStyle}
- ${profile.chatbotRules.restrictions.join("\n- ")}

Answer all questions from a recruiter's perspective, as if you are ${profile.personal.name} talking directly to them.
`;
}

// Groq API ko message bhejne wala function
async function getChatResponse(userMessage) {
  const systemPrompt = buildSystemPrompt();

  const response = await groq.chat.completions.create({
    model: "llama-3.3-70b-versatile",
    messages: [
      { role: "system", content: systemPrompt },
      { role: "user", content: userMessage },
    ],
    temperature: 0.7,
    max_tokens: 500,
  });

  return response.choices[0].message.content;
}

module.exports = { getChatResponse };