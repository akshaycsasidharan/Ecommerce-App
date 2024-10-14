import express from "express";
// import { verifyToken } from "../middlewares/auth.js";

import {
  register,
  login,
  requrireSignIn,
  ForgotPassword,
} from "../controllers/user.js";

const router = express.Router();

router.post("/register", register);

router.post("/login", login);

router.get("/user-auth", requrireSignIn);

router.post("/forgot-password", ForgotPassword);

export default router;
