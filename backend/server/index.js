import express from "express";
import calcRoutes from "./routes/calc.route.js";

const app = express();
app.use(express.json());


// ROUTES
app.use("/api/calc", calcRoutes);


// Server listen
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
})
