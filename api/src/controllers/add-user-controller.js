const User = require('../../models/User');
const {Sequelize, sequelize} = require('../conexao');
const bcrypt = require('bcrypt');

async function addUser(req,res) {

    let nome = req.body.nome
    let email = req.body.email;
    let senha = req.body.senha;

    if(!nome || !email || !senha){
        return res.status(500).json({mensagem:"Erro ao criar um novo usuário: "});
    }
    let passwdEncrypt = await bcrypt.hash(senha, 10);

    await User.create({
        nome: nome,
        email: email,
        senha: passwdEncrypt
    })
    .then(async(success) => {
        return res.json(await User.findOne({where:{email: email}}).then(data => {return data}));
    })
    .catch(error => {
        return res.status(500).json({mensagem:"Erro ao criar um novo usuário: "+error});
    });
}

module.exports = addUser;