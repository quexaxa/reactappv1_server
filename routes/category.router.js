import cors from "cors";
import { Router } from "express";
const router = Router();

import * as CategoryController from "../controllers/Category.controller.js";

router.post("/", cors(), CategoryController.create);
router.get("/category", cors(), CategoryController.getAll);

export default router;