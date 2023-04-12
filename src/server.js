import app from "./app.js";
import db from "./configs/database.js";

try {
  await db.sync({ alter: true });
  console.log("A conexão com o db foi bem sucedida");

  app.listen(3333, () => {
    console.log("Servidor iniciado na porta 3333");
  });
} catch (error) {
  console.log("Não foi possivel se conectar com o db", error);
  process.exit(1);
}
