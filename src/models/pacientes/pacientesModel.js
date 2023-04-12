import { Sequelize } from "sequelize";
import db from "../../configs/database.js";

const Paciente = db.define("paciente", {
  id: {
    type: Sequelize.INTEGER.UNSIGNED,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  nome: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
  data_nascimento: {
    type: Sequelize.DATEONLY,
    allowNull: false,
  },
  telefone: {
    type: Sequelize.INTEGER,
  },
});

export default Paciente;
