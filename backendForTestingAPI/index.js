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

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
})