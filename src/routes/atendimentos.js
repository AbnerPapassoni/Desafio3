import express from "express";
import atendimentoController from "../controllers/atendimentos/atendimentosController.js";
import verifyToken from "../middleware/auth/verifyToken.js"

const router = express.Router();

router.get("/", atendimentoController.findAllAtendimentos);
router.get("/:id", atendimentoController.findAtendimento);
router.post("/", verifyToken, atendimentoController.createAtendimento);

export default router;
