import express from "express";
import authRoutes from "./auth.js"
import psicologosRoutes from "./psicologos.js"
import pacientesRoutes from "./pacientes.js"
import atendimentosRoutes from "./atendimentos.js"

const router = express.Router();

router.use("/login", authRoutes)
router.use("/psicologos", psicologosRoutes)
router.use("/pacientes", pacientesRoutes)
router.use("/atendimentos", atendimentosRoutes)

export default router;