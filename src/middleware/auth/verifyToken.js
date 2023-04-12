import jwt from "jsonwebtoken";

const jwtSecret = process.env.JWT_SECRET;

function verifyToken(req, res, next) {
  const token = req.headers["x-access-token"];

  if (!token) {
    return res
      .status(403)
      .json({ message: "Falha na operação", data: "Nenhum token informado" });
  }

  jwt.verify(token, jwtSecret, function (err, decoded) {
    if (err) {
      return res.status(500).json({
        message: "Falha na operação",
        data: "Não foi possivel autenticar o token enviado",
      });
    }

    req.id = decoded.id;
    next();
  });
}

export default verifyToken;
