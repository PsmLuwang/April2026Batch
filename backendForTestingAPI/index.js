import express from "express";
import cors from "cors";
import { students } from "./databaseExample/students.js";

const app = express(); 
app.use(cors());
app.use(express.json()); 

app.get("/getStudents", (req, res) => {
  try {
    res.status(200).json({
      success: true,
      message: "All students data",
      students: students
    })
  } catch (error) {
    res.status(400).json({ success: false, message: error.message || "Unauthorized" })
  }
})


app.get("/testAPI", (req, res) => {
  try {
    res.status(200).json({
      success: true,
      message: "Test API"
    })
  } catch (error) {
    res.status(400).json({ success: false, message: error.message || "Unauthorized" })
  }
})



// POST Method
app.post("/newStudent", (req, res) => {
  try {
    const student = req.body;
    
    students.unshift(student)
    
    res.status(201).json({
      success: true,
      message: "Created New Student",
      student: {...student, id: student.name.slice(0, 4) + "2026"}
    })
  } catch (error) {
    res.status(400).json({ success: false, message: error.message || "Invalid Data" })
  }
})


const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
})