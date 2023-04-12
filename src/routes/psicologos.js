import express from "express";
import psicologosController from "../controllers/psicologos/psicologosController.js";

const router = express.Router();

router.get("/", psicologosController.findAllPsicologos);
router.post("/", psicologosController.createPsicologo);
router.get("/:id", psicologosController.findPsicologo);
router.put("/:id", psicologosController.updatePsicologo);
router.delete("/:id", psicologosController.deletePsicologo);

export default router;