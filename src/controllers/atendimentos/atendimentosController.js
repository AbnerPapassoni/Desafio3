import { Atendimento as AtendimentosRepository } from "../../models/index.js";

async function findAllAtendimentos(req, res) {
  try {
    const atendimentos = await AtendimentosRepository.findAll();
    res
      .status(200)
      .json({ message: "Operação bem-sucedida", data: atendimentos });
  } catch (error) {
    console.error("Erro ao recuperar os registros dos atendimentos", error);
    res.status(500).json({ message: "Falha na operação", data: [] });
  }
}

async function findAtendimento(req, res) {
  const atendimentoID = req.params.id;
  try {
    const atendimento = await AtendimentosRepository.findByPk(atendimentoID);
    res
      .status(200)
      .json({ message: "Operação bem-sucedida", data: atendimento });
  } catch (error) {
    console.error(
      `Erro ao recuperar os registros do atendimento ${atendimentoID}`,
      error
    );
    res.status(404).json({ message: "Id não encontrado" });
  }
}

async function createAtendimento(req, res) {
  try {
    const atendimento = await AtendimentosRepository.create({
      id_paciente: req.body.id_paciente,
      data_atendimento: req.body.data_atendimento,
      observacao: req.body.observacao,
      id_psicologo: req.id,
    });
    res
      .status(201)
      .json({ message: "Operação bem-sucedida", data: atendimento });
  } catch (error) {
    console.error("Erro ao cadastrar atendimento", error);
    res
      .status(400)
      .json({ message: "Ocorreu um erro ao cadastrar o atendimento" });
  }
}

export default { findAllAtendimentos, findAtendimento, createAtendimento };
