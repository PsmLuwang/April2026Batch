import express from "express";
import { sum, multiply } from "../controllers/calc.controller.js";

const router = express.Router();

router.get("/sum", sum);
router.get("/multiply", multiply);

export default router;