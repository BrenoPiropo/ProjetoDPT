// index.js

const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');

const app = express();
const port = process.env.PORT || 5000;

// Configuração do banco de dados PostgreSQL
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'InspecaoVeiculo',
  password: '12345',
  port: 5432,
});
const prisma = new PrismaClient()

// Middleware para habilitar o CORS
app.use(cors());
app.use(express.json());

// Rota para buscar todos os tipos de carro
app.get('/api/tipos_carro', async (req, res) => {
  try {
    console.log('Conectado com sucesso....')
    const result = await pool.query('SELECT * FROM tipo');
    res.json(result.rows);
  } catch (error) {
    console.error('Erro ao buscar tipos de carro:', error);
    res.status(500).json({ message: 'Erro ao buscar tipos de carro' });
  }
});
// Rota para buscar todos os tipos de veiculo
app.get('/api/veiculo', async (req, res) => {
  try {
    console.log('Conectado com sucesso....')
    const result = await pool.query('SELECT * FROM veiculo');
    res.json(result.rows);
  } catch (error) {
    console.error('Erro ao buscar tipos de carro:', error);
    res.status(500).json({ message: 'Erro ao buscar tipos de carro' });
  }
});

// Iniciar o servidor
app.listen(port, () => {
  console.log(`Servidor está rodando em http://localhost:${port}`);
});
