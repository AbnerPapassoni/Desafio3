import Atendimento from "./atendimentos/atendimentosModel.js";
import Paciente from "./pacientes/pacientesModel.js";
import Psicologo from "./psicologos/psicologosModel.js";

Psicologo.hasMany(Atendimento);
Paciente.hasMany(Atendimento);

Atendimento.belongsTo(Psicologo, {
  onDelete: "CASCADE",
  foreignKey: {
    name: "id_psicologo",
    allowNull: false,
  },
});
Atendimento.belongsTo(Paciente, {
  onDelete: "CASCADE",
  foreignKey: {
    name: "id_paciente",
    allowNull: false,
  },
});

export { Psicologo, Paciente, Atendimento };
