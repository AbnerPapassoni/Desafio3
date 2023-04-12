import { Psicologo as PsicologoRepository } from "../../models/index.js";
import bcrypt from "bcrypt";

async function findAllPsicologos(req, res) {
  try {
    const psicologos = await PsicologoRepository.findAll({
      attributes: {
        exclude: ["senha"],
      },
    });
    res
      .status(200)
      .json({ message: "Operação bem-sucedida", data: psicologos });
  } catch (error) {
    console.error("Erro ao recuperar os registros dos psicologos", error);
    res.status(500).json({ message: "Falha na operação", data: [] });
  }
}

async function findPsicologo(req, res) {
  const psicologoID = req.params.id;
  try {
    const psicologo = await PsicologoRepository.findByPk(psicologoID, {
      attributes: {
        exclude: ["senha"],
      },
    });
    res.status(200).json({ message: "Operação bem-sucedida", data: psicologo });
  } catch (error) {
    console.error(
      `Erro ao recuperar os registros do psicologo ${psicologoID}`,
      error
    );
    res.status(404).json({ message: "Id não encontrado" });
  }
}

async function createPsicologo(req, res) {
  try {
    const psicologo = await PsicologoRepository.create({
      nome: req.body.nome,
      email: req.body.email,
      senha: bcrypt.hashSync(req.body.senha, 10),
      apresentacao: req.body.apresentacao,
    });
    res.status(201).json({ message: "Operação bem-sucedida", data: psicologo });
  } catch (error) {
    console.error("Erro ao cadastrar psicologo", error);
    res
      .status(400)
      .json({ message: "Ocorreu um erro ao cadastrar o psicologo" });
  }
}

async function updatePsicologo(req, res) {
  const psicologoID = req.params.id;
  try {
    await PsicologoRepository.update(
      {
        nome: req.body.nome,
        email: req.body.email,
        senha: bcrypt.hashSync(req.body.senha, 10),
        apresentacao: req.body.apresentacao,
      },
      {
        where: {
          id: psicologoID,
        },
      }
    );
    const psicologo = await PsicologoRepository.findByPk(psicologoID);
    res.status(200).json({ message: "Operação bem-sucedida", data: psicologo });
  } catch (error) {
    console.error(
      `Erro ao atualizar os registros do psicologo ${psicologoID}`,
      error
    );
    res
      .status(400)
      .json({ message: "Ocorreu um erro ao atualizar o psicologo" });
  }
}

async function deletePsicologo(req, res) {
  const psicologoID = req.params.id;
  try {
    await PsicologoRepository.destroy({
      where: {
        id: psicologoID,
      },
    });
    res.status(204).json({ message: "Operação bem-sucedida" });
  } catch (error) {
    console.error(
      `Erro ao deletar os registros do psicologo ${psicologoID}`,
      error
    );
    res.status(400).json({ message: "Ocorreu um erro ao deletar o psicologo" });
  }
}

export default {
  findAllPsicologos,
  findPsicologo,
  createPsicologo,
  updatePsicologo,
  deletePsicologo,
};
