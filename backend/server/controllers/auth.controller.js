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


export {
  signup,
  getAllUsers
}