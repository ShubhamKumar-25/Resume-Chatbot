// profile.js

const shubhamProfile = {
  personal: {
    name: "Shubham Kumar",
    role: "Full Stack MERN Developer",
    tagline:
      "Passionate Full Stack Developer with a strong interest in AI Integration, Web Development, and Problem Solving.",
    location: "Bihar, India",
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
        "An AI-powered application that analyzes resumes, compares them with Job Descriptions, and provides improvement suggestions. This project is helpful for job seekers to optimize their resumes for better chances of getting shortlisted. Also it helpfull for HR to analyze resumes and shortlist candidates based on their skills and experience and send emails notifying them about their selection or rejection.",
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
        "Expense management system with AI-generated spending insights. In this application, users can track their expenses and set their budget. The AI analyzes the spending patterns and provides insights to help users manage their finances better. Suppose a user spends money on like Pizza, the AI will set automatic in their food section.",
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
        "Complaint management platform where AI categorizes complaints and provides intelligent assistance. this is a web application where users can submit their complaints, and the AI will categorize them based on their nature and urgency. The AI will also provide suggestions for resolving the complaints and assist in tracking their status.",
      techStack: [
        "React",
        "Node.js",
        "Express.js",
        "MySQL",
      ],
    },

    {
      title: "My Own NexAI Application",
      description:
      "This is my own AI application where I have integrated Groq AI API. In this application, users can ask questions related to any topic, and the AI will provide answers based on its knowledge base. This application is designed to showcase my skills in AI integration and web development.",
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