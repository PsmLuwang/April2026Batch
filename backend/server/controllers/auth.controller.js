import { UserModel } from "../models/users.model.js";

const signup = async (req, res) => {
  
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({
      success: false,
      message: "All fields are required."
    })
  }

  // logic
  const userInfo = {
    name,
    email,
    password
  }

  const newUser = await UserModel.create(userInfo);
  

  res.status(201).json({
    success: true,
    message: "User created",
    data: newUser
  })

}



const getAllUsers = async (req, res) => {
  
  const allUsers = await UserModel.find({});

  res.status(200).json({
    success: true,
    message: "All users data",
    data: allUsers
  })
}



const signupVerification = async (req, res) => {
  try {
    const { email } = req.params;

    // const user = await UserModel.findOne({ email });
    // if (!user) {
    //   return res.status(404).json({
    //     success: false,
    //     message: "User not found"
    //   })
    // }

    // // update user details
    // user.isVerified = true;
    // await user.save();

    const updatedUser = await UserModel.findOneAndDelete(
      {email}, 
      {isVerified: true}, 
      {new: true}
    )
    if (!updatedUser) {
      return res.status(404).json({
        success: false,
        message: "User not found"
      })
    }

    res.status(200).json({
      success: true,
      updatedUser
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server Error"
    })
  }
}


export {
  signup,
  getAllUsers,
  signupVerification
}