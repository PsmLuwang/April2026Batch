import UserModel from "../models/user.model.js";
import bcryptjs from "bcryptjs";

const signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return res.status(400).json({
        success: false,
        message: "All fields are required"
      })
    }

    // password hashing
    const hashedPassword = await bcryptjs.hash(password, 10);
    // generate 6 digit OTP
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    // create user
    const newUser = await UserModel.create({
      name,
      email,
      password: hashedPassword,
      otp
    });

    res.status(201).json({
      success: true,
      message: "User created",
      user: newUser
    })

  } catch (error) {
    res.status(500).json({ success: false, message: error.message })
  }
}


export {
  signup
}