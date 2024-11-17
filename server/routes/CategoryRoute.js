import express from "express";
import { verifyToken, isAdmin } from "../middlewares/auth.js";
import {
  createCategory,
  updatecategory,
  getCategory,
  singleCategory,
  deletecategory,
} from "../controllers/categoryController.js";
const router = express.Router();

router.post("/create-category", verifyToken, isAdmin, createCategory);

router.put("/update-category/:id", verifyToken, isAdmin, updatecategory);

router.get("/get-category", getCategory);

router.get("/single-category/:slug", singleCategory);

router.delete("/delete-category/:id", verifyToken, isAdmin, deletecategory);

export default router;
