import express from "express";
import { signup, getAllUsers } from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/signup", signup);
router.get("/getAllUsers", getAllUsers);

export default router;