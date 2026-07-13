import express from "express";

const app = express();
app.use(express.json());

// 1. Endpoints
app.get("/", (req, res) => {

  res.send("Hello Students")
})

// 2. 
app.get("/api/getStudents", (req, res) => {

  const student = {
    name: "Jackson",
    email: "jackson@gmail.com"
  }

  res.status(200).json(
    {
      success: true,
      message: "Data fetched",
      student: student
    }
  )
})



// 3. req query
app.get("/sum", (req, res) => {

  const { num1, num2 } = req.query;
  const result = parseFloat(num1) + parseFloat(num2);

  res.status(200).json({
    success: true,
    message: "Sum result",
    sum: result
  })

})










// Server listen
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
})
