import cors from "cors";
import express from "express";
import chatbotRouter from "./routes/chatbot.js";
import faceRecognitionRouter from "./routes/faceRecognition.js";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get("/health", (req, res) => {
  res.status(200).json({ status: "ok" });
});

app.use("/api/chatbot", chatbotRouter);
app.use("/api/face-recognition", faceRecognitionRouter);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
