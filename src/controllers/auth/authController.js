import { Psicologo as PsicologoRepository } from "../../models/index.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const jwtSecret = process.env.JWT_SECRET;

async function login(req, res) {
  try {
    const { email, senha } = req.body;

    const psicologo = await PsicologoRepository.findOne({
      where: {
        email,
      },
    });

    if (!psicologo) {
      return res
        .status(404)
        .json({ message: "Falha na operação", data: "Usuario não encontrado" });
    }

    const passwordIsValid = bcrypt.compareSync(senha, psicologo.senha);

    if (!passwordIsValid) {
      return res
        .status(401)
        .json({ message: "Falha na operação", data: "Usuario não autorizado" });
    }

    const token = jwt.sign({ id: psicologo.id }, jwtSecret, {
      expiresIn: 86400,
    });

    return res.status(200).json({
      message: "Operação bem-sucedida",
      data: {
        token: token,
      },
    });
  } catch (error) {
    console.error("Erro na operação de login:", error);
    res.status(500).json({ message: "Falha na operação", data: [] });
  }
}

export default { login };
