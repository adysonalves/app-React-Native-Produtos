const User = require('../../models/User');
const {Sequelize, sequelize} = require('../conexao');


async function getUser(req,res){
    await User.findAll().then(data => {
       return res.status(200).json(data);
    }).catch(e => {
        res.status(500).json({erro:"Houve um erro ao tentar recuperar a lista de usuários."});
        console.log(`Ocorreu um erro: ${e}`);
    });
}

module.exports = getUser;