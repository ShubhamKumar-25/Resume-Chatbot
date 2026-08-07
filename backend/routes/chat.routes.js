const express = require("express");
const router = express.Router();
const { handleChat } = require("../controllers/chat.controller");

// POST /api/chat
router.post("/chat", handleChat);

module.exports = router;