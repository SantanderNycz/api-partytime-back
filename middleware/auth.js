const jwt = require("jsonwebtoken");
const User = require("../models/User");

const authMiddleware = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer")) {
      return res.status(401).json({
        msg: "Acesso negado. Token não fornecido.",
      });
    }

    const token = authHeader.substring(7);

    if (!token) {
      return res.status(401).json({
        msg: "Acesso negado. Token inválido.",
      });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const user = await User.findById(decoded.id);

    if (!user) {
      return res.status(401).json({
        msg: "Usuário não encontrado.",
      });
    }

    req.user = {
      id: user._id,
      name: user.name,
      email: user.email,
    };

    next();
  } catch (error) {
    console.error("Erro na autenticação: ", error);

    if (error.name === "JsonWebTokenError") {
      return res.status(401).json({
        msg: "Token inválido.",
      });
    }

    if (error.name === "TokenExpiredError") {
      return res.status(401).json({
        msg: "Token expirado. Faça login novamente.",
      });
    }

    res.status(500).json({
      msg: "Erro ao verificar autenticação.",
      error: error.message,
    });
  }
};

module.exports = authMiddleware;
