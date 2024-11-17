import express from "express";
import mongoose from "mongoose";
import helmet from "helmet";
import dotenv from "dotenv";
import userRoutes from "./routes/auth.js";
import categoryRoutes from "./routes/CategoryRoute.js";
import productRoutes from "./routes/productRoute.js";
import cors from "cors";
dotenv.config();

const app = express();

app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/user", userRoutes);
app.use("/api/category", categoryRoutes);
app.use("/api/product", productRoutes);

const PORT = process.env.PORT || 3001;

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`server running on ${PORT}`);
    });
    console.log("server successfully connected");
  })
  .catch((error) => {
    console.log(error);
  });
