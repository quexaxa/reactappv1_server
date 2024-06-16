import cors from "cors";
import { Router } from "express";
const router = Router();

import * as FeedbackController from "../controllers/Feedback.controller.js";

router.post("/",  FeedbackController.create);
router.get("/feedback",  FeedbackController.getAll);
router.put("/:id",  FeedbackController.update);
router.get("/:id",  FeedbackController.getById);
router.delete("/:id", FeedbackController.remove);
router.get("/user/:userId", FeedbackController.getByUserId);

export default router;