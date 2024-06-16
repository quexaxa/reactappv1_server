import cors from "cors";
import { Router } from "express";
const router = Router();

import * as SubCategoryController from "../controllers/SubCategory.controller.js";

router.post("/", cors(), SubCategoryController.create);
router.get("/subcategory", cors(), SubCategoryController.getAll);

export default router;