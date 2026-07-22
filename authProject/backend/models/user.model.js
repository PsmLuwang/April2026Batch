import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true,
      unique: true
    },
    password: {
      type: String,
      required: true
    },
    isVerified: {
      type: Boolean,
      default: false
    },

    otp: String,
    otpExpireAt: Date,
    sessionId: String

  },
  { timestamps: true }
);

const UserModel = mongoose.model("users", userSchema);
export default UserModel;