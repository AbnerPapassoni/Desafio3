import express from "express";
import authController from "../controllers/auth/authController.js";

const router = express.Router();

router.post("/", authController.login);

export default router;