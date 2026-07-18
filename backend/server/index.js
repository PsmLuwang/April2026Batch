import express from "express";
import connectDB from "./utils/mongodbConnect.js"
import calcRoutes from "./routes/calc.route.js";
import authRoutes from "./routes/auth.route.js";

const app = express();
app.use(express.json());


// ROUTES
app.use("/api/calc", calcRoutes);
app.use("/api/auth", authRoutes);


// DB connection
connectDB();

// Server listen
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
})
