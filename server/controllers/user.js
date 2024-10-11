import User from "../models/user.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const register = async (req, res) => {
  try {
    const { name, email, password, phone, role } = req.body;

    if (!name) {
      return res.send({ message: "username is required" });
    }

    if (!email) {
      return res.send({ message: "email is required" });
    }

    if (!password) {
      return res.send({ message: "password is required" });
    }

    if (!phone) {
      return res.send({ message: "phone is required" });
    }

    const existinguser = await User.findOne({ name });

    if (existinguser) {
      return res
        .status(400)
        .send({ success: false, message: "user already exist" });
    }

    const hashedpassword = await bcrypt.hash(password, 10);

    const newUser = await new User({
      name,
      email,
      password: hashedpassword,
      phone,
    }).save();

    res.status(201).send({
      success: true,
      message: "user registered successfully",
      newUser,
    });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).send({ message: "user not found" });
    }

    const validpassword = await bcrypt.compare(password, user.password);

    if (!validpassword) {
      return res.status(404).send({ message: "invalid password" });
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    return res.status(200).send({
      success: true,
      message: "logined successfully",
      user: {
        email: user.email,
        phone: user.phone,
      },
      token,
    });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};
