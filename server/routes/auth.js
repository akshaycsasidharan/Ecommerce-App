import express from "express";
import { verifyToken, isAdmin } from "../middlewares/auth.js";

import {
  register,
  login,
  testcontroller,
  ForgotPassword,
} from "../controllers/authController.js";

const router = express.Router();

router.post("/register", register);

router.post("/login", login);

router.post("/forgot-password", ForgotPassword);

router.get("/user-auth", verifyToken, testcontroller);

router.get("/admin-auth", verifyToken, isAdmin, testcontroller);

export default router;
