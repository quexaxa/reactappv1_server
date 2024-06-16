import cors from "cors";
import { Router } from "express";
const router = Router();

import * as ServiceController from "../controllers/Service.controller.js";
import checkAuth from "./../utils/checkAuth.js";

router.post("/",  ServiceController.create);
router.get("/service",  ServiceController.getAll);
router.get("/:id",  ServiceController.getById);
router.put("/:id",  checkAuth, ServiceController.update); // Исправленный маршрут для обновления
router.delete("/:id",  checkAuth, ServiceController.remove); // Маршрут для удаления


export default router;