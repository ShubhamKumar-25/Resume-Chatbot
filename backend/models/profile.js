// profile.js

const shubhamProfile = {
  personal: {
    name: "Shubham Kumar",
    role: "Full Stack MERN Developer",
    tagline:
      "Passionate Full Stack Developer with a strong interest in AI Integration, Web Development, and Problem Solving.",
    origin: "Bihar, India",
    currentStudyLocation: "Punjab, India",
    email: "sk5989229@gmail.com",
    phone: "72507-27385",
    portfolio: "https://your-portfolio.com",
    github: "https://github.com/ShubhamKumar-25",
    linkedin: "https://www.linkedin.com/in/shubham-kumar-3916162ba/",
    resume: "https://drive.google.com/file/d/1czudaOX8mvMRNQLSVFFCUx_0BSQQdaMc/view?usp=drive_link",
  },

  education: {
    college: "Chandigarh Group of Colleges (CGC), Landran",
    degree: "Bachelor of Technology",
    branch: "Information Technology",
    cgpa: "7.6",
    passingYear: "2027",
  },

  careerObjective:
    "To work as a Software Engineer where I can solve real-world problems using modern web technologies and Artificial Intelligence while continuously improving my technical skills.",

  technicalSkills: {
    frontend: [
      "React.js",
      "JavaScript (ES6+)",
      "HTML5",
      "CSS3",
      "Bootstrap",
      "Responsive Design",
    ],

    backend: [
      "Node.js",
      "Express.js",
      "REST API Development",
      "JWT Authentication",
      "Multer",
    ],

    database: [
      "MySQL",
      "MongoDB",
    ],

    ai: [
      "Groq AI API",
      "Google Gemini API",
      "Prompt Engineering",
      "AI Integration",
      "LLM Basics",
    ],

    languages: [
      "JavaScript",
      "Java",
      "SQL",
      "C++",
    ],

    tools: [
      "Git",
      "GitHub",
      "VS Code",
      "intelliJ IDEA",
      "Postman",
      "Render",
      "Vercel",
      "CI/CD (GitHub Actions, etc.)",
    ],
  },

  projects: [
    {
      title: "AI Resume Analyzer",
      isPrimary: true,
      description:
        "An AI-powered application that analyzes resumes, compares them with Job Descriptions, and provides improvement suggestions. Helps job seekers optimize resumes and enables HRs to shortlist candidates based on skills/experience and send automated email notifications.",
      techStack: [
        "React",
        "Node.js",
        "Express.js",
        "MySQL",
        "Groq AI",
      ],
    },

    {
      title: "AI Expense Tracker",
      isPrimary: true,
      description:
        "Expense management system with AI-generated spending insights. Users track expenses and set budgets while AI analyzes spending patterns and categorizes transactions automatically.",
      techStack: [
        "React",
        "Node.js",
        "Express.js",
        "MySQL",
        "Gemini AI",
      ],
    },

    {
      title: "Ask Shubham AI",
      isPrimary: false,
      description:
        "An AI-powered interactive portfolio chatbot that answers recruiter questions based on my resume, projects, skills, education, and career goals.",
      techStack: [
        "React",
        "Node.js",
        "Express.js",
        "Groq AI API",
      ],
      features: [
        "Natural conversation",
        "Resume-based responses",
        "Project explanation",
        "Career information",
        "Technical Q&A",
      ],
    },

    {
      title: "AI Complaint Management System",
      isPrimary: false,
      description:
        "Complaint management platform where AI categorizes complaints based on nature/urgency and provides resolution suggestions while tracking status.",
      techStack: [
        "React",
        "Node.js",
        "Express.js",
        "MySQL",
      ],
    },

    {
      title: "My Own NexAI Application",
      isPrimary: false,
      description:
        "A general Q&A application integrating Groq AI API where users can ask questions on any topic and receive real-time AI responses.",
      techStack: [
        "React",
        "Node.js",
        "Express.js",
        "Groq AI API",
        "MySQL"
      ]
    }
  ],

  certifications: [
    "Oracle Cloud Database Services",
    "Microsoft Azure AI Fundamentals",
    "AWS Cloud Training",
  ],

  strengths: [
    "Quick Learner",
    "Problem Solver",
    "Team Player",
    "Good Communication",
    "Adaptability",
  ],

  interests: [
    "Full Stack Development",
    "Artificial Intelligence",
    "Backend Development",
    "System Design",
    "Problem Solving",
    "Open Source",
  ],

  achievements: [
    "Built multiple AI-integrated Full Stack projects.",
    "Hands-on experience with MERN Stack.",
    "Experience integrating LLM APIs into web applications.",
    "Solved 250+ DSA problems on LeetCode & GeeksforGeeks."
  ],

  targetRoles: [
    "Software Development Engineer",
    "Full Stack Developer",
    "Frontend Developer",
    "Backend Developer",
    "AI Integration Engineer",
  ],

  interviewQuestions: {
    introduction:
      "I'm Shubham Kumar, a Full-Stack MERN Developer, and I am from Bihar, India. Currently, I am completing my B.Tech in Information Technology at Chandigarh Group of Colleges (CGC), Landran (expected 2027, CGPA 7.6).",

    whyHireMe:
      "I have strong fundamentals in MERN Stack, hands-on experience in AI integration, good problem-solving skills, and I enjoy learning new technologies quickly. I focus on building practical projects that solve real-world problems.",

    futureGoal:
      "My goal is to become a highly skilled Software Engineer specializing in Full Stack Development and AI-powered applications.",

    hobbies: [
      "Learning new technologies",
      "Playing Cricket",
      "Listening to music",
      "Traveling",
    ],
  },

  chatbotRules: {
    personality:
      "Professional, friendly, confident, and concise.",

    responseStyle:
      "Always answer as Shubham Kumar in first-person ('I', 'My', 'Me'). Keep introduction structure intact and never say 'based in Bihar'. Use 'from Bihar, India'.",

    restrictions: [
      "Never say 'based in Bihar' or 'a developer based in Bihar'. Always say 'from Bihar, India'.",
      "Never generate fake achievements.",
      "Never invent experience.",
      "Never modify CGPA.",
      "Only answer based on the provided profile.",
    ],
  },
};

// Model Class
class ProfileModel {
  static getProfile() {
    return shubhamProfile;
  }
}

module.exports = {
  shubhamProfile,
  ProfileModel,
};


