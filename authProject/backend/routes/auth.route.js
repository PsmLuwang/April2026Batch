import express from "express";
import { 
  signup,
  sigupVerification
} from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/signupVerification", sigupVerification);


export default router;