import express from "express";
import { signup, getAllUsers, signupVerification } from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/signup", signup);
router.patch("/signup/verification/:email", signupVerification);
router.get("/getAllUsers", getAllUsers);

export default router;


// git clone https://github.com/PsmLuwang/April2026Batch.git

// git pull