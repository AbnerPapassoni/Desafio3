import { Sequelize } from "sequelize";
import db from "../../configs/database.js";

const Psicologo = db.define("psicologo", {
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
  senha: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  apresentacao: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

export default Psicologo;
