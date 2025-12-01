const express = require("express");
const cors = require("cors");
const app = express();

// CORS configurado para aceitar requisições do Vercel
// Isso resolve o erro "Failed to fetch" que apareceu no teste 5
app.use(cors({
  origin: [
    'http://localhost:5173',                    // Dev local
    'https://api-partytime-front.vercel.app',  // Produção
    /\.vercel\.app$/                            // Qualquer preview do Vercel
  ],
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
  credentials: true
}));

app.use(express.json());

// DB Connection
const conn = require("./db/conn");
conn();

// Routes
const routes = require("./routes/router");
app.use("/api", routes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server online on port ${PORT}`);
});
