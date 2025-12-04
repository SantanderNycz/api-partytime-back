const router = require("express").Router();
const AuthController = require("../controller/AuthController");
const authMiddleware = require("../middleware/auth");

// ==========================================
// ROTAS PÚBLICAS (não precisam de token)
// ==========================================

// POST /api/register
// Registrar novo usuário
// Body: { name, email, password }
router.post("/register", AuthController.register);

// POST /api/login
// Fazer login
// Body: { email, password }
router.post("/login", AuthController.login);

// ==========================================
// ROTAS PROTEGIDAS (precisam de token)
// ==========================================

// GET /api/me
// Obter dados do usuário autenticado
// Headers: { Authorization: "Bearer <token>" }
router.get("/me", authMiddleware, AuthController.getMe);

module.exports = router;

