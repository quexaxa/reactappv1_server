import cors from "cors";
import { Router } from "express";
const router = Router();

import * as UserController from "./../controllers/User.controller.js";
import {
  registerValidation,
  loginValidation,
} from "./../validations/validations.js";
import checkAuth from "./../utils/checkAuth.js";

router.post("/register", registerValidation, UserController.register);
router.post("/login",  loginValidation, UserController.login);
router.post("/logout",  checkAuth, UserController.logout);
router.get("/user",  checkAuth, UserController.getUser);


export default router;