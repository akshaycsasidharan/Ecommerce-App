import express from "express";
import mongoose from "mongoose";
import helmet from "helmet";
import dotenv from "dotenv";
import userRoutes from "./routes/user.js";
import cors from "cors";
dotenv.config();

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/user", userRoutes);

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
