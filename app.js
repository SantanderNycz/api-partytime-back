const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();

// ============================================
// MIDDLEWARES
// ============================================

// CORS - IMPORTANTE para permitir requisições do Vercel
app.use(cors({
  origin: [
    'http://localhost:5173',                           // Dev local
    'https://api-partytime-front.vercel.app',         // Produção
    /\.vercel\.app$/                                   // Qualquer deploy preview do Vercel
  ],
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
}));

// Parse JSON bodies
app.use(express.json());

// Parse URL-encoded bodies
app.use(express.urlencoded({ extended: true }));

// Log de todas as requisições (útil para debug)
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`, req.body);
  next();
});

// ============================================
// CONEXÃO COM MONGODB
// ============================================

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('✅ Conectado ao MongoDB');
  })
  .catch((err) => {
    console.error('❌ Erro ao conectar ao MongoDB:', err);
  });

// ============================================
// ROTAS
// ============================================

// Rota de teste
app.get('/', (req, res) => {
  res.json({ 
    message: 'Party Time API',
    status: 'online',
    timestamp: new Date().toISOString()
  });
});

// Rotas da API
const partyRoutes = require('./routes/parties');
const serviceRoutes = require('./routes/services');

app.use('/api', partyRoutes);
app.use('/api', serviceRoutes);

// ============================================
// ERROR HANDLING
// ============================================

// Rota não encontrada
app.use((req, res) => {
  res.status(404).json({ 
    msg: 'Rota não encontrada',
    path: req.url
  });
});

// Error handler global
app.use((err, req, res, next) => {
  console.error('Erro não tratado:', err);
  res.status(500).json({ 
    msg: 'Erro interno do servidor',
    error: process.env.NODE_ENV === 'development' ? err.message : undefined
  });
});

// ============================================
// SERVIDOR
// ============================================

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando na porta ${PORT}`);
  console.log(`📍 http://localhost:${PORT}`);
});

module.exports = app;
