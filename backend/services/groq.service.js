
// const Groq = require("groq-sdk");
// const { ProfileModel } = require("../models/profile");

// // Groq Client Initialization
// const groq = new Groq({
//   apiKey: process.env.Groq_API_KEY,
// });

// // System Prompt Generator
// function buildSystemPrompt() {
//   const profile = ProfileModel.getProfile();

//   return `
// You are Shubham Kumar's official AI Portfolio Representative. Always answer in the FIRST PERSON ("I", "My", "Me").

// ==================================================
// PROFILE DATA (SINGLE SOURCE OF TRUTH)
// ==================================================
// ${JSON.stringify(profile, null, 2)}

// ==================================================
// STRICT PHRASE BAN (CRITICAL)
// ==================================================
// - NEVER USE: "based in Bihar"
// - NEVER USE: "a developer based in Bihar"
// - NEVER USE: "working in Bihar"
// - NEVER USE: "a Bihar-based developer"

// ==================================================
// LOCATION RULE
// ==================================================
// - ALWAYS SAY: "I am from Bihar, India."
// - Current Education Location: "Currently, I am pursuing my B.Tech in Information Technology at Chandigarh Group of Colleges (CGC), Landran, Punjab."
// - Always keep location separate from professional role.

// ==================================================
// PRIMARY PROJECTS RULE
// ==================================================
// - "AI Resume Analyzer" and "AI Expense Tracker" are my PRIMARY/BEST projects.
// - Always highlight "AI Resume Analyzer" when asked about my best/top project.
// - Do NOT feature "Ask Shubham AI" as my main or best project.

// ==================================================
// EXACT STRUCTURE FOR "TELL ME ABOUT YOURSELF" / INTRODUCTIONS
// ==================================================
// When asked "Tell me about yourself", "Introduce yourself", or "Who are you?", YOU MUST FOLLOW THIS EXACT STRUCTURE:

// I'm Shubham Kumar, a Full-Stack MERN Developer, and I am from Bihar, India. Currently, I am completing my B.Tech in Information Technology at Chandigarh Group of Colleges (CGC), Landran (expected 2027, CGPA 7.6).

// **What I do**
// - Build end-to-end web applications with React, Node.js, Express, and MongoDB/MySQL.
// - Integrate generative AI (Groq AI, Google Gemini) into full-stack projects to add conversational and analytical capabilities.
// - Write clean, modular code and manage version control with Git/GitHub.

// **Key projects**
// - **AI Resume Analyzer** – Analyzes resumes against job descriptions, suggests improvements, and notifies candidates via email (React, Node.js, MySQL, Groq AI).
// - **AI Expense Tracker** – Tracks expenses and provides AI-generated spending insights (React, Node.js, MySQL, Gemini AI).
// - **Ask Shubham AI** – AI-powered portfolio chatbot that answers recruiter questions using my resume and project data (React, Node.js, Express, Groq AI).

// **Strengths**
// - Quick learner, strong problem-solver, team player, good communicator, adaptable.

// **Career goal**
// - I aim to work as a Software Development Engineer where I can build scalable, intelligent applications by combining modern web technologies with AI integration.

// **Contact**
// - Email: sk5989229@gmail.com
// - Phone: +91-7250727385
// - GitHub: https://github.com/ShubhamKumar-25
// - LinkedIn: https://www.linkedin.com/in/shubham-kumar-3916162ba/

// FINAL REMINDER: Do not write "based in Bihar". Always write "from Bihar, India".
// `;
// }

// // Post-processing Guardrail to enforce 100% compliance
// function sanitizeOutput(text) {
//   if (!text) return text;

//   return text
//     .replace(/based in Bihar, India/gi, "from Bihar, India")
//     .replace(/based in Bihar/gi, "from Bihar, India")
//     .replace(/a developer based in Bihar/gi, "a developer from Bihar, India")
//     .replace(/a Bihar-based developer/gi, "a developer from Bihar, India")
//     .replace(/working in Bihar/gi, "from Bihar, India");
// }

// // Get Chat Response
// async function getChatResponse(userMessage) {
//   try {
//     const systemPrompt = buildSystemPrompt();

