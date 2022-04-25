const express = require('express');
const cors = require('cors');
const port = 3000;
const app = express();
const route = require('./src/routes/paletas.route');
const connectToDatabase = require('./src/database/database');

// Configurando nossa aplicação para trabalhar com JSON's
app.use(express.json());

// Conectando com o MongoDB
connectToDatabase();

// Configurando o CORS para que nossa aplicação seja visivel pelo front
app.use(cors());

// Configurando arquivo externo de rotas para as paletas
app.use('/paletas', route);

// Fazemos o app ouvir na porta 3000
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});

