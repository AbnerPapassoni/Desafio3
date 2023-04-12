import { Sequelize } from "sequelize";
import db from "../../configs/database.js";
import Psicologo from "../psicologos/psicologosModel.js";
import Paciente from "../pacientes/pacientesModel.js";

const Atendimento = db.define("atendimento", {
  id: {
    type: Sequelize.INTEGER.UNSIGNED,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  data_atendimento: {
    type: Sequelize.DATE,
    allowNull: false,
  },
  observacao: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  id_paciente: {
    type: Sequelize.INTEGER.UNSIGNED,
    references: {
      model: Paciente,
      key: "id",
    },
  },
  id_psicologo: {
    type: Sequelize.INTEGER.UNSIGNED,
    references: {
      model: Psicologo,
      key: "id",
    },
  },
});

export default Atendimento;
