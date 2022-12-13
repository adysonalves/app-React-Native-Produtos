const { Sequelize, sequelize } = require('../conexao');
const Produtos = require('../../models/Produtos');

async function editarProduto(req,res) {
    let id = req.params.id
    await Produtos.update({
        nome: req.body.nome,
        capacidade: req.body.capacidade,
        preco: req.body.preco
    }, {where:{id: id}}).then(success => {res.json({mensagem:"Produto alterado com sucesso!"})})
    .catch(err => {res.json({mensagem:"Ocorreu um erro: "+err})})
}

module.exports = editarProduto;