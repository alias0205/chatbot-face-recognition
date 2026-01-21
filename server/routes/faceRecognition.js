import { Router } from "express";
import multer from "multer";
import { analyzeFace } from "../services/faceRecognitionService.js";

const upload = multer({ storage: multer.memoryStorage() });
const router = Router();

router.post("/analyze", upload.single("image"), async (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: "Image upload is required." });
  }

  const result = await analyzeFace({
    imageBuffer: req.file.buffer,
    fileName: req.file.originalname,
  });

  return res.status(200).json(result);
});

export default router;
