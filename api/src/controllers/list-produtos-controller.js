const { sequelize } = require('../conexao');
const Produtos = require('../../models/Produtos');

async function listarProdutos(req,res){
    await Produtos.findAll({order:[['id', 'DESC']]}).then(data => {

        if(data != ''){
            return res.json(data)
        }
         res.json({mensagem: 'Nenhum produto cadastrado'});
    
    })
    .catch(err => {
        console.log(`Ocorreu um erro ao recuperar registros.`)
    });
}

module.exports = listarProdutos;

