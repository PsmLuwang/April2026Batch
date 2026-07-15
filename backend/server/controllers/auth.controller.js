const signup = (req, res) => {
  
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({
      success: false,
      message: "All fields are required."
    })
  }

  // logic

  res.status(201).json({
    success: true,
    message: "User created",
    data: {
      userID: "ABC123",
      name,
      email
    }
  })

}


export {
  signup
}