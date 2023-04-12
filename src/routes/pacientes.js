import express  from "express";
import pacientesController from "../controllers/pacientes/pacientesController.js";

const router = express.Router();

router.get("/", pacientesController.findAllPacientes);
router.post("/", pacientesController.createPaciente);
router.get("/:id", pacientesController.findPaciente);
router.put("/:id", pacientesController.updatePaciente);
router.delete("/:id", pacientesController.deletePaciente);

export default router;