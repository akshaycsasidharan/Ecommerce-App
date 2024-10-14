import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    name: {
      required: true,
      type: String,
    },
    email: {
      required: true,
      type: String,
      unique: true,
    },
    password: {
      required: true,
      type: String,
    },

    phone: {
      required: true,
      type: String,
    },
    role: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

const userModel = mongoose.model("userModel", UserSchema);

export default userModel;
