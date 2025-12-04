const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const UserSchema = new mongoose.Schema(
  {
    name: { type: String, required: [true, "Nome é obrigatório"], trim: true },
  },
  {
    email: {
      type: String,
      required: [true, "Email é obrigatório"],
      unique: true,
      lowercase: true,
      trim: true,
      match: [/\S+@\S+\.\S+/, "Por favor, ensina um email válido"],
    },
  },
  {
    password: {
      type: String,
      required: [true, "Senha é obrigatória"],
      minlength: [6, "Senha deve ter no mínimo 6 caracteres"],
      select: false, // para nao retornar a senha em consultas
    },
  },
  {
    timestamps: true,
  }
);

// Middleware para hash da senha antes de salvar
UserSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();

  // Gera hash da senha
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

// método para comparar senhas
UserSchema.methods.comparePassword = async function (candidatePassword) {
  return await bcrypt.compare(candidatePassword, this.password);
};

// método para retornar usuário sem dados sensíveis
UserSchema.methods.toJSON = function () {
  const user = this.toObject();
  delete user.password;
  return user;
};

module.exports = mongoose.model("User", UserSchema);

