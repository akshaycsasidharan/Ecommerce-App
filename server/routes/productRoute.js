import express from "express";

import { verifyToken, isAdmin } from "../middlewares/auth.js";
import {
  createProductController,
  getallProducts,
  getsingleProducts,
  getproductPhoto,
  deleteProduct,
  UpdateProduct,
} from "../controllers/productController.js";
import formidable from "express-formidable";
const router = express.Router();

router.post(
  "/create-product",
  verifyToken,
  isAdmin,
  formidable(),
  createProductController
);

router.put(
  "/update-product/:id",
  verifyToken,
  isAdmin,
  formidable(),
  createProductController
);

router.get("/get-product", getallProducts);

router.get("/get-product/:slug", getsingleProducts);

router.get("/get-product-photo/:pid", getproductPhoto);

router.delete("/delete-product/:id", deleteProduct);
export default router;
