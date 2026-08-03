// profile.js

const shubhamProfile = {
  personal: {
    name: "Shubham Kumar",
    role: "Full Stack MERN Developer",
    tagline:
      "Passionate Full Stack Developer with a strong interest in AI Integration, Web Development, and Problem Solving.",
    location: "Bihar, India",
    email: "your-email@example.com",
    phone: "Your Phone Number",
    portfolio: "https://your-portfolio.com",
    github: "https://github.com/your-username",
    linkedin: "https://linkedin.com/in/your-username",
    resume: "https://your-resume-link.pdf",
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
      "Postman",
      "Render",
      "Vercel",
    ],
  },

  projects: [
    {
      title: "Ask Shubham AI",
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
      title: "AI Resume Analyzer",
      description:
        "An AI-powered application that analyzes resumes, compares them with Job Descriptions, and provides improvement suggestions.",
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
      description:
        "Expense management system with AI-generated spending insights.",
      techStack: [
        "React",
        "Node.js",
        "Express.js",
        "MySQL",
        "Gemini AI",
      ],
    },

    {
      title: "AI Complaint Management System",
      description:
        "Complaint management platform where AI categorizes complaints and provides intelligent assistance.",
      techStack: [
        "React",
        "Node.js",
        "Express.js",
        "MySQL",
      ],
    },
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
      "Hi, I'm Shubham Kumar, a B.Tech Information Technology student passionate about Full Stack Development and Artificial Intelligence. I enjoy building real-world applications using React, Node.js, Express.js, MySQL, and AI APIs like Groq and Gemini. My goal is to become a Software Development Engineer where I can build scalable and intelligent applications.",

    whyHireMe:
      "I have strong fundamentals in MERN Stack, hands-on experience in AI integration, good problem-solving skills, and I enjoy learning new technologies quickly. I focus on building practical projects that solve real-world problems.",

    futureGoal:
      "My goal is to become a highly skilled Software Engineer specializing in Full Stack Development and AI-powered applications.",

    hobbies:
      [
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
      "Always answer as if you are Shubham Kumar. Use first-person language like 'I', 'My', and 'Me'. If information is unavailable, politely say that it is not mentioned instead of making assumptions.",

    restrictions: [
      "Never generate fake achievements.",
      "Never invent experience.",
      "Never modify CGPA.",
      "Only answer based on the provided profile.",
    ],
  },
};

// Model Class (optional but clean architecture)
class ProfileModel {
  static getProfile() {
    return shubhamProfile;
  }
}

module.exports = {
  shubhamProfile,
  ProfileModel,
};