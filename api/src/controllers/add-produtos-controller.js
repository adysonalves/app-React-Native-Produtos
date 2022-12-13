const {Sequelize, sequelize} = require('../conexao');
const Produtos = require("../../models/Produtos");

async function addProduto(req,res){
    let nome = req.body.nome;
    let capacidade = req.body.capacidade;
    let preco = req.body.preco;
    let id_user = req.session.user;

    await Produtos.create({
        nome: nome,
        capacidade: capacidade,
        preco: preco,
        id_user: id_user.id
    })
    .then(success => {
        res.json(success);
    })

};

module.exports = addProduto;

