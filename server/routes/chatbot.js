import { Router } from "express";
import { getChatbotReply } from "../services/chatbotService.js";

const router = Router();

router.post("/message", async (req, res) => {
  const { message, sessionId } = req.body;

  if (!message) {
    return res.status(400).json({ error: "Message is required." });
  }

  const reply = await getChatbotReply({ message, sessionId });

  return res.status(200).json({ reply });
});

export default router;
