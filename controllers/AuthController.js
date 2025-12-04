const User = require("../models/User");
const jwt = require("jsonwebtoken");

const generateToken = (userId) => {
  return jwt.sign({ id: userId }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN || "7d",
  });
};

const AuthController = {
  // novo usuário
  register: async (req, res) => {
    try {
      const { name, email, password } = req.body;

      if (!name || !email || !password) {
        return res.status(400).json({
          msg: "Por favor, preencha todos os campos (nome, email e senha)",
        });
      }

      if (password.length < 6) {
        return res.status(400).json({
          msg: "Senha deve ter no mínimo 6 caracteres",
        });
      }

      const userExists = await User.findOne({ email });
      if (userExists) {
        return res.status(400).json({
          msg: "Este email já está cadastrado. Tente fazer login.",
        });
      }

      const user = new User({
        name,
        email,
        password,
      });

      await user.save();

      const token = generateToken(user._id);

      res.status(201).json({
        msg: "Usuário registrado com sucesso!",
        token,
        user: {
          id: user._id,
          name: user.name,
          email: user.email,
        },
      });
    } catch (error) {
      console.error("Erro no registro: ", error);
      res.status(500).json({
        msg: "Erro ao registrar usuário",
        error: error.message,
      });
    }
  },

  login: async (req, res) => {
    try {
      const { email, password } = req.body;

      if (!email || !password) {
        return res.status(400).json({
          msg: "Por favor, preencha email e senha",
        });
      }

      const user = await User.findOne({ email }).select("+password");

      if (!user) {
        return res.status(401).json({
          msg: "Email ou senha incorretos",
        });
      }

      const isPasswordValid = await user.comparePassword(password);

      if (!isPasswordValid) {
        return res.status(401).json({
          msg: "Email ou senha incorretos",
        });
      }

      const token = generateToken(user._id);

      res.status(200).json({
        msg: "Login realizado com sucesso!",
        token,
        user: {
          id: user._id,
          name: user.name,
          email: user.email,
        },
      });
    } catch (error) {
      console.error("Erro no login: ", error);
      res.status(500).json({
        msg: "Erro ao fazer login",
        error: error.message,
      });
    }
  },

  getMe: async (req, res) => {
    try {
      const user = await User.findById(req.user.id);

      if (!user) {
        return res.status(404).json({
          msg: "Usuário não encontrado",
        });
      }
      res.status(200).json({
        user: {
          id: user._id,
          name: user.name,
          email: user.email,
          createdAt: user.createdAt,
        },
      });
    } catch (error) {
      console.error("Erro ao buscar usuário:", error);
      res.status(500).json({
        msg: "Erro ao buscar dados do usuário",
        error: error.message,
      });
    }
  },
};

module.exports = AuthController;