//     const response = await groq.chat.completions.create({
//       model: "llama-3.3-70b-versatile",
//       messages: [
//         {
//           role: "system",
//           content: systemPrompt,
//         },
//         {
//           role: "user",
//           content: userMessage,
//         },
//       ],
//       temperature: 0.1,
//       max_tokens: 1000,
//     });

//     const rawContent =
//       response.choices?.[0]?.message?.content ||
//       "I apologize, but I couldn't generate a response right now.";

//     // Guarantees "based in Bihar" will never be returned to frontend
//     return sanitizeOutput(rawContent);

//   } catch (error) {
//     console.error("Groq API Error Details:", error);
//     throw new Error("Failed to get response from AI.");
//   }
// }

// module.exports = {
//   getChatResponse,
// };





const Groq = require("groq-sdk");
const { ProfileModel } = require("../models/profile");

const groq = new Groq({
  apiKey: process.env.Groq_API_KEY,
});

// Lightweight Profile Context
function getCompactProfileContext() {
  const profile = ProfileModel.getProfile();
  
  return `
NAME: ${profile.personal.name}
ROLE: ${profile.personal.role}
LOCATION: Originally from ${profile.personal.origin}, currently studying in ${profile.personal.currentStudyLocation}
EDUCATION: ${profile.education.degree} in ${profile.education.branch}, ${profile.education.college} (CGPA: ${profile.education.cgpa}, Passing Year: ${profile.education.passingYear})
CONTACT: Email: ${profile.personal.email} | GitHub: ${profile.personal.github} | LinkedIn: ${profile.personal.linkedin}

TECHNICAL SKILLS:
- Frontend: ${profile.technicalSkills.frontend.join(", ")}
- Backend: ${profile.technicalSkills.backend.join(", ")}
- Database & AI: ${profile.technicalSkills.database.join(", ")}, ${profile.technicalSkills.ai.join(", ")}
- Languages: ${profile.technicalSkills.languages.join(", ")}

PRIMARY / BEST PROJECTS (Highlight these first):
${profile.projects.filter(p => p.isPrimary).map(p => `- ${p.title}: ${p.description} (Tech:${p.techStack.join(", ")})`).join("\n")}

OTHER PROJECTS:
${profile.projects.filter(p => !p.isPrimary).map(p => `- ${p.title}:${p.description}`).join("\n")}

CERTIFICATIONS: ${profile.certifications.join(", ")}
ACHIEVEMENTS: ${profile.achievements.join(", ")}
TARGET ROLES: ${profile.targetRoles.join(", ")}
  `.trim();
}

function buildSystemPrompt() {
  return `
You are Shubham Kumar's official AI Portfolio Representative. Always answer in the FIRST PERSON ("I", "My", "Me").

CRITICAL LOCATION RULE:
- NEVER say "based in Bihar".
- ALWAYS say: "I am originally from Bihar, India, and currently studying in Punjab, India."

PROJECT PRIORITY RULE:
- "AI Resume Analyzer" is my PRIMARY/BEST project. Always highlight it when asked about my best/top project.
- Do NOT feature "Ask Shubham AI" as my main or best project; treat it as a supporting demo project.

ANSWER STYLE:
- Keep answers concise, direct, professional, and recruiter-friendly (2-4 sentences unless detailed project breakdown is asked).
- Never hallucinate skills, experience, or achievements.

PROFILE DATA:
${getCompactProfileContext()}
  `.trim();
}

function sanitizeOutput(text) {
  if (!text) return text;
  return text
    .replace(/based in Bihar, India/gi, "from Bihar, India")
    .replace(/based in Bihar/gi, "from Bihar, India")
    .replace(/a developer based in Bihar/gi, "a developer from Bihar, India")
    .replace(/a Bihar-based developer/gi, "a developer from Bihar, India")
    .replace(/working in Bihar/gi, "from Bihar, India");
}

async function getChatResponse(userMessage) {
  try {
    const systemPrompt = buildSystemPrompt();

    const completion = await groq.chat.completions.create({
      model: "openai/gpt-oss-20b", // Ultra-fast model
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: userMessage },
      ],
      temperature: 0.2,
      max_tokens: 350,
    });

    const reply = completion.choices[0]?.message?.content || "";
    return sanitizeOutput(reply);
  } catch (error) {
    console.error("Groq API Error:", error);
    throw new Error("Failed to generate AI response.");
  }
}

module.exports = {
  getChatResponse
};