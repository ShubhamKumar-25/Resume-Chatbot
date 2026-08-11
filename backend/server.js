require("dotenv").config();
const express = require("express");
const cors = require("cors");
const chatRoutes = require("./routes/chat.routes");

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use("/api", chatRoutes);

// Test route (optional - server check karne ke liye)
app.get("/", (req, res) => {
  res.send("Resume Chatbot Backend is running ✅");
});

// Server start
const PORT = process.env.PORT || 5000;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});







// require("dotenv").config();
// const express = require("express");
// const cors = require("cors");
// const chatRoutes = require("./routes/chat.routes");

// const app = express();

// // 1. Allowed Origins list (Local + Deployed Frontend)
// const allowedOrigins = [
//   "http://localhost:5173", // Vite default port
//   "http://localhost:3000", // React App default port
//   process.env.CLIENT_URL   // Render Environment variable for Frontend (e.g. https://your-app.vercel.app)
// ].filter(Boolean); // removes undefined if CLIENT_URL is not set yet

// // 2. Optimized CORS Configuration
// const corsOptions = {
//   origin: function (origin, callback) {
//     // Allow requests with no origin (like mobile apps, Postman, or server-to-server requests)
//     if (!origin || allowedOrigins.includes(origin)) {
//       callback(null, true);
//     } else {
//       callback(new Error("CORS policy error: Origin not allowed"));
//     }
//   },
//   methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
//   allowedHeaders: ["Content-Type", "Authorization"],
//   credentials: true, // Allow cookies / Auth headers if needed
//   optionsSuccessStatus: 200 // For legacy browser compatibility
// };

// // Middlewares
// app.use(cors(corsOptions));
// app.use(express.json());

// // Routes
// app.use("/api", chatRoutes);

// // Test route
// app.get("/", (req, res) => {
//   res.send("Resume Chatbot Backend is running ✅");
// });

// // Server start
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, "0.0.0.0", () => {
//   console.log(`🚀 Server running on port ${PORT}`);
// });