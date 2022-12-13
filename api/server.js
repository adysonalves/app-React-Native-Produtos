require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT | 4002;
const session = require('express-session');
app.use(express.json());
app.use(express.urlencoded({extended: true}));
const {Sequelize, sequelize} = require('./src/conexao'); // CONEXÃO COM O BANCO

// SESSÕES
app.use(session({
    secret: '$2b$10$80iU8kRdeievZnz55xKrN.BeQo.bsz83LSX8TfssS3z44ATrcG3dm',
    resave: false,
    saveUninitialized: true
}));



// MODELS
const User = require('./models/User');
const Produtos = require('./models/Produtos')

// ROTAS
const router = require('./src/routes/routes');
app.use('/', router);

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta: ${PORT} do localhost.`);
});
