const User = require('../../models/User');
const { Sequelize, sequelize } = require('../conexao');
const bcrypt = require('bcrypt');


async function autenticacao(req, res) {

    let senha = req.body.senha;
    const userData = await User.findOne({ where: { email: req.body.email } }).then(data => { return data });

    if (userData != null && await bcrypt.compare(senha, userData.senha)){
        req.session.user = {id: userData.id,nome: userData.nome, email: userData.email, status: 'Autenticado'};
        return res.json(req.session.user);
    } else{
        res.json({mensagem: 'Usuário ou senha inválidos!'});
    }
}

module.exports = autenticacao;