import UserModel from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import sendEmail from "../utils/sendEmail.js";
import crypto from "crypto";

const signup = async (req, res) => {
  try {
    // 1. get the user info
    const { name, email, password } = req.body;
    // 2. validation
    if (!name || !email || !password) {
      return res.status(400).json({
        success: false,
        message: "All fields are required"
      })
    }

    // 3. isAlreadyExist?
    const isAlreadyExist = await UserModel.findOne({ email, isVerified: true });
    if (isAlreadyExist) {
      return res.status(400).json({
        success: false,
        message: "User already exist."
      })
    }
    // delete unverified user info
    await UserModel.deleteOne({ email, isVerified: false });


    
    // 4. Generate OTP and send to the email
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    await sendEmail(email, "Signup verification", `<p>OTP is ${otp}. (Valid for 5 minutes)</p>`);
    
    // generate session id
    const sessionId = crypto.randomUUID();
    res.cookie('session_id', sessionId, {
      maxAge: 5 * 60 * 1000, // 5mins
      httpOnly: true,
      secure: process.env.NODE_ENV != "development",
      sameSite: "lax",
      path: "/"
    })

    // 5. password hash
    const hashedPassword = await bcryptjs.hash(password, 10);

    // 6. create user
    const newUser = await UserModel.create({
      name,
      email,
      password: hashedPassword,
      otp,
      otpExpireAt: Date.now() + 5 * 60 * 1000, // 5mins
      sessionId
    });

    // 7. send response
    res.status(201).json({
      success: true,
      message: "OTP sent",
      user: {...newUser._doc, password: undefined, otp: undefined, sessionId: undefined}
    })

  } catch (error) {
    res.status(500).json({ success: false, message: error.message })
  }
}


const sigupVerification = async (req, res) => {
  try {
    const sessionId = req.cookies.session_id;
    const { otp } = req.body;

    if (!sessionId || !otp) {
      return res.status(400).json({
        success: false,
        message: "Session expired!"
      })
    }

    const user = await UserModel.findOne({ 
      sessionId, 
      otp, 
      otpExpireAt: { $gt: Date.now() } 
    });

    if (!user) {
      return res.status(400).json({
        success: false,
        message: "Invalid or Expired OTP"
      })
    }

    user.sessionId = undefined;
    user.otp = undefined;
    user.otpExpireAt = undefined;
    user.isVerified = true;
    await user.save();

    res.clearCookie("session_id");

    res.status(200).json({
      success: true,
      message: "User Created",
      user: {...user._doc, password: undefined}
    })
    
  } catch (error) {
    res.status(500).json({ success: false, message: error.message })
  }
}


export {
  signup,
  sigupVerification
}


/*
1. get the user info
2. validation
3. isAlreadyExist? // and delete unverified user info
4. Generate OTP and send to the email
5. password hash
6. create user
7. send response
*/