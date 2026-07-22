import express, { json } from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import connectDB from "./utils/connectDB.js";

// ROUTES
import authRoutes from "./routes/auth.route.js";

dotenv.config();

const FRONTEND_URL = process.env.NODE_ENV == "development" 
? ["http://localhost:5173"] 
: [process.env.CLIENT_URL]


const app = express();
app.use(cors({ origin: FRONTEND_URL, credentials: true }));
app.use(express.json());
app.use(cookieParser());



// API
app.get("/", (req, res) => {
  res.send("Hello World!")
})
app.use("/api/auth", authRoutes);


// DB CONNECTION
connectDB();
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log("Server is running on ", PORT);
})