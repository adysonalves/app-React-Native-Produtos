const Produtos = require('../../models/Produtos');
const {Sequelize, sequelize} = require('../conexao');

async function deleteProduto(req,res){
    let id = req.params.id;

    await Produtos.destroy({where:{id:id}})
    .then(success => {return res.json({mensagem:"Registro excluído com sucesso!"})})
    .catch(err => {return res.json({mensagem:"Erro ao excluir registro: "+err})})
}

module.exports = deleteProduto;