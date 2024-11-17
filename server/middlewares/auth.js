import jwt from "jsonwebtoken";
import userModel from "../models/user.js";

export const verifyToken = async (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
      return res.status(401).json({ message: "No token provided" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    // console.log("Decoded Token:", decoded); // Debug log

    const user = await userModel.findById(decoded.id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    req.user = user; // Attach user to the request
    next();
  } catch (error) {
    console.error(error);
    res.status(401).json({ message: "Invalid or expired token" });
  }
};

export const isAdmin = async (req, res, next) => {
  try {
    // console.log("User in isAdmin middleware:", req.user); // Debug log

    const user = await userModel.findById(req.user._id);

    if (!user) {
      return res.status(404).send({
        success: false,
        message: "User not found",
      });
    }

    if (user.role !== 1) {
      return res.status(403).send({
        success: false,
        message: "Forbidden: You do not have access",
      });
    }

    next();
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Internal server error",
    });
  }
};
