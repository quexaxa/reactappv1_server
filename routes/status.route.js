import { Router } from "express";

const router = Router();

import * as StatusController from "../controllers/Status.controller.js";

router.post("/", StatusController.create);
router.get("/status", StatusController.getAll);

export default router;
