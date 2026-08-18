const Groq = require("groq-sdk");
require("dotenv").config();

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

async function checkActiveModels() {
  try {
    const models = await groq.models.list();
    console.log("=== YOUR ACCOUNT ACTIVE GROQ MODELS ===");
    models.data.forEach((m) => console.log("- ", m.id));
  } catch (err) {
    console.error("Error fetching models:", err.message);
  }
}

checkActiveModels();